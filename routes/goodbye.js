var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/goodbye', function(req, res, next) {
    res.send('Goodbye!')
});

module.exports = router;
