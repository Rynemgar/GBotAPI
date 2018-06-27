require('dotenv');
var sql = require("mssql");
var connect = function()
{
var conn = new sql.ConnectionPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DB,
});
    return conn;
};

module.exports = connect;