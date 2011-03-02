TaskController = function(app) { with (app) {
			
			app.use("JSON");
			app.use(utils);
		
			/*
			Sammy.RenderContext.prototype.renderTT = function() { 
  				var args = $.makeArray(arguments); 
  				// iterate over args making sure to return `this`; 

				Jemplate.process(args[0], args[1]);
				return this;
			}; 
			
			*/

			bind("task-init", function(ev, data) {
				
				var context = this;

				context.load("/api/Contact/custom/person")
				.then(function(json) {
					
					this.wait();

					context.jemplate('task-add.html', { id: 'new', contacts : json['data'] }, '#sidebar-content', this);

				}).then( function(json) {
				
					$("#sidebar-content" ).find("input.datepicker").datepicker( { altFormat: 'yy-mm-dd' , dateFormat : 'dd-mm-yy'});
				});

				Jemplate.process('task-menu.html', {}, '#section-menu');

			});

			app.before(/^#\/task-/, function(context) {

				context.log("inisde task");
				$("#main-content").html('');
				$("#sidebar-content").html('');
				$("#content-extra").html('');

				// make sure the menu remains all the time
				context.trigger("task-init");
				
				$("#sidebar-content").hide();
				$("#section-menu").find("a.task-add").click(function() {

					$("#sidebar-content").toggle();
					return false;
				});
	
					
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

						$(".list :checked").parents("li").hide();
						//context.log("
					}(context)
				});
			});

			bind("task-populate", function(ev, data) {
				
				var context = this;

				Jemplate.process('task-list.html', { list: data }, '#main-content');
				
				$(".list :checkbox").click(function(ev) {
					
					var id = $(this).attr("name").replace("task_", '');
					
					context.save("Task", { "id": id, "task_status" : "Success"}, function() {
						
						$(".list :checked").parents("li").hide();

					});
					
				});

			});

			app.get('#/task-list', function(context) {
				
				context.redirect("#/task-pending");
			});
			app.get('#/task-pending', function(context) {
				
				context.load("/api/Task/custom/incomplete_tasks", {cache: false} )
				.then(function(json) {
					context.trigger("task-populate", json['data']);
				});

			});
			app.get('#/task-completed', function(context) {
						
				context.load("/api/Task/custom/completed_tasks", {cache:false})
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
				
				

				var callback = function(json) {
					
					if (json.data.id && json.data.id != 'new') {
						
						alert("Saved New object");
					}
				};

				context.save("Task", form, callback);

				context.redirect("#/task-pending");

			});

	}};

