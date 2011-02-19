(function($) {

    Sammy = Sammy || {};

  
  Sammy.Jemplate = function(app, method_alias) {

    // *Helper:* Uses simple templating to parse ERB like templates.
    //
    // ### Arguments
    //
    // * `template` A String template. '<% %>' tags are evaluated as Javascript and replaced with the elements in data.
    // * `data` An Object containing the replacement values for the template.
    //   data is extended with the <tt>EventContext</tt> allowing you to call its methods within the template.
    // * `name` An optional String name to cache the template.
    //
    var jemplate = function(template, data, name, options) {
      // use name for caching
      if (typeof name == 'undefined') { name = jemplate; }
      if (typeof options == 'undefined' && typeof name == 'object') {
        options = name; name = template;
      }
	  return Jemplate.process(template, data);
    };

    // set the default method name/extension
    if (!method_alias) { method_alias = 'jemplate'; }
    // create the helper at the method alias
    app.helper(method_alias, jemplate);

  };

})(jQuery);
