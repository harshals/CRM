
MainController = function(app) { with (app) {

	app.use(utils);
	app.profile = {
		
		id : 1,
		name : 'Harshal Shah'
	};
        app.config={};
        $.getJSON("config.json",function(json){
            $.extend(app.config,json);
        });

	app.get('#/home', function(context) {
                           
       	    var profile_id=$.cookie("profile_id");

            if (profile_id == 'null ') {

                $("#logout").click();
                console.log("LOG OUT");
            }
            console.log(profile_id);
            context.load('/api/Contact/' + profile_id)
            .then(function(json){
                $("#profile").text(data['name']);
            })
	});

	app.get('#/task', function(context) {

        	context.render('views/task-menu.html').replace("#section-menu");
        	context.redirect("#/task-pending");
	});

        app.get('#/contact', function(context) {

        	context.render('views/contact-menu.html').replace("#section-menu");
        	context.redirect("#/contact-all");
                
	});
        app.get('#/profile', function(context) {
        	//context.render('views/profile-menu').replace("#section-menu");
                context.redirect("#/profile-detail");
	});
}};
