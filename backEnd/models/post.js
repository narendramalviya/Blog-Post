const db = require("../dbConfig");
module.exports = class Post {
	constructor(post) {
		this.post = post;
	}
	create() {
		const {
			userId,
			title,
			description,
			content,
			fileId,
			categoryId,
		} = this.post;

		let sql =
			"INSERT INTO Post(fk_user_id, title, description, content, fk_file_id, fk_category_id) VALUES(?,?,?,?,?,?)";
		return db.execute(sql, [
			userId,
			title,
			description,
			content,
			fileId,
			categoryId,
		]);
	}
	getById(postId) {
		let sql = `SELECT *FROM Post WHERE id = ${postId}`;
		return db.execute(sql);
	}
	getAll(statusId) {
		let sql = `SELECT *,(SELECT COUNT(comment.id) FROM comment WHERE fk_post_id = Post.id) AS comments,(SELECT COUNT(likes.id) FROM likes WHERE fk_post_id = Post.id) AS likes FROM Post WHERE CASE WHEN (${statusId} != 0 ) THEN status = ${statusId} ELSE 1 END`;
		return db.execute(sql);
	}
	update(postId) {
		const { title, description, content, fileId, categoryId } = this.post;

		let sql = `UPDATE Post SET title = ?, description = ?, content = ?, fk_file_id = ?, fk_category_id = ? WHERE id = ${postId}`;

		return db.execute(sql, [
			title,
			description,
			content,
			fileId,
			categoryId,
		]);
	}
	deleteById(postId) {
		let sql = `DELETE FROM Post WHERE id = ${postId}`;
		return db.execute(sql);
	}
};
