var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET users listing. */
router.get('/', function(req, res, next) {
    axios({
        method: 'get',
        url: 'https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam',
        responseType: 'json'
      })
        .then(function (response) {
          res.send(response.data.day)
        });
});

module.exports = router;
