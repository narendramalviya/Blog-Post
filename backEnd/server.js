const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const post = require('./routes/post');


// app middleware
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(cors());

app.get("/home", (req, res) => {
	res.render("home");
});
app.get("/photo", (req, res) => {
	res.sendFile('./public/nk.jpeg');
});

// routes
app.use('/api',post);
const port = 7000;
app.listen(port, () => {
	console.log(`server running at port ${port}`);
});

process.on('uncaughtException',()=>{
	console.log('uncaught exception');
})

{/* <img
						src={`https://picsum.photos/600/${700+this.props.num}/?random`}
						className="card-img-top rounded-lg"
						alt="..."
					/> */}