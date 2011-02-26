ContactController = function(app) { with (app) {

        app.use("Template" , 'html');
        app.use("JSON");
//====================================BEFORE LOADING============================
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
                                context .render("views/contact-details.html",{
                                    "data":"new"
                                })
                                .then(function(content){
                                    $.facebox(content);
                                    context.trigger("contact-save");
                                });
                                return false;
                            })
                        })
        });

//=====================================BIND FUNCTION============================

//-------------------------------------PROCESS BIND-----------------------------
        bind('Process',function(){
                var context=this

//.........................................EDIT.................................
                $("#MyTable").find("span.edit").click(function(ev) {
                    var id = $(this).attr("id").replace("row_",'');
                    $.getJSON("api/Single.json", function(json){
                        context .render("views/contact-details.html",json||{})
                        .then(function(content){
                            $.facebox(content);
                            context.trigger("contact-save");
                        });
                    })
                });

//........................................DELETE................................
                $("#MyTable").find("span.delete").click(function() {
                    $(this).parents("tr").hide();
                });

//........................................EXPAND................................
                $("#MyTable").find("a.expand").click(function() {
                    var id = $(this).attr("id").replace("row_",'');
                    $.getJSON("api/Contacts.json",function(json){
                        //alert(json);
                        context .render('views/Expand.html',{"id":id,"data":json['data']})
                                .then(function(content){
                                    $.facebox( content );
                                })
                    })
                });

        });

//--------------------------------CONTACE POPULATE BIND-------------------------
        bind("contact-populate", function(ev, data) {
                var context = this;
                context .render('views/contact-list.html')
                        .replace("#main-content")
                        .then(function(html) {
                            context .render("views/contact-list-item.html",{"data":data})
                                    .appendTo("#ADD")
                                    .then(function(){
                                        context.trigger("Process");
                                        $("#MyTable").tablesorter()
                                                     .tablesorterPager({container : $("#pager") ,positionFixed: false})
                                    })
                        });
        });

//------------------------------------NAVIGATE FORM-----------------------------
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
                        var us_id=data['data'].user_id;
                        var cs_id=data['data'].company_id;
                        $("#contact-form").find("input[name=user_id]").parents("li").show();
                        $("#contact-form").find("input[name=company_id]").parents("li").show();
                        $("#contact-form").find("input[name=company_id]").attr("value",cs_id);
                        $("#contact-form").find("input[name=user_id]").attr("value",us_id);

                    }
                    if (component=='0'){
                        $("#contact-form").find("input[name=user_id]").parents("li").show();
                        $("#contact-form").find("input[name=company_id]").parents("li").show();
                        $("#contact-form").find("input[name=company_id]").attr("value","000");
                        $("#contact-form").find("input[name=user_id]").attr("value","000");

                    }
                }).change();
                /*$(".form-steps").find("input[name=save]").click(function() {
                    $("#contact-form").find("div.box").show();
                })*/
        });

//-------------------------------------CONTACT SAVE BIND------------------------
        bind('contact-save',function(ev){
            var context  = this;
            var data ;
            context .load("api/Single.json" )
                    .then(function( json ) {
                        if (json['error']) {
                                json = {"data":{}};
                            }
                        context .render("views/contact-details.html", json )
                                .then(function(html) {
                                    $.facebox(html);
                                })
                                .then( function(html) {
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
                                    context.trigger("navigate-form",json);
                });
            });
        });
//=====================================AFTER LOADING============================
        app.get('#/contact-list', function(context) {
            context.redirect("#/contact-all");
        });

//------------------------------------ALL CONTACT-------------------------------
        app.get('#/contact-all', function(context) {
            context .load("api/Contacts.json")
                    .then(function(json) {
                        context.trigger("contact-populate", json['data']);
                    });
        });

//--------------------------------------COMPANY CONTACT-------------------------
        app.get('#/contact-company', function(context) {
            context .load("api/Contacts.json")
                    .then(function(json) {
                        context.trigger("contact-populate", json['data']);
                    });
        });

//--------------------------------------PERSON CONTACT--------------------------
        app.get('#/contact-person', function(context) {
            context .load("http://192.168.2.4:5000/api/Contact/custom/person")
                    .then(function(json) {
                        context.trigger("contact-populate", json['data']);
                    });
        });

//--------------------------------------POST------------------------------------
        app.post("#/contact-add", function(context) {
            var form = context.params.toHash();
            alert("coming");
            alert(form)
            var data = this.json({"Contact" : form})
            console.log(data)
            //$.put("192.168.2.4:5000/api/Contact" , form, function(onSuccess) {
                context.redirect("#/contact-all");
                $("#save").trigger('close.facebox');
            //});
        });

}}
