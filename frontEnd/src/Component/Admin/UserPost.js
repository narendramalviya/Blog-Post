import React from "react";
import { Link } from "react-router-dom";
const UserPost = ({ post, openModal, path }) => {
	const {
		id,
		fk_user_id,
		title,
		description,
		content,
		status,
		likes,
		comments,
	} = post;
	const truncate = (str, limit) => str.slice(0, limit) + "...";
	console.log("UserPost");
	let truncatedTitle = title < 29 ? title : truncate(post.title, 28);
	return (
		<div className="card d-flex mt-3" style={{ width: "100%" }}>
			<div className="align-items-center card-body d-flex justify-content-between p-1">
				<div className="d-flex flex-column">
					<p className="mb-0 text-primary">{title}</p>
					<div className="badge d-flex font-weight-normal">
						<div className="align-items-center d-flex flex-column justify-content-center p-0">
							<p className="mb-0">Likes</p>
							<p className="mb-0 ">{likes}</p>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center p-0 px-1">
							<p className="mb-0">Comments</p>
							<p className="mb-0 ">{comments}</p>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center p-0 px-1">
							<p className="mb-0">Shares</p>
							<p className="mb-0">NA</p>
						</div>
					</div>
				</div>
				<div className="align-items-end col-2 d-flex flex-column ">
					<div className="d-flex ">
						<p
							className={`badge ${
								status == 2
									? "badge-success"
									: "badge-secondary"
							}`}
						>
							{status == 2 ? "Published" : "Unpublished"}
						</p>
					</div>
					<div className="d-flex">
						<Link to={`${path}/edit-post/${id}`}>
							<i
								className="fas fa-edit mr-2 btn btn-sm btn-primary"
								type="button"
							></i>
						</Link>

						<i
							className="far fa-trash-alt btn btn-sm btn-danger"
							type="button"
						></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPost;
