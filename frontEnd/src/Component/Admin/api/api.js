const api = process.env.REACT_APP_API;
exports.fetchAllPost = (url) => {
	// console.log(url,api);
	return fetch(`${api}/${url}`)
		.then((response) => response.json())
		.then((result) => result);
};

exports.fetchNewPost = (url, body) => {
	// console.log(url, body);

	return fetch(`${api}/${url}`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});
};
