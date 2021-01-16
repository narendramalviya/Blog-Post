const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const post = require('./routes/post');

app.get('/getFile',(req,res)=>{
	// res.send('texttt')
	 res.sendFile(`${__dirname}/What-is-a-Blog-Post.webp`)
})
// app middleware
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(cors());

// TODO: header config failed in put request
// app.use((req,res,next)=>{
// 	 res.setHeader('Access-Control-Allow-Origin','*');
// 	 res.setHeader('Access-Control-Allow-Methods','GET','POST','DELETE','OPTIONS','PUT');
// 	//   // Request headers you wish to allow
// 	  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept,Access-Control-Allow-Origin');

// 	//   // Set to true if you need the website to include cookies in the requests sent
// 	//   // to the API (e.g. in case you use sessions)
// 	  res.setHeader('Access-Control-Allow-Credentials', false);

// 	  next();

// })

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

process.on('uncaughtException',(err)=>{
	console.log('uncaught exception',err);
})

{/* <img
						src={`https://picsum.photos/600/${700+this.props.num}/?random`}
						className="card-img-top rounded-lg"
						alt="..."
					/> */}