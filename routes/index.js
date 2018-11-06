var express = require('express');
var router = express.Router();
const BoxService = require('../services/BoxService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload/?', function (req, res, next) {
	const boxService = new BoxService();

	boxService.uploadFile(err => {
		if (err) {
			console.log("ERROR: ", err);
			return res.sendStatus(500);
		}

		res.sendStatus(200);
	});
});

module.exports = router;
