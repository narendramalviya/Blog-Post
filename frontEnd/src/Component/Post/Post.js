import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
// const useStyles = makeStyles(() => ({
// 	grid: {
// 		//
// 	},
// 	paper: { width: "100%", height: "300px", padding: "5px" },
// }));

const Post = ({ post, num }) => {
	// const classes = useStyles();
	// console.log(post);
	const { id, fk_user_id, title, description, content } = post;
	const truncate = (str, limit) => str.slice(0, limit) + "...";

	let truncatedTitle =
		description.title < 29 ? title : truncate(post.title, 28);
	return (
		<Paper variant="outlined" style={{ height: "300px" }} className="p-2">
			<img
				src={`https://picsum.photos/600/${700 + num}/?random`}
				alt="random pic"
				style={{ width: "100%", height: "222px" }}
			/>
			<p>
				{id}.{truncatedTitle}
			</p>

			<div className="d-flex">

			<PersonIcon />
			<p className="mb-0 ml-1">Author {fk_user_id}</p>

			<div className="d-flex">
			<i class="far fa-thumbs-up"></i>
			  <p>Like</p>
			  <i class="far fa-comments"></i>
			  <p>Comments</p>
			  <i class="far fa-share-square"></i>
			  <p>Share</p>
			</div>
			</div>
			{/* <p>{content}</p> */}
		</Paper>
	);
};
export default Post;
