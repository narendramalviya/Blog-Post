import React, { Component } from "react";
import Post from "./Post";
import { Grid } from "@material-ui/core";
const api = process.env.REACT_APP_API;
class Posts extends Component {
	state = {
		Posts: null,
	};
	componentDidMount() {
		fetch(`${api}/all-post`)
			.then((response) => response.json())
			.then((posts) => {
				this.setState({
					Posts: posts,
				});
			});
	}
	render() {
		console.log('posts',this.state.Posts);
		let posts = null;
		const postState = this.state.Posts;
		if (postState != null) {
			posts = postState.map((post, index) => (
				<Grid item key={index} xs={12} sm={6} md={4} className="p-2">
				<Post post={post} num={index} />
                </Grid>
			));
		}
		return (
			<Grid
				container
				
				direction="row"
				justify="center"
				alignItems="flex-start"
			>
				{posts}
			</Grid>
		);
	}
}
export default Posts;
