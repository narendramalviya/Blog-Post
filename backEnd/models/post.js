const db = require("../dbConfig");
module.exports = class Post {
	constructor() {}
	createPost() {
		//
	}
	getPost(postId) {
		return;
	}
	getAll(statusId) {
		let sql = `SELECT *,(SELECT COUNT(comment.id) FROM comment WHERE fk_post_id = Post.id) AS comments,(SELECT COUNT(likes.id) FROM likes WHERE fk_post_id = Post.id) AS likes FROM Post WHERE CASE WHEN (${statusId} != 0 ) THEN status = ${statusId} ELSE 1 END`;
		return db.execute(sql);
	}
};
