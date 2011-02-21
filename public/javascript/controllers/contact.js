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
                                .then(function(contact_html) {
					$("#section-menu").find("a.contacts-add").click(function() {
                                            context .load("views/contact-details.html")
                                                    .then(function(content){
                                                        $.facebox(content);
                                                    });
                                            return false;
					});
		  		});
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
                                context .load('views/Expand.html',{"id":id,"data":json['data']})
                                        .then(function(content){
                                            $.facebox( content );
                                            (function() {

						$(".form-steps").find("input[name=save]").click(function() {

							alert("submit this form");
							return false;
						})

						$("#main-content")
							.find("fieldset.step").not("#step1")
							.hide();
						$(".form-steps").find("a.nav-step").click(function(ev){

							var stp = $(this).attr("id").replace("nav-",'');


							$("#main-content")
								.find("fieldset.step")
								.hide();
							$("#main-content")
								.find("fieldset#" + stp).show();


							return false;

						});

					});
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
				});
                    });
//=====================================AFTER LOADING============================
                    app.get('#/contacts-list', function(context) {
                        context.redirect("#/contacts-all");
                    });
//------------------------------------ALL CONTACT-------------------------------
                    app.get('#/contacts-all', function(context) {
                        context .load("api/Contacts.json")
                                .then(function(json) {
                                    context.trigger("contacts-populate", json['data']);
                                });

                    });
//--------------------------------------COMPANY CONTACT-------------------------
                    app.get('#/contacts-company', function(context) {
			context .load("api/Contacts.json")
				.then(function(json) {
                                    alert(json['data'][0].id)
                                    context.trigger("contacts-populate", json['data']);
				});
                    });
//--------------------------------------PERSON CONTACT--------------------------
                    app.get('#/contacts-person', function(context) {
                        context .load("http://192.168.2.4:5000/api/Contact")
                                .then(function(json) {
                                    context.trigger("contacts-populate", json['data']);
                                });
                    });
                    
}}