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
          let Dia = response;
          console.log(response.data);
         /*  res.json({ day: Dia.data.day }) */
          res.render('dayofweek', { day: Dia.data.day });
          
          
        });
});



module.exports = router;
