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

				return new Sammy.RenderContext(this).renderTT( 'task-menu.html');

			});
			bind("task-init2", function(ev, data) {
				
				Jemplate.process('task-menu.html', {}, '#section-menu');
				
				Jemplate.process('task-add.html', {}, '#sidebar-content');

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
				.then(function(html) {
					
					var js = html;
				})
				.replace("#section-menu");
					
					
			});

			bind("task-complete", function(ev, data) {
				
				this.log( this.json({ 'Task' : data }) );
				
			
				$.ajax( {
					
					url : "/api/Task/" + data["id"],
					dataType : "JSON",
					contentType: "application/json",
					type : "POST",
					data : this.json({ 'Task' : data }),
					success: function(json) {

						alert("Task marked completed");

						$(".list :checked").parents("li:first").hide();
					}
				});
			});

			bind("task-populate", function(ev, data) {
				
				var context = this;

				context.render('views/task-list.html')
					.replace("#main-content")
					.then(function(html) {
                                                
						context.renderEach("views/task-list-item.html", data)
							.appendTo(".list > ul")
							.then(function(html) {

								$(".list :checkbox").click(function(ev) {
									
									var id = $(this).attr("name").replace("task_", '');
									
									context.trigger("task-complete",  { "id": id, "task_status" : "Success"} );
									
									

									// make ajax call to database
								});
							});
					});

			});

			app.get('#/task-list', function(context) {
				
				context.redirect("#/task-pending");
			});
			app.get('#/task-pending', function(context) {
						
				context.load("http://192.168.2.4:5000/api/Task/custom/incomplete_tasks")
				.then(function(json) {
					context.trigger("task-populate", json['data']);
				});

			});
			app.get('#/task-completed', function(context) {
						
				context.load("http://192.168.2.4:5000/api/Task/custom/completed_tasks")
				.then(function(json) {
					context.trigger("task-populate", json['data']);
				});

			});
			app.get('#/task-all', function(context) {
						
				context.load("http://192.168.2.4:5000/api/Task")
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

