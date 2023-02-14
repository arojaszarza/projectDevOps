var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({ message: 'Goodbye!', ip: req.ip, time: new Date()})
});

module.exports = router;
