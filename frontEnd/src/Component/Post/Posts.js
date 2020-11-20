import React, { Component } from "react";
import Post from "./Post";
import { Grid } from "@material-ui/core";
const api = process.env.REACT_APP_API;
class Posts extends Component {
	state = {
		Posts: null,
	};
	componentDidMount() {
		fetch(`${api}/api/all-post`)
			.then((response) => response.json())
			.then((posts) => {
				this.setState({
					Posts: posts,
				});
			});
	}
	render() {
		// console.log('api',api);
		let posts = null;
		const postState = this.state.Posts;
		if (postState != null) {
			posts = postState.map((post, index) => (
				<Grid item sm={6} md={4}>
				<Post key={index} post={post} />
				</Grid>
			));
		}
		return (        
   			 <Grid container spacing={1} direction="row" justify="center" alignItems="flex-start">
                    {posts}
			</Grid>
		);
	}
}
export default Posts;
