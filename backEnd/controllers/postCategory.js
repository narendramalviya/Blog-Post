const PostCategory = require('../models/postCategory');
exports.getCategoryById = (req,res)=>{
	console.log('getByCategoryId');
    const postCategory = new PostCategory();
	postCategory.getById(req.params.id).then(([rows, fields]) => {
		   console.log('rows ',rows);
		res.json(rows);
	})
	.catch((err) => {
		console.log("error post.js[controller]", err);
		res.json({ error: err });
	});
}

exports.getAllCategory = (req,res)=>{
	console.log('getAllCategory');
    const postCategory = new PostCategory();
	postCategory.getAll().then(([rows, fields]) => {
		   console.log('rows ',rows);
		res.json(rows);
	})
	.catch((err) => {
		console.log("error post.js[controller]", err);
		res.json({ error: err });
	});
}
exports.createCategory = (req,res)=>{
	console.log('body',req.body)
    const postCategory = new PostCategory(req.body.category);
	postCategory.create().then(([rows, fields]) => {
		//   console.log('rows ',rows);
		res.json(rows);
	})
	.catch((err) => {
		console.log("error post.js[controller]", err);
		res.json({ error: err });
	});
}
exports.updateCategory = (req,res)=>{
	console.log('body',req.body,req.params)
    const postCategory = new PostCategory(req.body.category);
	postCategory.update(req.params.id).then(([rows, fields]) => {
		//   console.log('rows ',rows);
		res.json(rows);
	})
	.catch((err) => {
		console.log("error post.js[controller]", err);
		res.json({ error: err });
	});
}
exports.deleteCategory = (req,res)=>{
	console.log('body',req.body)
    const postCategory = new PostCategory();
	postCategory.delete(req.params.id).then(([rows, fields]) => {
		//   console.log('rows ',rows);
		res.json(rows);
	})
	.catch((err) => {
		console.log("error", err);
		res.json({ error: err });
	});
}