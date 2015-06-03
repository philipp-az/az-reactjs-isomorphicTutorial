/*var express = require('express');
var router = express.Router();*/

//added for isomorphic rendering of reactjs components
require("node-jsx").install({
    harmony: true,
    extension: ".jsx"
});
var React = require("react");
var App = React.createFactory(require("../public/javascripts/components/app.jsx"));
var express = require("express");
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
    var markup = React.renderToString(
      App()
    );

    /*res.render("index", {
    markup: markup
    });*/
    res.send('<html><head><script src="javascripts/bundle.js"></script></head><body><div id="content">'+markup+'</div></body></html>');

});

module.exports = router;
