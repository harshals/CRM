

var utils = function(app) {
	
	this.helpers({
		splat: function(index) {
			
			return this.params.splat[index]
		},
		jemplate: function(path, data, target, rcontext) {
	  		
	  		$.extend(data, { profile : app.profile });

                        var html = '';

                        if (target){

                            html = Jemplate.process(path, data, target);
                        }else {

                            html = Jemplate.process(path,data);
                        }

			if (typeof(rcontext) != 'undefined') {

				rcontext.next(html);
			}
		},
		fetch : function ( table, id , data, callback) {
			
			var context = this;
			var method = "GET";
			
			if (!id ) {

				return {};
			}
			var url = "/api/" + table +"/" + id;
			var rdata = {};

			$.ajax( {
					
					url : url,
					dataType : "json",
					contentType: "application/json",
					type : method,
					data : context.json(data),
					success:  function(json) {
						
						rdata = json['data']; 
						if (typeof(callback) == 'function') {

							callback(json);
						}
					},
					async:false
			});

			return rdata;

		},
		look_for : function ( table, query, data, callback) {
			
			var context = this;
			var url = "/api/" + table ;
			var method = "GET";
			
			if (query) {
				url += "/custom/" + query;
			}
			
			var rdata = {};

			$.ajax( {
					
					url : url,
					dataType : "json",
					contentType: "application/json",
					type : method,
					data : context.json(data),
					success: function(json) {
						
						rdata = json['data']; 
						if (typeof(callback) == 'function') {

							callback(json);
						}
					},
					async:false

			});
			
			return rdata;
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
