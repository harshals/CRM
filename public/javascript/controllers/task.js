TaskController = function(app) { with (app) {
			
			app.use("JSON");
		
			/*
			Sammy.RenderContext.prototype.renderTT = function() { 
  				var args = $.makeArray(arguments); 
  				// iterate over args making sure to return `this`; 

				Jemplate.process(args[0], args[1]);
				return this;
			}; 
			
			*/

			bind("task-init", function(ev, data) {
				
				Jemplate.process('task-add.html', {}, '#sidebar-content');
				
				Jemplate.process('task-menu.html', {}, '#section-menu');

				$("#sidebar-content").hide();
				$("#sidebar-content" ).find("input.datepicker").datepicker( { altFormat: 'yy-mm-dd' , dateFormat : 'dd-mm-yy'});
				$("#section-menu").find("a.task-add").click(function() {

				$("#sidebar-content").toggle();

					return false;
				});
			});

			app.before(/^#\/task-/, function(context) {

				context.log("inisde task");
				$("#main-content").html('');
				$("#sidebar-content").html('');
				$("#content-extra").html('');

				// make sure the menu remains all the time
				context.trigger("task-init")
					
					
			});

			bind("task-complete", function(ev, data) {
				
				var context = this;
			
				$.ajax( {
					
					url : "/api/Task/" + data["id"],
					dataType : "JSON",
					contentType: "application/json",
					type : "POST",
					data : this.json({ 'Task' : data }),
					success: function(json) {

						alert("Task marked completed");

						//$(".list :checked").parents("li").hide();
						//context.log("
					}(context)
				});
			});

			bind("task-populate", function(ev, data) {
				
				var context = this;

				Jemplate.process('task-list.html', { list: data }, '#main-content');
				
				$(".list :checkbox").click(function(ev) {
					
					var id = $(this).attr("name").replace("task_", '');
					
					context.trigger("task-complete",  { "id": id, "task_status" : "Success"} );
					
				});

			});

			app.get('#/task-list', function(context) {
				
				context.redirect("#/task-pending");
			});
			app.get('#/task-pending', function(context) {
						
				context.load("/api/Task/custom/incomplete_tasks")
				.then(function(json) {
					context.trigger("task-populate", json['data']);
				});

			});
			app.get('#/task-completed', function(context) {
						
				context.load("/api/Task/custom/completed_tasks")
				.then(function(json) {
					context.trigger("task-populate", json['data']);
				});

			});
			app.get('#/task-all', function(context) {
						
				context.load("/api/Task")
				.then(function(json) {
					context.trigger("task-populate", json['data']);
				});

			});

			app.post("#/task-add", function(context) {
				
				var form = context.params;
				alert("coming");
				$.put("192.168.2.4:5000/api/Task" , form, function(onSuccess) {

					context.redirect("#/task-pending");
				});

				
			});

	}};

