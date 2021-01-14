const Post = require("../models/post.js");
const { connection } = require("../dbConfig");
// get all post
exports.getAllPosts = (req, res) => {
	console.log(req.query.statusid, " ", typeof req.query.statusid);
	// SELECT id,(SELECT COUNT(id) FROM comment WHERE id = Post.id) AS comments,(SELECT COUNT(id) FROM likes WHERE id = Post.id) AS likes FROM BlogPost.Post;
	// ---------------------
	const post = new Post();
	post.getAll(req.query.statusid)
		.then(([rows, fields]) => {
			//    console.log('rows ',rows);
			res.json(rows);
		})
		.catch((err) => {
			console.log("error post.js[controller]", err);
			res.json({ error: err });
		});
};

// get post by id
exports.getPostById = (req, res) => {
	// return res.send(req.params.id);
	const post = new Post();
	post.getById(req.params.id)
		.then(([rows, fields]) => {
			//    console.log('rows ',rows);
			res.json(rows);
		})
		.catch((err) => {
			console.log("error post.js[controller]", err);
			res.json({ error: err });
		});
};

// create new post
exports.newPost = (req, res) => {
	// const { userId,title, description, content,fileId,categoryId } = req.body;
	console.log(req.body);
	const post = new Post(req.body);
	post.create()
		.then(([rows, fields]) => {
			//    console.log('rows ',rows);
			res.json(rows);
		})
		.catch((err) => {
			console.log("error post.js[controller]", err);
			res.json({ error: err });
		});
};

// update post by post id
exports.updatePostById = (req, res) => {
	const post = new Post(req.body);
	post.update(req.params.id)
		.then(([rows, fields]) => {
			//    console.log('rows ',rows);
			res.json(rows);
		})
		.catch((err) => {
			console.log("error post.js[controller]", err);
			res.json({ error: err });
		});
};
exports.deletePostById = (req, res) => {
	const post = new Post();
	post.deleteById(req.body.postId)
		.then(([rows, fields]) => {
			//    console.log('rows ',rows);
			res.json(rows);
		})
		.catch((err) => {
			console.log("error post.js[controller]", err);
			res.json({ error: err });
		});
};
