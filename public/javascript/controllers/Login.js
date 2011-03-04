LoginController = function(app) {with (app) {

        app.use("Template" , 'html');
        app.use("JSON");
        app.get('#/home', function(context) {

       	   context.render('views/index.html').replace("#main-content");

        $("#login").click(function(){
                      context.render("views/login-form.html")
                             .then(function(content){
                                  $.facebox( content )

                             $("#LoginForm").validate({

                                          rules: {
                                               userid: {
                                                   required:true,
                                                   minlength:4
                                               },
                                              password: {
				                    required: true,
				                    minlength: 4,
                                                    maxlength:15
			                       }
                                          },
                                            messages: {
                                                    user_id: "Enter User Id",
                                                    password: "Enter Password"
                                                    },
                                            errorContainer: "#MSGBOX",
                                            errorLabelContainer: "#MSGBOX ul",
                                            wrapper: "li"
                                        })
                              })
                               .then( function() {
                                     $("#sign_in").trigger('close.facebox');
                               })
    })
    });
}}