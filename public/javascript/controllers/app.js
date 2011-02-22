
MainController = function(app) { with (app) {


	app.get('#/home', function(context) {

       	   context.render('views/index.html').replace("#main-content");
	});

	app.get('#/task', function(context) {

        	context.render('views/task-menu.html').replace("#section-menu");
        	context.redirect("#/task-pending");
	});

        app.get('#/contacts', function(context) {

        	context.render('views/contacts-menu.html').replace("#section-menu");
        	context.redirect("#/contacts-all");
	});
}};
