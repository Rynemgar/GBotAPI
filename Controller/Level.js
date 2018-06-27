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
        SELECT UserId,
                Level,
            username,
              Wins,
              Losses 
      FROM Levels
      ORDER BY Wins DESC
      LIMIT 10`)
              .then((results) => {
                  res.json(results);
              })
            })
            
        
    return router;  
};
module.exports = routes;