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
                OverallWins,
                OverallLosses,
                Wins,
                Losses,
                Streak,
                Potions,
                Strength,
                Defense,
                Agility
      FROM Levels
      ORDER BY Level DESC
      `)
              .then((results) => {
                  res.json(results);
              })
            })
            
        
    return router;  
};
module.exports = routes;