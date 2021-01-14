const api = process.env.REACT_APP_API;
exports.allPost = (url,poststatus) => {
	// console.log(url,poststatus);
	 
	return fetch(`${api}/${url}/?statusid=${poststatus}`)
		.then((response) => response.json())
	
};

exports.newPost = (url, body) => {
	// console.log(url, body);

	return fetch(`${api}/${url}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then((response) => response.json());
};

exports.editPost = (url, body) => {
	// console.log(url, body);

	return fetch(`${api}/${url}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then((response) => response.json());
};

