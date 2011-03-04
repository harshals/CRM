TaskController = function(app) { with (app) {
			
			app.use("JSON");
		
			bind("task-init", function(ev, data) {
				
				var context = this;
				
				//$.extend(data, {});

				context.load("/null.html" )
				.then(function(html) {
					
					this.wait();

					context.jemplate('task-menu.html', {}, '#section-menu', this);

				}).then( function(json) {
				
					this.wait();
					context.jemplate('task-add.html', { id : "new", contacts : context.look_for("Contact","person") }, '#sidebar-content', this);
				
				}).then( function(json) {
				
					$("#sidebar-content" ).find("input.datepicker").datepicker( { altFormat: 'yy-mm-dd' , dateFormat : 'dd-mm-yy'});
					$("#section-menu").find("a.task-add").click(function() {

						$("#sidebar-content").toggle();
						return false;
					});
				});


			});

			app.before(/^#\/task-/, function(context) {

				context.log("inisde task");
				$("#main-content").html('');
				$("#sidebar-content").html('');
				$("#content-extra").html('');

				// make sure the menu remains all the time
				context.trigger("task-init");
				
				$("#sidebar-content").hide();
					
			});

			bind("task-populate", function(ev, data) {
				
				var context = this;

				Jemplate.process('task-list.html', { list: data }, '#main-content');
				
				$(".list .edit").click(function(ev) {
					
					var id = $(this).attr("id").replace("task_", '');
					
					$("#sidebar-content").find("form").deserialize(context.fetch("Task", id));
					$("#sidebar-content").show();
				});

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
			app.get(/#\/task-(all|pending|completed|overdue)/, function(context, match) {
				
				var map = {
					
					pending : "incomplete_tasks",
					completed : "completed_tasks",
					overdue : "overdue_tasks",
					all	: ""
				};
					
				context.trigger("task-populate", context.look_for("Task", map[match]));
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

