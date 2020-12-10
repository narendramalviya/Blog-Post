import React, { Component } from "react";
import Post from "../Post/Post";
import { Grid } from "@material-ui/core";
import { ListItemText, Input, TextField, Button } from "@material-ui/core/";
import { fetchAllPost } from "./api/api";
import UserPost from "./UserPost";

class UserPosts extends Component {
	state = {
		posts: null,
		fileterBy: null,
	};

	componentDidMount() {
		this.fetchPostsData();
	}
	componentDidUpdate(prevProp,oldState) {
		console.log("did update",prevProp,oldState);
		// if (oldState.fileterBy !== this.state.fileterBy) {
		// 	 this.fetchPostsData();
		// }
	
	}
	selectOnChange = (event) => {
		this.setState({
			fileterBy: event.target.value,
		});
	};
	fetchPostsData = () => {
		fetchAllPost("/all-post", this.state.fileterBy)
			.then((posts) => {
				console.log("posts[fetALlData,userpost]", posts);
				if (posts.error) {
					console.log("if inside", posts);
					alert("error");
				} else {
					this.setState({
						posts: posts,
					});
				}
			})
			.catch((error) => console.log("failed to fetch all post", error));
	};
	render() {
		// console.log("posts-render", this.state.posts);
		let posts = null;
		const postState = this.state.posts;
		if (postState != null) {
			posts = postState.map((post, index) => (
				<Grid item key={index} xs={12} sm={12} md={12}>
					<UserPost post={post} />
				</Grid>
			));
		}
		return (
			<div>
				<div className="row">
					<div className="col-8">
						<h1>Posts</h1>
					</div>
				</div>
				<div className="d-flex flex-column">
					<div className="d-flex ">
						<TextField
							label="Search By Author/Title"
							variant="outlined"
							className={"mr-2"}
							name="searchText"
							fullWidth
							// onChange={this.onChange}
						/>
						<button className="btn btn-primary mt-2">Search</button>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="sel1">Select list:</label>
					<select
						className="form-control"
						id="sel1"
						name="postStatus"
						onChange={this.selectOnChange}
					>
						<option  >All Posts</option>
						<option value="1">Published</option>
						<option value="2">UnPublished</option>
					</select>
				</div>
				{posts}
			</div>
		);
	}
}
export default UserPosts;
