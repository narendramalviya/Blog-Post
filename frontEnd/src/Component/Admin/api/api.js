const api = process.env.REACT_APP_API;
exports.allPost = (poststatus) => {
	// console.log(url,poststatus);
	 
	return fetch(`${api}/all-post/?statusid=${poststatus}`).then((response) => response.json())
	
};

exports.newPost = (body) => {
	// console.log(url, body);

	return fetch(`${api}/new-post`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then((response) => response.json());
};

exports.editPost = (postId, body) => {
	// console.log(url, body);

	return fetch(`${api}/update-post/${postId}`, {
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	}).then((response) => response.json());
};

exports.getPostById = (postId) => {
	return fetch(`${api}/post/${postId}`).then((response) => response.json());
}