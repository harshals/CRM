
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
                           
       	    context.render('views/index.html').replace("#main-content");
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
