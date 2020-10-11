const express = require("express");
const path = require("path");

const app = express();

// 
const {getAllPosts} = require('./controllers/posts');
// create database connection


// view engine setup
// app.set('views',path.join(__dirname + 'view'));
app.set("view engine", "ejs");

app.get("/", getAllPosts);

// app.get("/signin", (req, res) => {
// 	res.render("index");
// });

// app.get("/home/:name", (req, res) => {
// 	let name = req.params;
// 	res.render("home", { name });
// });

app.listen(8000, () => {
	console.log("server listening at port 8000");
});
