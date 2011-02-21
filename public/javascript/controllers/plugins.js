

var utils = function(app) {
	
	this.helpers({
		splat: function(index) {
			
			return this.params.splat[index]
		},
		process: function(path, data) {
	  		
			var templateVars = app.templateVars;
			$.extend(app.templateVars, data || this);

			return Jemplate.process(path, templateVars);
		},
		
  	});

};
