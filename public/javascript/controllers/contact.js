ContactController = function(app) { with (app) {

                    app.use("Template" , 'html');
                    app.use("JSON");
//====================================BEFORE LOADING============================
                    app.before(/^#\/contacts-/, function(context) {

                        context.log("inside contact");
			$("#main-content").html('');
			$("#sidebar-content").html('');
			$("#content-extra").html('');

			// make sure the menu remains all the time

		  	context .render('views/contacts-menu.html')
		  		.replace("#section-menu")

                        context .render('views/Pager.html')
				.replace("#sidebar-content")
		  		/*.then(function(task_html) {
                                    $("#sidebar-content").hide();
                                    $("#sidebar-content" ).find("input.datepicker").datepicker( { altFormat: 'yy-mm-dd' , dateFormat : 'dd-mm-yy'});
                                    $("#section-menu").find("a").click(function() {
                                        $("#sidebar-content").toggle();
					return false;
                                    });
                                });*/
                    });
//=====================================BIND FUNCTION============================
                    bind('Process',function(){
                        var context=this
//--------------------------------------------EDIT------------------------------
                        $("#MyTable").find("span.edit").click(function(ev) {
                            var id = $(this).attr("id").replace("row_",'');
                            alert(id);
                            $.getJSON("api/Table.json",function(json){
                                    context .render('views/',{"id":id,"data":json})
                                            .replace("#EDIT")
                            })
                        });
//--------------------------------------------DELETE------------------------------
                        $("#MyTable").find("span.delete").click(function() {
                            /*$(this).unbind("click");
                            $(this).siblings().unbind("click");
                            $(this).parent("td").siblings().css("text-decoration", "line-through");*/
                            $(this).parents("tr").hide();
                            //context.forward("#/all-contact");
                            //("#MyTable").trigger('updates');
                        });
//--------------------------------------------EXPAND------------------------------
                        $("#MyTable").find("a.expand").click(function() {
                            var id = $(this).attr("id").replace("row_",'');
                            alert(id);
                            $.getJSON("api/Contacts.json",function(json){
                                alert(json['data'][id-1].name)
                                context .load('views/Expand.html',{"id":id,"list":json})
                                        .then(function(content){
                                            $.facebox( content );
                                        })
                            })
                        });
                    })
//------------------------------------------------------------------------------
                    bind("contacts-populate", function(ev, data) {
                        var context = this;
                        context .render('views/contacts-list.html')
				.replace("#main-content")
				.then(function(html) {
                                    context .render("views/contacts-list-item.html",{"data":data})
                                            .appendTo("#ADD")
                                            .then(function(){
                                                context.trigger("Process");
                                                $("#MyTable").tablesorter()
                                                             .tablesorterPager({ container : $("#pager") , positionFixed: false})
                                            })
                                            /*.then(function(html) {
                                                $(".list :checkbox").click(function(ev) {
                                                    var id = $(this).attr("name").replace("task_", '');
                                                    context.trigger("task-complete",  { "id": id, "task_status" : "Success"} );
                                                    // make ajax call to database
						});
                                            });*/
				});
                    });
//=====================================AFTER LOADING============================
                    app.get('#/contacts-list', function(context) {
                        context.redirect("#/contacts-all");
                    });
//--------------------------------------CONTACT PENDING-------------------------
                    app.get('#/contacts-all', function(context) {
                        context .load("api/Contacts.json")
                                .then(function(json) {
                                    context.trigger("contacts-populate", json['data']);
                                });

                    });
//--------------------------------------CONTACT COMPLETE-------------------------
                    app.get('#/contacts-company', function(context) {
			context .load("api/Contacts.json")
				.then(function(json) {
                                    alert(json['data'][0].id)
                                    context.trigger("contacts-populate", json['data']);
				});
                    });
//--------------------------------------ALL CONTACT-------------------------
                    app.get('#/contacts-person', function(context) {
                        context .load("http://192.168.2.4:5000/api/Contact")
                                .then(function(json) {
                                    context.trigger("contacts-populate", json['data']);
                                });
                    });
}}