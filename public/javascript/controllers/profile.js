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
				
                context .load("/api/Contact/" + app.profile_id)
                        .then(function(json) {
                            this.wait();
                            context .jemplate('profile-view.html', json['data'], '#main-content', this)
                            context .jemplate('profile-menu.html', json['data'], '#section-menu', this)
                        })
                        .then (function(){
                            $("#adv_detail").hide();
                            this.wait();

                        })
                        .then (function(){
                            $("#shown").find("a.expand").click(function(ev) {
                                alert("shows personal details");
                                $("#adv_detail").show();
                            })
                            $("#shown").find("a.change_password").click(function(ev) {
                                context .jemplate('change_password.html', {}, '#sidebar-content', this)
                            })
                            $("#shown").find("a.back_up").click(function(ev) {
                                context .jemplate('back_up.html', {}, '#sidebar-content', this)
                            })
                        })
            });
}}
