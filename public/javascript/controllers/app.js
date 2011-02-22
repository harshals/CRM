
MainController = function(app) { with (app) {


	app.get('#/home', function(context) {

       	   context.render('views2/index.html').replace("#main-content");
	});

	app.get('#/task', function(context) {

        	context.render('views/task-menu.html').replace("#section-menu");
        	context.redirect("#/task-pending");
	});

        app.get('#/contact', function(context) {

        	context.render('views/contact-menu.html').replace("#section-menu");
        	context.redirect("#/contact-all");
	});
}};
