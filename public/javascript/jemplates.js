/*
   This JavaScript code was generated by Jemplate, the JavaScript
   Template Toolkit. Any changes made to this file will be lost the next
   time the templates are compiled.

   Copyright 2006-2008 - Ingy döt Net - All rights reserved.
*/

if (typeof(Jemplate) == 'undefined')
    throw('Jemplate.js must be loaded before any Jemplate template files');

Jemplate.templateMap['BAckup.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '\n\n<form method="POST" name="" action="#/contact-add" id=contact-form>\n    <div id="MSGBOX" class="box negative notice">\n    <ul></ul>\n </div>\n        <h1><font color="red" allign="center">Personal Information Form</font></h1>\n  <p class="form-steps form">\n\n\n\n        <a  class="nav-step" id="nav-step1">Personal Details :-1</a>|\n        <a  class="nav-step" id="nav-step2">Personal Details :-2</a>|\n        <a  class="nav-step" id="nav-step3">Company Details :-1</a>|\n        <a  class="nav-step" id="nav-step4">Company Details :-2</a>\n   </p>\n   <p class="form-steps form right">\n        <input type="submit" value="Save" name="save" id="save" class="button " />\n       <input type=reset value="Reset" name="reset" class="button" />\n   </p>\n        <input type=hidden value="';
//line 21 "BAckup.html"
output += stash.get(['data', 0, 'id', 0]);
output += '" name="id" />\n\n\n\n        <fieldset class="grid_17 blue box step" id="step1">\n            <legend>I m a legend</legend>\n            <h3>Personal Details :-1</h3>\n            <ul class="form tar">\n                <li>\n                        <label>Initial</label>\n                        <select name="suffix initials">\n                            <option value="i1">Mr.\n                            <option value="i2">Mrs.\n                            <option value="i3">Ms.\n                        </select>\n                </li>\n                <li>\n                        <label>Enter Name :- </label>\n                        <input type="text"  name="first_name" value="" />\n                        <input type="text"  name="middle_name" value="" />\n                        <input type="text" name="last_name" value="" />\n                </li>\n                <li>\n                        <label>Select Gender</label>\n                        <input type="radio" name="gender" value="Male"/>Male<br>\n                        <input type="radio" name="gender" value="Female"/>Female\n                </li>\n                <li>\n                        <label>Birth-Date</label>\n                        <input type="text" name="birthday" value="" class="datepicker"/>\n                </li>\n                <li>\n                        <label>Language</label>\n                        <input type="text"  name="language" value="">\n                </li>\n                <li>\n                        <label>Country</label>\n                        <input type="text" name="home_country" value="">\n                </li>\n                <li>\n                        <label>State</label>\n                        <input type="text" name="home_state" value="">\n                </li>\n                <li>\n                        <label>City</label>\n                        <input type="text" name="home_city" value="">\n                </li>\n\n                <li>\n                         <label>Street</label>\n                         <input type="text" name="home_street" value=""/>\n                </li>\n                <li>\n                         <label>Street 2</label>\n                         <input type="text" name="home_street_2" value=""/>\n                </li>\n                <li>\n                         <label>Street 3</label>\n                         <input type="text" name="home_street_3" value=""/>\n                </li>\n                <li>\n                         <label>Postal Code</label>\n                         <input type="text" name="home_postal_code" value=""/>\n               </li>\n           </ul>\n    </fieldset>\n\n\n    <fieldset class="grid_17 blue box step" id="step2">\n         <legend>I m a legend</legend>\n        <h3>Personal Details :-2</h3>\n        <ul class="form tar">\n            <li>\n                      <label>email-id</label>\n                      <input type="text" value="" name="email_address">\n            </li>\n            <li>\n                      <label>Alternate email-id</label>\n                      <input type="text" value="" name="email_address_2">\n            </li>\n            <li>\n                      <label>Landline No.</label>\n                      <input type="text" name="home_phone" value=""/>\n            </li>\n            <li>\n                       <label>Alternate No</label>\n                       <input type="text" name="home_phone_2" value=""/>\n            </li>\n            <li>\n                       <label>Mobile No.</label>\n                       <input type="text" value="+91-" name="mobile_phone" value=""/>\n            </li>\n             <li>\n                       <label >Fax No.</label>\n                       <input type="text" name="home_fax" value=""/>\n            </li>\n        </ul>\n    </fieldset>\n\n\n    <fieldset class="grid_17 blue box step" id="step3">\n         <legend>I m a legend</legend>\n        <h3>Company Details 1</h3>\n        <ul class="form tar">\n            <li>\n                  <label class="required">Company\'s Name</label>\n                  <input type="text" name="name" value="<%=data.name%>">\n            </li>\n             <li>\n                  <label class="required">Company ID</label>\n                  <input type="text" name="company_id" value="<%=data.id%>">\n            </li>\n            <li>\n                  <label class="required">Company/Employee</label>\n                  <input type="text" name="is_human" value="<%=data.is_human%>">\n            </li>\n            <li>\n                  <label class="required">Your Profession</label>\n                  <input type="text" name="title" value="<%=data.title%>">\n            </li>\n            <li>\n                 <label class="required">User Id</label>\n                 <input type="text" name="user_id" value="<%=data.user_id%>">\n            </li>\n            <li>\n                 <label>Department</label>\n                 <input type="text" name="department" value=""/>\n            </li>\n            <li>\n                   <label>Country</label>\n                   <input type="text" name="business_country" value=""/>\n            </li>\n             <li>\n                   <label>State</label>\n                   <input type="text" name="business_state" value=""/>\n             </li>\n             <li>\n                   <label class="required">City</label>\n                   <input type="text" name="business_city" value="<%=data.business_city%>">\n             </li>\n             <li>\n                   <label>Office Address</label>\n             </li>\n             <li>\n                   <label>Street 1</label>\n                   <input type="text" name="business_street" value=""/>\n             </li>\n             <li>\n                   <label>Street 2</label>\n                   <input type="text" name="business_street_2" value=""/>\n             </li>\n             <li>\n                   <label>Street 3</label>\n                   <input type="text" name="business_street_3" value=""/>\n             </li>\n             <li>\n                   <label>Postal Code</label>\n                   <input type="text" name="business_postal_code" value=""/>\n             </li>\n        </ul>\n    </fieldset>\n\n\n    <fieldset class="grid_17 blue box step" id="step4">\n        <legend>I m a legend</legend>\n        <h3>Company Details 2</h3>\n        <ul class="form tar">\n            <li>\n                <label class="required" for="webpage">Company\'s web page</label>\n                <input type="text" name="web_page" value="<%=data.web_page%>"/>\n            </li>\n            <li>\n                 <label class="required">email-id</label>\n                 <input id="email" name="email" value="<%=data.email%>" class="required email" />\n            </li>\n            <li>\n                 <label class="required">Landline No.</label>\n                 <input type="text" name="business_phone" value="<%=data.primary_phone%>">\n            </li>\n            <li>\n                <label>Alternate No</label>\n                <input type="text" name="business_phone_2" value=""/>\n             </li>\n            <li>\n                <label >Fax No.</label>\n                <input type="text" name="business_fax" value=""/>\n            </li>\n             <li>\n                   <label>Referred By</label>\n                   <select name="refferred" value="reff">\n                           <option value="email">email\n                           <option value="client">By Client\n                           <option value="other">Others\n                   </select>\n            </li>\n            <li>\n                <label >Billing Payment</label>\n                <select name="bill_pay" value="billpay" name=""billing_information>\n                    <option >mode Of Pay\n                    <option value="cash">Cash\n                    <option value="cheque">Cheque\n                   <option value="dd">D.D.\n                </select>\n            </li>\n        </ul>\n    </fieldset>\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['Expand.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<form class="" id="form1">\n        <fieldset class="grid_11 green box">\n                <legend>This is a legend</legend>\n                    <ul class="form tar" >\n                        <li>\n                            <h4>Id</h4>';
//line 6 "Expand.html"
output += stash.get('id');
output += '\n                        </li>\n                        <li>\n                            <h4>Name</h4> ';
//line 9 "Expand.html"
output += stash.get('name');
output += '\n                        </li>\n                        <li>\n                            <h4>Title</h4> ';
//line 12 "Expand.html"
output += stash.get('title');
output += '\n                        </li>\n                        <li>\n                            <h4>Web Page</h4> ';
//line 15 "Expand.html"
output += stash.get('web_page');
output += '\n                        </li>\n                        <li>\n                            <h4>Primary Phone</h4> ';
//line 18 "Expand.html"
output += stash.get('primary_phone');
output += '\n                        </li>\n                        <li>\n                            <h4>Is Human</h4> ';
//line 21 "Expand.html"
output += stash.get('is_human');
output += '\n                        </li>\n                        <li>\n                            <h4>Company Id</h4> ';
//line 24 "Expand.html"
output += stash.get('company_id');
output += '\n                        </li>\n                        <li>\n                            <h4>Secondary Id</h4> ';
//line 27 "Expand.html"
output += stash.get('_id');
output += '\n                        </li>\n                        <li>\n                            <h4>Email</h4> ';
//line 30 "Expand.html"
output += stash.get('email');
output += '\n                        </li>\n                        <li>\n                            <h4>Business City</h4> ';
//line 33 "Expand.html"
output += stash.get('business_city');
output += '\n                        </li>\n                        <li>\n                            <h4>User Id</h4> ';
//line 36 "Expand.html"
output += stash.get('user_id');
output += '\n                        </li>\n                        <li>\n                            <h4>Log</h4> ';
//line 39 "Expand.html"
output += stash.get('log');
output += '\n                        </li>\n                    </ul>\n        </fieldset>\n</form>\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['Pager.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<div id="pager" class="pager box blue ">\n	<form>\n		<span class="icon first" ></span>\n		<span class="icon prev" ></span>\n		<input type="text" class="pagedisplay grid_2" />\n		<span class="icon last"/></span>\n		<span class="icon next"/></span>\n		<select class="pagesize">\n			<option selected="selected"  value="10">10</option>\n			<option value="20">20</option>\n			<option value="30">30</option>\n			<option  value="40">40</option>\n		</select>\n	</form>\n</div>\n\n\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['company-id.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += 'var i=0';
//line 6 "company-id.html"

// FOREACH 
(function() {
    var list = stash.get('contacts');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['contact'] = value;
output += '\n<option value="';
//line 2 "company-id.html"
output += stash.get('contact');
output += '" ';
//line 2 "company-id.html"
if (stash.get(['contact', 0, 'i', 0, 'company_id', 0]) == stash.get('match')) {
output += ' selected ';
}

output += '>\n	';
//line 3 "company-id.html"
output += stash.get('contact');
output += '\n</option>\ni=i+1;\n';;
            retval = list.get_next();
            value = retval[0];
            done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['contact-details.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<form method="POST" name="" action="#/contact-add" id=contact-form>\n    <div id="MSGBOX" class="box negative notice">\n    <ul></ul>\n </div>\n        <h1><font color="red" allign="center">Personal Information Form</font></h1>\n  <p class="form-steps form">\n        \n        <a  class="nav-step" id="nav-step1">Personal Details :-1</a>|\n        <a  class="nav-step" id="nav-step2">Personal Details :-2</a>|\n        <a  class="nav-step" id="nav-step3">Company Details :-1</a>|\n        <a  class="nav-step" id="nav-step4">Company Details :-2</a>\n   </p>\n   <p class="form-steps form right">\n        <input type="submit" value="Save" name="save" id="save" class="button " />\n       <input type=reset value="Reset" name="reset" class="button" />\n       <span id="link"></span>\n   </p>\n   \n   <input type=hidden value="';
//line 19 "contact-details.html"
output += stash.get(['data', 0, 'id', 0]);
output += '" name="id" />\n        <fieldset class="grid_17 blue box step" id="step1">\n            <legend>I m a legend</legend>\n            <h3>Personal Details :-1</h3>\n            <ul class="form tar">\n                <li>\n                        <label>Initial</label>\n                        <select name="suffix initials">\n                            <option value="mr">Mr.\n                            <option value="mrs">Mrs.\n                            <option value="ms">Ms.\n                        </select>\n                </li>\n                <li>\n                        <label>Enter Name :- </label>\n                        <input type="text"  name="first_name" value="';
//line 34 "contact-details.html"
output += stash.get(['data', 0, 'first_name', 0]);
output += '" />\n                        <input type="text"  name="middle_name" value="';
//line 35 "contact-details.html"
output += stash.get(['data', 0, 'middle_name', 0]);
output += '" />\n                        <input type="text" name="last_name" value="';
//line 36 "contact-details.html"
output += stash.get(['data', 0, 'last_name', 0]);
output += '" />\n                </li>\n                <li class="vii">\n                        <label>Select Gender</label>\n                        <input type="radio" name="gender" value="Male"/><label>Male</label>\n                        <input type="radio" name="gender" value="Female"/><label>Female</label>\n                </li>\n                <li>\n                        <label>Birth-Date</label>\n                        <input type="text" name="birthday" value="';
//line 45 "contact-details.html"
output += stash.get(['data', 0, 'birthday', 0]);
output += '" class="datepicker"/>\n                </li>\n                <li>\n                        <label>Language</label>\n                        <input type="text"  name="language" value="';
//line 49 "contact-details.html"
output += stash.get(['data', 0, 'language', 0]);
output += '">\n                </li>\n                <li>\n                        <label>Country</label>\n                        <input type="text" name="home_country" value="';
//line 53 "contact-details.html"
output += stash.get(['data', 0, 'home_country', 0]);
output += '">\n                </li>\n                <li>\n                        <label>State</label>\n                        <input type="text" name="home_state" value="';
//line 57 "contact-details.html"
output += stash.get(['data', 0, 'home_state', 0]);
output += '">\n                </li>\n                <li>\n                        <label>City</label>\n                        <input type="text" name="home_city" value="';
//line 61 "contact-details.html"
output += stash.get(['data', 0, 'home_city', 0]);
output += '">\n                </li>\n                \n                <li>\n                         <label>Street</label>\n                         <input type="text" name="home_street" value="';
//line 66 "contact-details.html"
output += stash.get(['data', 0, 'home_street', 0]);
output += '"/>\n                </li>\n                <li>\n                         <label>Street 2</label>\n                         <input type="text" name="home_street_2" value="';
//line 70 "contact-details.html"
output += stash.get(['data', 0, 'home_street_2', 0]);
output += '"/>\n                </li>\n                <li>\n                         <label>Street 3</label>\n                         <input type="text" name="home_street_3" value="';
//line 74 "contact-details.html"
output += stash.get(['data', 0, 'home_street_3', 0]);
output += '"/>\n                </li>\n                <li>\n                         <label>Postal Code</label>\n                         <input type="text" name="home_postal_code" value="';
//line 78 "contact-details.html"
output += stash.get(['data', 0, 'home_postal_code', 0]);
output += '"/>\n               </li>\n           </ul>\n    </fieldset>\n\n    <fieldset class="grid_17 blue box step" id="step2">\n         <legend>I m a legend</legend>\n        <h3>Personal Details :-2</h3>\n        <ul class="form tar">\n            <li>\n                      <label>email-id</label>\n                      <input type="text" value="';
//line 89 "contact-details.html"
output += stash.get(['data', 0, 'email_address', 0]);
output += '" name="email_address">\n            </li>\n            <li>\n                      <label>Alternate email-id</label>\n                      <input type="text" value="';
//line 93 "contact-details.html"
output += stash.get(['data', 0, 'email_address_2', 0]);
output += '" name="email_address_2">\n            </li>\n            <li>\n                      <label>Landline No.</label>\n                      <input type="text" name="home_phone" value="';
//line 97 "contact-details.html"
output += stash.get(['data', 0, 'home_phone', 0]);
output += '"/>\n            </li>\n            <li>\n                       <label>Alternate No</label>\n                       <input type="text" name="home_phone_2" value="';
//line 101 "contact-details.html"
output += stash.get(['data', 0, 'home_phone_2', 0]);
output += '"/>\n            </li>\n            <li>\n                       <label>Mobile No.</label>\n                       <input type="text" name="mobile_phone" value="';
//line 105 "contact-details.html"
output += stash.get(['data', 0, 'moblie_phone', 0]);
output += '"/>\n            </li>\n             <li>\n                       <label >Fax No.</label>\n                       <input type="text" name="home_fax" value="';
//line 109 "contact-details.html"
output += stash.get(['data', 0, 'home_fax', 0]);
output += '"/>\n            </li>\n        </ul>\n    </fieldset>\n\n    <fieldset class="grid_17 blue box step" id="step3">\n         <legend>I m a legend</legend>\n        <h3>Company Details 1</h3>\n        <ul class="form tar">\n            <li>\n                  <label class="required">Company\'s Name</label>\n                  <input type="text" name="name" class="required" value="';
//line 120 "contact-details.html"
output += stash.get(['data', 0, 'name', 0]);
output += '">\n            </li>\n            <li>\n                <label>Company/Employee</label>\n                ';
//line 129 "contact-details.html"
if (stash.get(['data', 0, 'is_human', 0]) == '0') {
output += '\n                        <select name="is_human" class="required">\n                            <option value="0">Company\n                            <option value="1">Employee\n                        </select>\n                ';
}

output += '\n                ';
//line 135 "contact-details.html"
if (stash.get(['data', 0, 'is_human', 0]) == '1') {
output += '\n                        <select name="is_human" class="required">\n                            <option value="1">Employee\n                            <option value="0">Company\n                        </select>\n                ';
}

output += '\n            </li>\n            <li>\n                  <label class="required">Your Profession</label>\n                  <input type="text" class="required" name="title" value="';
//line 139 "contact-details.html"
output += stash.get(['data', 0, 'title', 0]);
output += '">\n            </li>\n            <li>\n                  <label name="company_id">Company ID</label>\n                        <select name="company_id">\n				';
//line 144 "contact-details.html"
output += context.process('company-id.html');
output += '\n	                </select>\n            </li>\n            <li>\n                 <label>Department</label>\n                 <input type="text" name="department" value="';
//line 149 "contact-details.html"
output += stash.get(['data', 0, 'department', 0]);
output += '"/>\n            </li>\n            <li>\n                   <label>Country</label>\n                   <input type="text" name="business_country" value="';
//line 153 "contact-details.html"
output += stash.get(['data', 0, 'bussiness_country', 0]);
output += '"/>\n            </li>\n             <li>\n                   <label>State</label>\n                   <input type="text" name="business_state" value="';
//line 157 "contact-details.html"
output += stash.get(['data', 0, 'bussiness_state', 0]);
output += '"/>\n             </li>\n             <li>\n                   <label class="required">City</label>\n                   <input type="text" class="required" name="business_city" value="';
//line 161 "contact-details.html"
output += stash.get(['data', 0, 'business_city', 0]);
output += '" />\n             </li>\n             <li>\n                   <label>Office Address</label>\n             </li>\n             <li>\n                   <label>Street 1</label>\n                   <input type="text" name="business_street" value="';
//line 168 "contact-details.html"
output += stash.get(['data', 0, 'business_street', 0]);
output += '"/>\n             </li>\n             <li>\n                   <label>Street 2</label>\n                   <input type="text" name="business_street_2" value="';
//line 172 "contact-details.html"
output += stash.get(['data', 0, 'business_street_2', 0]);
output += '"/>\n             </li>\n             <li>\n                   <label>Street 3</label>\n                   <input type="text" name="business_street_3" value="';
//line 176 "contact-details.html"
output += stash.get(['data', 0, 'business_street_3', 0]);
output += '"/>\n             </li>\n             <li>\n                   <label>Postal Code</label>\n                   <input type="text" name="business_postal_code" value="';
//line 180 "contact-details.html"
output += stash.get(['data', 0, 'business_postal_code', 0]);
output += '"/>\n             </li>\n        </ul>\n    </fieldset>\n\n    <fieldset class="grid_17 blue box step" id="step4">\n        <legend>I m a legend</legend>\n        <h3>Company Details 2</h3>\n        <ul class="form tar">\n            <li>\n                <label class="required" for="webpage">Company\'s web page</label>\n                <input type="text" class="required" name="web_page" value="';
//line 191 "contact-details.html"
output += stash.get(['data', 0, 'web_page', 0]);
output += '"/>\n            </li>\n            <li>\n                 <label class="required">email-id</label>\n                 <input id="email" name="email" value="';
//line 195 "contact-details.html"
output += stash.get(['data', 0, 'email', 0]);
output += '" class="required email" />\n            </li>\n            <li>\n                 <label class="required">Landline No.</label>\n                 <input type="text" class="required" name="primary_phone" value="';
//line 199 "contact-details.html"
output += stash.get(['data', 0, 'primary_phone', 0]);
output += '">\n            </li>\n            <li>\n                <label>Alternate No</label>\n                <input type="text" name="business_phone_2" value="';
//line 203 "contact-details.html"
output += stash.get(['data', 0, 'business_phone_2', 0]);
output += '"/>\n             </li>\n            <li>\n                <label >Fax No.</label>\n                <input type="text" name="business_fax" value="';
//line 207 "contact-details.html"
output += stash.get(['data', 0, 'business_fax', 0]);
output += '"/>\n            </li>\n             <li>\n                   <label>Referred By</label>\n                   <select name="refferred" value="';
//line 211 "contact-details.html"
output += stash.get('reff');
output += '">\n                           <option value="email">email\n                           <option value="client">By Client\n                           <option value="other">Others\n                   </select>\n            </li>\n            <li>\n                <label >Billing Payment</label>\n                <select name="bill_pay" value="';
//line 219 "contact-details.html"
output += stash.get('billpay');
output += '" name=""billing_information>\n                    <option >mode Of Pay\n                    <option value="cash">Cash\n                    <option value="cheque">Cheque\n                   <option value="dd">D.D.\n                </select>\n            </li>\n        </ul>\n    </fieldset>\n</form>';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['contact-list-item.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<tr>\n		<td class="blue">';
//line 2 "contact-list-item.html"
output += stash.get(['item', 0, 'id', 0]);
output += '</td>\n                \n		<td class="blue">';
//line 4 "contact-list-item.html"
output += stash.get(['item', 0, 'name', 0]);
output += '</td>\n\n		<td class="blue">';
//line 6 "contact-list-item.html"
output += stash.get(['item', 0, 'business_city', 0]);
output += '</td>\n\n                <td class="blue">';
//line 8 "contact-list-item.html"
output += stash.get(['item', 0, 'web_page', 0]);
output += '</td>\n\n		<td class="yellow action">\n                    <span class="edit" id="row_';
//line 11 "contact-list-item.html"
output += stash.get(['item', 0, 'id', 0]);
output += '"></span>\n			<span class="delete" id="row_';
//line 12 "contact-list-item.html"
output += stash.get(['item', 0, 'id', 0]);
output += '"></span>\n			<br><a id="row_';
//line 13 "contact-list-item.html"
output += stash.get(['item', 0, 'id', 0]);
output += '" class="expand"><u>Expand</u></a>\n		</td>\n</tr>\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['contact-list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<table class="basetable tablesorter" id="MyTable"  >\n    <thead>\n        <tr>\n            <th> ID </th>\n\n            <th> Name </th>\n\n            <th> Business City </th>\n\n            <th> Web Page </th>\n\n	</tr>\n    </thead>\n    <tbody >\n			\n		';
//line 20 "contact-list.html"

// FOREACH 
(function() {
    var list = stash.get('list');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['item'] = value;
output += '\n			\n			';
//line 18 "contact-list.html"
output += context.process('contact-list-item.html');
output += '\n\n		';;
            retval = list.get_next();
            value = retval[0];
            done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n    </tbody>\n</table>\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['contact-menu.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '\n\n        <p>Actions</p>\n\n        <ul>\n          <li><a id="create" href="#/contact-all">All Contacts</a></li>\n\n          <li><a id="create" href="#/contact-company">Company</a></li>\n\n          <li><a id="create" href="#/contact-person">Person</a></li>\n\n          <li><a id="create" href="#" class="contact-add">Add New Contacts</a></li>\n\n        </ul>\n\n\n\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['contact-select.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '\n';
//line 7 "contact-select.html"

// FOREACH 
(function() {
    var list = stash.get('contacts');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['contact'] = value;
output += '\n<option value="';
//line 3 "contact-select.html"
output += stash.get(['contact', 0, 'id', 0]);
output += '" ';
//line 3 "contact-select.html"
if (stash.get(['contact', 0, 'id', 0]) == stash.get('match')) {
output += ' selected ';
}

output += '>\n	';
//line 4 "contact-select.html"
output += stash.get(['contact', 0, 'name', 0]);
output += '\n</option>\n\n';;
            retval = list.get_next();
            value = retval[0];
            done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['index.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += 'Hello world';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['login-form.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<form action="" method="POST" class="" id="LoginForm">\n     <fieldset class="grid_15 yellow box  ">\n         <div id="MSGBOX" class="box negative notice">\n               <ul>\n               </ul>\n         </div>\n	 <ul class="form tar">\n	   <li>\n                <label class="required">User Id</label>\n                <input type="text" class="required" value="';
//line 10 "login-form.html"
output += stash.get(['data', 0, 'user_id', 0]);
output += '" name="userid" id="userid" />\n           </li>\n           <li>\n                <label class="required">Password</label>\n                <input type="password" class="required" value="';
//line 14 "login-form.html"
output += stash.get(['data', 0, 'password', 0]);
output += '"  name="password" id="password" />\n           </li>\n        </ul>\n        <p class="form-steps form right">\n               <input type="submit" value="Sign in" id="sign_in" class="button " />\n               <input type=reset value="Reset" name="reset" class="button" />\n        </p>\n    </fieldset>\n</form>';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['task-add.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '\n<form name=task action="#/task-add" method=POST>\n<input type=hidden name=id value="';
//line 3 "task-add.html"
output += stash.get('id');
output += '">\n<input type=hidden name=assigned_by value="';
//line 4 "task-add.html"
output += stash.get(['profile', 0, 'id', 0]);
output += '">\n<input type=hidden name=task_status value="Incomplete">\n<h2 class="">Add a Task </h2>\n<fieldset class=" yellow box">\n	<ul class="form vvv thin">\n		<li class="required"><label>To do ?</label><input type="text" name="name" /></li>\n		<li class="required"><label>Assigned to ?</label>\n			<select name=assigned_to>\n				';
//line 12 "task-add.html"
output += context.process('contact-select.html');
output += '\n			</select>\n		</li>\n		<li><label>Due in ?</label><input type="text" name="due_date" value="" class="datepicker"/></li>\n		\n		<li><input class="button" type="submit" value="Do it"/> <input class="button" type="reset" value="reset" name="reset"/></li>\n	</ul>\n</fieldset>\n</form>\n\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['task-list.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '<div class="grid_17 list" >\n   <ul>\n		';
//line 14 "task-list.html"

// FOREACH 
(function() {
    var list = stash.get('list');
    list = new Jemplate.Iterator(list);
    var retval = list.get_first();
    var value = retval[0];
    var done = retval[1];
    var oldloop;
    try { oldloop = stash.get('loop') } finally {}
    stash.set('loop', list);
    try {
        while (! done) {
            stash.data['item'] = value;
output += '\n				<li class="task-';
//line 4 "task-list.html"
output += stash.get(['item', 0, 'task_status', 0]);
output += '">\n					<span class="status " ></span>\n					<a href="#">';
//line 6 "task-list.html"
output += stash.get(['item', 0, 'name', 0]);
output += '</a>\n					<span class="action" > \n						<a class="edit" id="task_';
//line 8 "task-list.html"
output += stash.get(['item', 0, 'id', 0]);
output += '" >edit</a>\n					';
//line 11 "task-list.html"
if (!(stash.get(['item', 0, 'task_status', 0]) == 'Success')) {
output += '\n						<input type=checkbox name="task_';
//line 10 "task-list.html"
output += stash.get(['item', 0, 'id', 0]);
output += '" />\n					';
}

output += '\n					</span>\n				</li>\n		';;
            retval = list.get_next();
            value = retval[0];
            done = retval[1];
        }
    }
    catch(e) {
        throw(context.set_error(e, output));
    }
    stash.set('loop', oldloop);
})();

output += '\n   </ul>\n</div>\n\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

Jemplate.templateMap['task-menu.html'] = function(context) {
    if (! context) throw('Jemplate function called without context\n');
    var stash = context.stash;
    var output = '';

    try {
output += '\n	\n        <p>Actions</p>\n\n        <ul>\n          <li><a id="create" href="#/task-pending">Pending Tasks</a></li>\n\n          <li><a id="create" href="#/task-completed">Completed Tasks</a></li>\n\n          <li><a id="update" href="#/task-overdue">Overdue Tasks</a></li>\n          \n          <li><a id="create" href="#/task-all">All Tasks</a></li>\n\n          <li><a id="create" href="#" class="task-add">Add New Task</a></li>\n\n        </ul>\n      			\n	\n	\n';
    }
    catch(e) {
        var error = context.set_error(e, output);
        throw(error);
    }

    return output;
}

