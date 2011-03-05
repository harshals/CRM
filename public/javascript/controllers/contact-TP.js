ContactController = function(app) {with (app) {

        app.use("Template" , 'html');
        app.use("JSON");

//===================================BEFORE LOADING=============================
        app.before(/^#\/contact-/, function(context) {
                context.log("inside contact");
                $("#main-content").html('');
                $("#sidebar-content").html('');
                $("#content-extra").html('');
                context .jemplate('Pager.html', {}, '#sidebar-content');
		context .load("null.html")
                        .then(function(html) {
                            this.wait();
                            context .jemplate('contact-menu.html', {}, '#section-menu', this)
                        })
                        .then(function(contact_html) {
                            $("#section-menu").find("a.contact-add").click(function() {
                                context.trigger("contact-form", "new");
                                return false;
                            });
                        })
        });
//====================================BIND FUNCTION=============================

//-----------------------------------PROCESS BIND-------------------------------
        bind('Process',function(){
                var context=this

//......................................EDIT....................................
                $("#MyTable").find("span.edit").click(function(ev) {
                    var id = $(this).attr("id").replace("row_",'');
                    
                        context.trigger("contact-form", id);
                    
                });

//.....................................DELETE...................................
                $("#MyTable").find("span.delete").click(function() {
                    var id= $(this).attr("id").replace("row_",'');
			if(confirm('Are you sure')) {
                        	$("#row_" +id).parents("tr:first").hide();
			}
                    var context = this;
                });

//......................................EXPAND..................................
                $("#MyTable").find("a.expand").click(function() {
                    var id = $(this).attr("id").replace("row_",'');
                    context .load('api/Single.json')
                        .then(function(json){
                            context .jemplate('Expand.html', json['data'],null,this)
                            })
                            .then(function(content){
                                        $.facebox( content );
                                    })
                        })
                });
//-----------------------------------NAVIGATE FORM------------------------------
        bind("navigate-form", function(ev, data){
                $("#contact-form")
                    .find("fieldset.step").not("#step1")
                    .hide();
                $("#contact-form").find("a.nav-step").click(function(ev){
                    var stp = $(this).attr("id").replace("nav-",'');
                    $("#contact-form")
                        .find("fieldset.step")
                        .hide();
                    $("#contact-form")
                        .find("fieldset#" + stp).show();
                });
                
        });
//----------------------------------CONTACT FORM BIND---------------------------
        bind('contact-form',function( ev, id){
                var context  = this;
                //var data1 ;
                var js;
                context .load('api/Contacts.json')
                .then(function(companies){
                    context .load('api/Single.json')
                        .then(function( json ) {
                            var data1;
                            if (json['error']) {
                                json = {"data":{}};
                            }
                            //data1['contact'] = json['data'];
                            json['contacts'] = companies['data'];
                            context .jemplate('contact-details.html', json,null,this)
                            js=json;
                        })
                        .then(function(html) {
                            $.facebox(html);
                        })
                        .then( function(html) {
                            $("#contact-form" ).find("input.datepicker").datepicker( {altFormat: 'yy-mm-dd' ,dateFormat : 'dd-mm-yy'});
                            $("#contact-form").validate({
                                messages:app["config"]["data"]["Contact"]["validation_messages"],
                                /*messages: {
                                    name: "Enter Name",
                                    title: "Enter Profession Title",
                                    is_human: "Fill It",
                                    primary_phone: "Enter No.",
                                    email: "Enter email id ",
                                    business_city: "Enter Bussiness city",
                                    web_page: "Enter web page"
                                },*/
                                errorContainer: "#MSGBOX",
                                errorLabelContainer: "#MSGBOX ul",
                                wrapper: "li"
                            });
                            context.trigger("navigate-form");
                        });
                })
        });

//==================================AFTER LOADING===============================
        app.get('#/contact-list', function(context) {
                context.redirect("#/contact-all");
        });

//------------------------------------LOADING CONTACTS--------------------------
        app.get(/#\/contact-(person|all|company)/, function(context, match) {
                context .load("api/Contacts.json")
                        .then(function(json){
                            alert(json)
                            this.wait();
                            context .jemplate('contact-list.html', { list : json['data'] }, "#main-content",this);
                            var OBJ=JSON.stringify(json)
                            alert(OBJ);
                            context.log(OBJ)
                        })
                        .then(function(){
                            context.trigger("Process");
                             $("#MyTable").tablesorter()
                                          .tablesorterPager({container : $("#pager") , positionFixed: false})

                       });
        });

//----------------------------------------POST----------------------------------
        app.post("#/contact-add", function(context) {
                var form = context.params.toHash();
                if(confirm('Are you sure')) {
                    $("#save").trigger('close.facebox');
                    context.redirect("#/contact-all");
                }
        });

}}