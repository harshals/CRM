
MainController = function(app) { with (app) {

	app.use(utils);
    
    app.config={};

    $.getJSON("config.json",function(json){
    	$.extend(app.config,json);
    });

	app.get('#/home', function(context) {
                           
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
