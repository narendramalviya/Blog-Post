import React, { Component } from "react";
import Post from "../Post/Post";
import { Grid } from "@material-ui/core";
import { fetchAllPost } from "./api/api";
import UserPost from "./UserPost";

class UserPosts extends Component {
	state = {
		Posts: null,
	};
	componentDidMount() {
		fetchAllPost("/all-post")
			.then((posts) => {
				console.log("posts", posts);
				if (posts.error) {
					console.log("if inside", posts);
					alert("error");
				} else {
					this.setState({
						Posts: posts,
					});
				}
			})
			.catch((error) => console.log("failed to fetch all post", error));
	}
	render() {
		console.log("posts-render", this.state.Posts);
		let posts = null;
		const postState = this.state.Posts;
		if (postState != null) {
			posts = postState.map((post, index) => (
				<Grid item key={index} xs={12} sm={12} md={12}>
					<UserPost post={post} />
				</Grid>
			));
		}
		return (
			<div>
				<h1>Posts</h1>
				<div className="d-flex flex-column">
					<div className="d-flex ">
						<div className="col-9 px-0">
							<input type="text" className="form-control" />
						</div>
						<div className="col-4">
							<button className="btn btn-primary"> Filter</button>
						</div>
					</div>
					<div className="d-flex ">
						<div className="col-9 px-0">
							<input type="text" className="form-control mt-2" />
						</div>
					</div>
					<div className="col-4 px-0">
						<button className="btn btn-primary mt-2"> Search</button>
					</div>
				</div>
				{posts}
			</div>
		);
	}
}
export default UserPosts;
