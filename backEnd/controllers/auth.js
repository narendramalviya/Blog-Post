const { connection } = require("../dbConfig");

exports.signIn = () => {
	//
};
exports.signUp = (req, res) => {
	const { name, phone, email, password } = req.body;
	let sql = `INSERT INTO user(name,email,phone,password) VALUES(${name},${email},${phone},${password})`;
	connection.query(sql, (err, result) => {
		if (err) {
			return res.render("index", {
				error: err,
			});
        }
        else{
            res.user = 
            res.render('home')
        }
	});
};
