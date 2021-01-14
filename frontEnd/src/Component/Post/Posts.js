import React, { Component } from "react";
import Post from "./Post";
import { Grid } from "@material-ui/core";
import { allPost } from "../Admin/api/api";
import Spinner from "../Ui/Spinner";
// const api = process.env.REACT_APP_API;
class Posts extends Component {
	state = {
		posts: null,
		fileterBy: null,
		showSpinner: false,
	};
	componentDidMount() {
		this.setState({ showSpinner: true });
		allPost("/all-post", this.state.fileterBy)
			.then((posts) => {
				// console.log("posts.js", posts);
				if (posts.error) {
					console.log("if inside", posts);
					alert("error");
				} else {
					this.setState({
						posts: posts,
						showSpinner: false,
					});
				}
			})
			.catch((error) => {
				console.log("failed to fetch all post", error);
				this.setState({
					showSpinner: false
				});
			});
	}
	render() {
		console.log("posts", this.state.posts);
		let posts = null;
		const postState = this.state.posts;
		if (postState != null) {
			posts = postState.map((post, index) => (
				<Grid item key={index} xs={12} sm={6} md={4} className="p-2">
					<Post post={post} num={index} />
				</Grid>
			));
		}
		return (
			<div class="w-100">
				{this.state.posts ? "" : <Spinner />}
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="flex-start"
				>
					{posts}
				</Grid>
			</div>
		);
	}
}
export default Posts;
