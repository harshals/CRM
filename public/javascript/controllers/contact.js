ContactController = function(app) { with (app) {

    app.use("Template" , 'html');
    app.use("JSON");
	//====================================BEFORE LOADING============================
    app.before(/^#\/contact-/, function(context) {
            context.log("inside contact");
			$("#main-content").html('');
			$("#sidebar-content").html('');
			$("#content-extra").html('');
			// make sure the menu remains all the time
		  	context .render('views/contact-menu.html')
		  	.replace("#section-menu")
            context .render('views/Pager.html')
			.replace("#sidebar-content")
            .then(function(contact_html) {
				$("#section-menu").find("a.contact-add").click(function() {
                    context.trigger("contact-form");
                    return false;
					})
		  		})
            });

	bind("contact-delete", function(ev, id) {
				
		var context = this;
				
		context.log("comin ghere");
		$.ajax( {
			
			url : "/api/Contact/" + id,
			dataType : "JSON",
			contentType: "application/json",
			type : "DELETE",
			data : {},
			success: function(json) {
				
				context.log(json);
				alert("Contact " + json['data']['name'] + " has been deleted");

                //$("#row_" + id).parents("tr:first").hide();
                $("#row_" + json['data']['id']).parents("tr:first").hide();

			}
		});
	});
	//=====================================BIND FUNCTION============================
	//-------------------------------------PROCESS BIND-----------------------------
    bind('Process',function(){
            var context=this

			//.........................................EDIT.................................
            $("#MyTable").find("span.edit").click(function(ev) {

                var id = $(this).attr("id").replace("row_",'');
            
                context.trigger("contact-form", id);
            	alert(id);
                
                                });

			//........................................DELETE................................
            $("#MyTable").find("span.delete").click(function() {
				
 				context.trigger("contact-delete", $(this).attr("id").replace("row_",''));           
            });
			
			
			//........................................EXPAND................................
            $("#MyTable").find("a.expand").click(function() {

                var id = $(this).attr("id").replace("row_",'');

                $.getJSON("api/Contacts.json",function(json){
                    console.log(json);
                    context .render('views/Expand.html',{"id":id,"data":json['data']})
                    .then(function(content){
                        $.facebox( content );
                        })
                    })
                });

    });

	//--------------------------------CONTACE POPULATE BIND-------------------------
    bind("contact-populate", function(ev, data) {
            var context = this;
            context .render('views/contact-list.html')
			.replace("#main-content")
			.then(function(html) {
                context .render("views/contact-list-item.html",{"data":data})
                .appendTo("#ADD")
                .then(function(){
                    context.trigger("Process");
                    $("#MyTable").tablesorter()
                    .tablesorterPager({ container : $("#pager") , positionFixed: false})
                    })
                });
            });

	//-------------------------------------CONTACT SAVE BIND------------------------
    bind('contact-form',function( ev, id){
		
		var context  = this;
		var data ;
		if (id ){

		console.log(id);
			$.getJSON("/api/Contact/" + id, function(json){
				data = json;
       	     })
		};

       context .render("views/contact-details.html", data )
       	.then(function(html) {
			
			console.log(html);
           	$.facebox(html);
       	}).then( function(html) {
       		
       		$("#contact-form" )
       			.find("input.datepicker")
       			.datepicker( { altFormat: 'yy-mm-dd' , 
       							dateFormat : 'dd-mm-yy'});
 //========================validation part==========================
               $.validator.setDefaults({
  	                     submitHandler: function() { alert("submitted!"); }
                          });

                         $("#contact-form").validate({
		               rules: {
                                    name: "required",
			            title: "required",
			            company_id: "required",
		                    is_human: "required",
                                    user_id: "required",
                                    primary_phone: "required",
                                    email: "required",
                                    business_city: "required",
                                    web_page: "required"
                              },
		              messages: {
                                    name: "Enter Name",
			            title: "Enter Title",
			            company_id: "Company Id",
		                    is_human: "Fill It",
                                    user_id: "Enter Id",
                                    primary_phone: "Enter No.",
                                    email: "Enter email id ",
                                    business_city: "Enter Bussiness city",
                                    web_page: "Enter web page"
		              }
	});

    });

    
   $("#contact-form")
   	.find("fieldset.step").not("#step1")
   	.hide();
  $("#contact-form").find("a.nav-step").click(function(ev){
  	var stp = $(this).attr("id").replace("nav-",'');
                $("#contact-form")
                .find("fieldset.step")
                .hide();
                $("#contact-form")
                .find("fieldset#" + stp).show();
                return false;
      });
    });

	//=====================================AFTER LOADING============================
    app.get('#/contact-list', function(context) {
            context.redirect("#/contact-all");
            });

	//------------------------------------ALL CONTACT-------------------------------
    app.get('#/contact-all', function(context) {
            context .load("/api/Contact")
            .then(function(json) {
                context.trigger("contact-populate", json['data']);
            });

   });

	//--------------------------------------COMPANY CONTACT-------------------------
    app.get('#/contact-company', function(context) {
			context .load("api/Contact.json")
			.then(function(json) {
                alert(json['data'][0].id)
                context.trigger("contact-populate", json['data']);
				});
            });

	//--------------------------------------PERSON CONTACT--------------------------
    app.get('#/contact-person', function(context) {
            context .load("http://192.168.2.4:5000/api/Contact")
            .then(function(json) {
                context.trigger("contact-populate", json['data']);
                });
            });

	//--------------------------------------------POST------------------------------
    app.post("#/contact-add", function(context) {
			var form = context.params.toHash();
			alert("coming");
            console.log(form);
			$.ajax( {
			
				url : "/api/Contact/" + form['id'],
				dataType : "JSON",
				contentType: "application/json",
				type : "POST",
				data : { "Contact" : form},
				success: function(json) {
					
					context.log(json);
					alert(json['message']);

					context.redirect("#/contact-all");
				}
			});
	});

}}
