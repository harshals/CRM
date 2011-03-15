ProfileController = function(app) {with (app) {

        app.use("Template" , 'html');
        app.use("JSON");

//===================================BEFORE LOADING=============================
        app.before(/^#\/profile-/, function(context) {
                context.log("inside contact");
                $("#main-content").html('');
                $("#sidebar-content").html('');
                $("#content-extra").html('');
        });


//==================================AFTER LOADING===============================
//------------------------------------LOADING PROFILE--------------------------
        app.get('#/profile-detail', function(context) {
              context .render("views/profile-view.html").replace("#main-content")
                      .then (function(){
                           $("#adv_detail").hide();
                       });
             context .render('views/profile-menu.html').replace("#section-menu")
                     .then (function(){
                           $("#shown").find("a.expand").click(function(ev) {
                               alert("shows personal details");
                               $("#adv_detail").show();
                           })
						   $("#shown").find("a.change_password").click(function(ev) {
                              context .render('views/change_password.html')
                                      .replace("#sidebar-content");
							})
							$("#shown").find("a.back_up").click(function(ev) {
                              context .render('views/back_up.html')
                                      .replace("#sidebar-content")
							})
						})
      });
}}
