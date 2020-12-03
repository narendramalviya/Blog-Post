import React from "react";

const UserPost = ({ post }) => {
	const { id, fk_user_id, title, description, content } = post;
	const truncate = (str, limit) => str.slice(0, limit) + "...";

	let truncatedTitle = title < 29 ? title : truncate(post.title, 28);
	return (
		<div className="card d-flex mt-4" style={{ width: "100%" }}>
			<div className="align-items-center card-body d-flex justify-content-between">
				<div className="d-flex flex-column">
					<h3>{title}</h3>
					<p className="card-text">
						{description}
					</p>
				</div>
				<div className="d-flex">
					<div className="d-flex flex-column justify-content-center align-items-center p-3">
						<p className="mb-0">Likes</p>
						<p className="mb-0">834</p>
					</div>
					<div className="d-flex flex-column justify-content-center align-items-center p-3">
						<p className="mb-0">Comments</p>
						<p className="mb-0">929</p>
					</div>
					<div className="d-flex flex-column justify-content-center align-items-center p-3">
						<p className="mb-0">Shares</p>
						<p className="mb-0">57</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPost;
