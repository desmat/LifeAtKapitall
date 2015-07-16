module.exports = function(Quote) {
  Quote.ids = function(cb) {
    // var currentDate = new Date();
    // var currentHour = currentDate.getHours();
    // var OPEN_HOUR = 6;
    // var CLOSE_HOUR = 20;
    // console.log('Current hour is ' + currentHour);
    // var response;
    // if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
    //   response = 'We are open for business.';
    // } else {
    //   response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    // }

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
