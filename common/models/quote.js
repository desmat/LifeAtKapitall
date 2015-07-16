module.exports = function(Quote) {
  Quote.ids = function(cb) {
    var response = [];

	Quote.find({
	    // where: {foo: {lt: 100}},
	    // order: 'foo ASC',
	    // limit: 3
	}, function(err, it) {
		//console.log(it);
	    for (var i = 0; i < it.length; i++) {
	    	// console.log(it[i].id);
	    	response.push(it[i].id);
	    }

	    cb(null, response);
	});
  };
  Quote.remoteMethod(
    'ids',
    {
      http: {path: '/ids', verb: 'get'},
      returns: {arg: 'ids', type: 'Array'}
    }
  );
};
