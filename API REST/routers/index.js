'use strict';
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var request = require("request");

var url = "https://itunes.apple.com/search?term="

var url2 = ""

var url3 = "http://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=GetListByName&name="

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/', function (req, res) {
    request({
        url: url + "coldplay",
        json: false
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            var contenido = JSON.parse(body);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(contenido));
        } else {
            res.status(500).send("Ocurrio un Error !!!");
        }
    })
});

module.exports = router;