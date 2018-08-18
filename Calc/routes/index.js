var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// req will have all request items
router.get('/add', function(req, res) {
	// Initialise a, (if not exist, initalise with 0)
	// GET params are found in query object
	var a = parseInt(req.query.a) || 0; 
	// Initialise b, (if not exist, initalise with 0)
	var b = parseInt(req.query.b) || 0; 
	// Find result
	result = a + b;
	// Send result back
	// Unfortunately can't send integer result, need to convert to string
	return res.send(result + "");
})

// post request
router.post('/subtract', function(req, res) {
	// In post, params are found in req.body, not in query
	var a = parseInt(req.body.a) || 0;
	var b = parseInt(req.body.b) || 0;
	// Returning a json result, instead of string for variety
	result = {
		result: a - b,
		message: "success"
	}
	return res.send(result);
})

// returning using res.json
router.get('/multiply', function(req, res) {
	return res.json({ result: parseInt(req.query.a) * parseInt(req.query.b)})
})

// Handling a runtime error
router.get('/testError', function(req, res) {
	try {
		var a  = parseInt(req.body.undefinedEntry.undefinedEntry)
	} catch(e) {
		// Either use existing error, or use custom error
		var error = e 
		// Check if error is empty
		if (Object.keys(error).length==0)
			error = {
				errorCode: 203,
				errorMessage: "Some error message"
			}
		// status can be set on the result, here its set to 500 internal server error 
		res.status(500).json(error)
	}
})

// api that returns a list of objects (similar to a search api)
router.get('/randomList', function(req, res) {
	var noOfElements=Math.floor(Math.random()*15 + 1)
	returnList = []
	for (var i=0; i<noOfElements; ++i) {
		returnList.push({
			itemId: i+1,
			// Random string
			itemLabel: Math.random().toString(36).substr(2, 5)
		})
	}
	return res.json(returnList)
})
module.exports = router;
