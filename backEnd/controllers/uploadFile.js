exports.uploadFile = (req, res) => {
	console.log("fileUpload", req.body.file);
	res.end('end res');
};
