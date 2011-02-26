ContactController = function(app) {with (app) {

        app.use("Template" , 'html');
        app.use("JSON");
//===================================BEFORE LOADING=============================
        app.before(/^#\/contact-/, function(context) {
                context.log("inside contact");
                $("#main-content").html('');
                $("#sidebar-content").html('');
                $("#content-extra").html('');
                context .render('views/contact-menu.html')
                        .replace("#section-menu")
                context .render('views/Pager.html')
                        .replace("#sidebar-content")
                        .then(function(contact_html) {
                                $("#section-menu").find("a.contact-add").click(function() {
                                    context.trigger("contact-form", "new");
                                    return false;
                                })
                        })
        });
//====================================BIND FUNCTION=============================

//----------------------------------CONTACT DELETE BIND-------------------------
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
                        //alert("Contact " + json['data']['name'] + " has been deleted");
                        $("#row_" + json['data']['id']).parents("tr:first").hide();
                    }
		});
	});
//-----------------------------------PROCESS BIND-------------------------------
        bind('Process',function(){
                var context=this

//......................................EDIT....................................
                $("#MyTable").find("span.edit").click(function(ev) {
                    var id = $(this).attr("id").replace("row_",'');
                    //alert(id);
                    context.trigger("contact-form", id);
                });

//.....................................DELETE...................................
                $("#MyTable").find("span.delete").click(function() {
                    context.trigger("contact-delete", $(this).attr("id").replace("row_",''));
                    //alert(id);
                });

//......................................EXPAND..................................
                $("#MyTable").find("a.expand").click(function() {
                    var id = $(this).attr("id").replace("row_",'');
                    //alert(id);
                    $.getJSON("api/Contacts.json",function(json){
                        //console.log(json);
                        context .render('views/Expand.html',[{"id":id,"data":json['data']},{cache:false}])
                                .then(function(content){
                                    $.facebox( content );
                                })
                        })
                });
        });

//--------------------------------CONTACE POPULATE BIND-------------------------
        bind("contact-populate", function(ev, data) {
                var context = this;
                context .render('views/contact-list.html',{cache:false})
			.replace("#main-content")
			.then(function(html) {
                            context .render("views/contact-list-item.html",[{"data":data},{cache:false}])
                                    .appendTo("#ADD")
                                    .then(function(){
                                        context.trigger("Process");
                                        $("#MyTable").tablesorter()
                                                     .tablesorterPager({container : $("#pager") , positionFixed: false})
                                    })
                        });
        });

//-----------------------------------NAVIGATE FORM------------------------------
        bind("navigate-form", function(ev, data){
                $("#contact-form")
                    .find("fieldset.step").not("#step1")
                    .hide();
                $("#contact-form").find("input[name=is_human]")
                    $("#contact-form").find("input[name=user_id]").parents("li").hide();
                    $("#contact-form").find("input[name=company_id]").parents("li").hide();
                $("#contact-form").find("a.nav-step").click(function(ev){
                    var stp = $(this).attr("id").replace("nav-",'');
                    $("#contact-form")
                        .find("fieldset.step")
                        .hide();
                    $("#contact-form")
                        .find("fieldset#" + stp).show();
                });
                $("#contact-form").find("select[name=is_human]").change(function(ev){
                    var component=$(this).val();
                    if (component=='1'){
                        $("#contact-form").find("input[name=user_id]").parents("li").show();
                        $("#contact-form").find("input[name=company_id]").parents("li").show();
                    }
                    if (component=='0'){
                        $("#contact-form").find("input[name=user_id]").parents("li").show();
                        $("#contact-form").find("input[name=company_id]").parents("li").show();
                        $("#contact-form").find("input[name=user_id]").attr("class").replace("error","");
                        $("#contact-form").find("input[name=company_id]").rules("remove", "required");
                        // $("#contact-form").find("input[name=user_id]").attr(rules1);
                        //$("#contact-form").find("input[name=company_id]").attr(rules2);
                    }
                }).change();
                /*$(".form-steps").find("input[name=save]").click(function() {
                    $("#contact-form").find("div.box").show();
                })*/
        });
        
//----------------------------------CONTACT FORM BIND---------------------------
        bind('contact-form',function( ev, id){
                var context  = this;
                var data ;
                /*if (id ){
                    console.log(id);
                    $.getJSON("/api/Contact/" + id, function(json){
                        data = json;
                    })
                };*/
                context .load("/api/Contact/" + id )
                        .then(function( json ) {

                            if (json['error']) {
                                json = {"data":{}};
                            }
                            context .render("views/contact-details.html", [json,{cache:false}])

                            context .render("views/contact-details.html", json )
                                    alert("inside")
                                    .then(function(html) {
                                        $.facebox(html);
                                    })
                                    .then( function(html) {
                                         
                                       if (this.is_human=='0'){
                                            this.user_id="0";
                                           
                                        };
                                       $("#contact-form" ).find("input.datepicker").datepicker( {altFormat: 'yy-mm-dd' ,dateFormat : 'dd-mm-yy'});
                                        
                                        $("#contact-form").validate({
                                            messages: {
                                                    name: "Enter Name",
                                                    title: "Enter Profession Title",
                                                    company_id: "Enter Company Id",
                                                    is_human: "Fill It",
                                                    user_id: "Enter User Id",
                                                    primary_phone: "Enter No.",
                                                    email: "Enter email id ",
                                                    business_city: "Enter Bussiness city",
                                                    web_page: "Enter web page"
                                            },
                                            errorContainer: "#MSGBOX",
                                            errorLabelContainer: "#MSGBOX ul",
                                            wrapper: "li"
                                        });
                                        context.trigger("navigate-form");
                                    });
                        });
        });

//==================================AFTER LOADING===============================
        app.get('#/contact-list', function(context) {
                context.redirect("#/contact-all");
        });
        
//----------------------------------ALL CONTACT---------------------------------
        app.get('#/contact-all', function(context) {
                context .load("/api/Contact")
                        .then(function(json) {
                            context.trigger("contact-populate", [json['data'],{cache:false}]);
                        });
        });

//------------------------------------COMPANY CONTACT---------------------------
        app.get('#/contact-company', function(context) {
                context .load("api/Contact/custom/company")
			.then(function(json) {
                            context.trigger("contact-populate",[ json['data'],{cache:false}]);
                        });
        });

//------------------------------------PERSON CONTACT----------------------------
        app.get('#/contact-person', function(context) {
                context .load("api/Contact/custom/person")
                        .then(function(json){
                            context.trigger("contact-populate", [json['data'],{cache:false}]);
                        });
        });

//----------------------------------------POST----------------------------------
        app.post("#/contact-add", function(context) {
                var form = context.params.toHash();

		alert("coming");
                console.log(form);
                var url, method;

                if(form['id']==""){
                    url = "/api/Contact";
                    method="PUT";
                }else {
                    url = "/api/Contact/" + form['id'];
                    method="POST";
                }
                $.ajax( {
                    url : url,
                    dataType : "JSON",
                    contentType: "application/json",
                    type : method,
                    data : this.json({"Contact" : form}),
                    success: function(json) {
                        context.log(json);
                        $("#save").trigger('close.facebox');
                        context.redirect("#/contact-all");
                    }
                });
        });

}}
