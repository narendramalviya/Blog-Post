const db = require("../dbConfig");

module.exports = class postCategory {
	constructor(category) {
		this.category = category;
	}
	create() {
		let sql = `INSERT INTO mCategory(category) VALUES("${this.category}")`;
		console.log("sql ", sql);
		return db.execute(sql);
	}
	update(categoryId) {
		let sql = `UPDATE mCategory SET category="${this.category}" WHERE id=${categoryId}`;
		console.log("sql ", sql);
		return db.execute(sql);
	}
	delete(categoryId) {
		let sql = `DELETE FROM mCategory WHERE id=${categoryId}`;
		console.log("sql ", sql);
		return db.execute(sql);
	}
	getAll() {
		let sql = "SELECT * FROM mCategory";
		return db.execute(sql);
    }
    getById(categoryId) {
		let sql = `SELECT * FROM mCategory WHERE id=${categoryId}`;
		return db.execute(sql);
	}
};

// module.exports = postCategory;
