const {connection} = require('../dbConfig');

exports.getAllPosts = (req, res) => {
	let sql = "SELECT *FROM Posts";
	connection.query(sql, (err, result) => {
		if (err) {
			// console.log(err);
			return res.json({
				error: JSON.stringify(err),
			});
		} else {
			// console.log(result);
			res.render("index",{result});
		}
	});
}