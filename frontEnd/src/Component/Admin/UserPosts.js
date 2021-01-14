import React, { Component } from "react";
import { ListItemText, Input, TextField, Button } from "@material-ui/core/";
import { allPost } from "./api/api";
import UserPost from "./UserPost";
import Modal from "../Ui/Modal/Modal";

class UserPosts extends Component {
	state = {
		posts: null,
		fileterBy: null,
	};
	
	componentDidMount() {
		this.fetchPostsData();
	}
	componentDidUpdate(prevProp, oldState) {
		// console.log("did update", prevProp, oldState);
		if (oldState.fileterBy !== this.state.fileterBy) {
			this.fetchPostsData();
		}
	}
	selectOnChange = (event) => {
		this.setState({
			fileterBy: event.target.value,
		});
	};
	fetchPostsData = () => {
		allPost("/all-post", this.state.fileterBy)
			.then((posts) => {
				// console.log("posts[fetALlData,userpost]", posts);
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

	onClickOpenModal = () => {
		// console.log("onClickOPenModal", this.showModal);
		this.setState({
			showModal: true,
		});
	};
	render() {
		// console.log("posts-render", this.state.posts);

		let posts = null;
		const postState = this.state.posts;
		if (postState != null) {
			posts = postState.map((post, index) => (
				<div key={index} className="col-12">
					<UserPost post={post} openModal={this.onClickOpenModal} path={this.props.match.path} />
				</div>
			));
		}
		return (
			<div>
				<div className="row">
					<div className="col-8">
						<h4 className="ml-4">Posts</h4>
					</div>
				</div>
				<div className="d-flex justify-content-between px-3">
					<div className="d-flex h-100">
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
					<div className="form-group">
						<label htmlFor="sel1">Select list:</label>
						<select
							className="form-control"
							name="postStatus"
							onChange={this.selectOnChange}
						>
							<option value="0">All Posts</option>
							<option value="1">UnPublished</option>
							<option value="2">Published</option>
						</select>
					</div>
				</div>
				{posts}

			</div>
		);
	}
}
export default UserPosts;
