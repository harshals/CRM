

var utils = function(app) {
	
	this.helpers({
		splat: function(index) {
			
			return this.params.splat[index]
		},
		jemplate: function(path, data, target, rcontext) {
	  		
	  		$.extend(data, { profile : app.profile });

			Jemplate.process(path, data, target);

			if (typeof(rcontext) != 'undefined') {

				rcontext.next();
			}
		},

		save: function( table, json, callback) {
			
			// data is a json object
			
			var context = this;
			var url = "/api/" + table + "/" + json['id'] ; 
			var method = "POST";
			var context = this;
			var data = {};
			data[table] =json; 
			
			$.ajax( {
					
					url : url,
					dataType : "json",
					contentType: "application/json",
					type : method,
					data : context.json(data),
					success: callback
			});

		},
		remove : function( table, id , callback) {
			
			// data is a json object

			var url = "/api/" + table + "/" + id
			var method = "DELETE";
			var context = this;
			
			$.ajax( {
					
					url : url,
					dataType : "json",
					contentType: "application/json",
					type : method,
					success: callback
			});

		}
  	});

};
