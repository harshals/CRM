ProfileController = function(app) { with (app) {
	app.use("JSON");
	bind("profile-init", function(ev, data) {
            var context = this;
				
             context.load("null.html" )
		    .then(function(html) {
			this.wait();
                         context.jemplate('profile-menu.html', {}, '#section-menu', this);
		     }).then( function() {
			  $("#section-menu").find("a#change_password").click(function()  {
			  context.load("null.html")
				 .then(function(html) {
				      this.wait();
				      context.log("password");
				      context.jemplate('change_password.html',{},'#sidebar-content', this);
				  }).then(function(html){
					//submit code
                                       $("#submit").click(function(){
                                           $("#sidebar-content").find("#change_password").validate({
                                               rules: {
                                                  old_password: {
                                                     required:true,
                                                     minlength:4,
                                                     maxlength:15
                                                  },
                                                  new_password: {
                                                     required:true,
                                                     minlength:4,
                                                     maxlength:15
                                                  },
                                                  re_password: {
                                                     equalTo:"#new_password"
                                                  }
                                                },
                                                messages: {
                                                      old_password:"Enter Correct Password",
                                                      password:"Enter Password with min 4 char",
                                                      re_password: "Enter same password again"
                                                },
                                                errorClass: "small"
                                            });
                                        });
					return false;
				  });
			  });
			  $("#section-menu").find("a#backup").click(function() {
			       context.load("null.html")
				      .then(function(html) {
				            this.wait();
					   context.log("click here");
					   context.jemplate('back_up.html',{},'#sidebar-content', this);
				       }).then(function(json){
                                            $("#submit").click(function(){
                                                var value=$("#sidebar-content").find("input[name=file_name]").val();
                                                var json={'name':value}
                                                   $.ajax({
                                                        type: "POST",
                                                        url: "/backup",
                                                        dataType: "json",
                                                        cache: false,
                                                        data : context.json(data),
                                                        success: function(data) {
                                                           var url =  data['url'];
                                                           $('#ADD').html('<a href = "url">'+value+'</a> <span>right click and save file</span');
                                                        },
                                                        error: function(data){
                                                            alert("FAILED")
                                                           $('#ADD').html('<a href = "url">'+value+'</a> <span>right click and save file</span');
                                                        }
                                                    });
                                             });
                                       });
                          })
			});
        })
  //-----------------------------------NAVIGATE FORM------------------------------
        bind("navigate-form", function(ev, data){
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
                });
        });

 //-------------------end of bind---------------------------------
	app.before(/^#\/profile/, function(context) {
            context.log("inisde profile details");
	     $("#main-content").html('');
	     $("#sidebar-content").html('');
	      // make sure the menu remains all the time
	      context.trigger("profile-init");
	      context.log("i m before");
              
        });

//==================================AFTER LOADING===============================
//------------------------------------LOADING PROFILE--------------------------
       app.get("#/profile-detail", function(ev, data) {
	    var context = this;
            console.log("booom");
	    context.jemplate('profile-view.html',{},'#main-content');
       });
        app.get("#/profile-advance", function(ev, data) {
            var context = this;
            console.log("i m in advance");
            context.jemplate('contact-details.html',{},'#main-content');
            context.trigger("navigate-form");
        })
}}

