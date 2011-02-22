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

	//-------------------------------------CONTACT SAVE BIND------------------------
    bind('contact-form',function( ev, id){
		
		var context  = this;
		var data ;
		if (id ){

		console.log(id);
			$.getJSON("/api/Contact/" + id, function(json){
				data = json;
       	   })
		}

       context .render("views/contact-details.html", data )
       	.then(function(html) {
			
			console.log(html);
           	$.facebox(html);
       	}).then( function(html) {
       		
       		$("#contact-form" )
       			.find("input.datepicker")
       			.datepicker( { altFormat: 'yy-mm-dd' , 
       							dateFormat : 'dd-mm-yy'});

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
    app.get('#/contacts-list', function(context) {
            context.redirect("#/contacts-all");
            });

	//------------------------------------ALL CONTACT-------------------------------
    app.get('#/contacts-all', function(context) {
            context .load("/api/Contact")
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

					context.redirect("#/contacts-all");
				}
			});
	});

}}
