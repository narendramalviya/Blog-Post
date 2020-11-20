import React from "react";
import {Paper } from "@material-ui/core";
const Post = ({ post }) => {
	// console.log(post);
	const { id, fk_user_id, title, description, content } = post;
	return (
	
		<Paper variant="outlined" style={{width:'100%',padding:'10px'}}>
			<h5>
				{id} {title}
			</h5>
			<p>{fk_user_id}</p>
			<p style={{padding:''}}>{description}</p>
			{/* <p>{content}</p> */}
		</Paper>

	);
};
export default Post;
