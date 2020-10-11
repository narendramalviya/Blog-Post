const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "12345",
	database: "BlogPost",
});

// connect to database
connection.connect((err) => {
	if (err) {
		console.log("failed to connect to Db!!");
	} else {
		console.log("Db connected!!");
	}
});


exports.connection = connection;