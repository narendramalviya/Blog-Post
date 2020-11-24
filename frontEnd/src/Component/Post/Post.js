import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

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
		
			<Paper variant="outlined" style={{  height: "300px" }}>
				<img
					src={`https://picsum.photos/600/${700 + num}/?random`}
					alt="random pic"
					style={{width:'100%', height: "222px" }}
				/>
				<p>
					{id}.{truncatedTitle}
				</p>

				<p>Author {fk_user_id}</p>
				{/* <p>{content}</p> */}
			</Paper>
		
	);
};
export default Post;
