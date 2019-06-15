var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {

    axios.get(`https://fantasy.premierleague.com/drf/bootstrap-static`)
        .then(response => {
            const persons = response.data;
            res.send(persons);
            // console.log(persons)
            //this.setMessage({ persons });
        })

});

module.exports = router;
