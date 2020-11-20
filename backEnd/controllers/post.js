const { connection } = require("../dbConfig");
// get all post 
exports.getAllPosts = (req, res) => {
	let sql = "SELECT *FROM Post";
	connection.query(sql, (error, posts) => {
		if (error) {
			return res.json({
				error,
				// console.log(err);
			});
		} else {
			// console.log(result);
			res.json(posts);
		}
	});
};

// get post by id
exports.getPostById = (req, res) => {
	// return res.send(req.params.id);
	let sql = `SELECT *FROM Post WHERE id = ${req.params.id}`;

	connection.query(sql, (error, post) => {
		if (error) {
			return res.json({
				error,
				// console.log(err);
			});
		} else {
			// console.log(result);
			res.json({ post });
		}
	});
};

// create new post
exports.createPost = (req, res) => {
	const { userId,title, description, content,fileId,categoryId } = req.body;
	
	let sql = 'INSERT INTO Post(fk_user_id, title, description, content, fk_file_id, fk_category_id) VALUES(?,?,?,?,?,?)';

	connection.query(sql,Object.values(req.body) ,(error, result) => {
		if (error) {
			return res.json({
				error,
				// console.log(err);
			});
		} else {
			// console.log(result);
	      res.json({result});
		}
	});
};

// update post by post id
exports.updatePostById = (req, res) => {
	const { userId,title, description, content,fileId,categoryId } = req.body;
	
	let sql = `UPDATE Post SET fk_user_id = ?, title = ?, description = ?, content = ?, fk_file_id = ?, fk_category_id = ? WHERE id = ${req.params.id}`;

	connection.query(sql,Object.values(req.body) ,(error, result) => {
		if (error) {
			return res.json({
				error,
				// console.log(err);
			});
		} else {
			// console.log(result);
	      res.json({result});
		}
	});
};