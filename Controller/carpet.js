require('dotenv').config();
var express = require('express');
var router = express.Router();
const querySql = require('../connection/connect');


var routes = function ()
{
    router.route('/')
        .get(function (req, res)
        {  
              querySql(`
        SELECT Range,
               Colour,
               Size,
               Cost 
        FROM Carpet
        ORDER BY Cost DESC`)
              .then((results) => {
                  res.json(results);
              })
            })
            
        
    return router;  
};
module.exports = routes;