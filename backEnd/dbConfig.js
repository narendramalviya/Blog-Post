const mysql = require("mysql2");

const pool = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "12345",
	database: "BlogPost",
});

module.exports = pool.promise();