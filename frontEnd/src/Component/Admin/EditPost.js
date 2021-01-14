import React, { Component } from "react";
import { ListItemText, Input, TextField, Button } from "@material-ui/core/";
import SaveIcon from "@material-ui/icons/Save";
import { Link, useParams } from "react-router-dom";
import { editPost } from "./api/api";
import Spinner from '../Ui/Spinner';
class EditPost extends Component {
	state = {
		post: {
			userId: 1,
			title: "new post title",
			description: "some descriptio about new post",
			content:
				"React is a library for creating front end views. It has a big ecosystem of libraries that work with it. Also, we can use it to enhance existing apps To build single-page apps, we have to have some way to map URLs to the React component to display.In this article, we’ll look at how to define nested routes with React Router.Nested Routes To define nested routes, first, we define a grandchild route to display the content of the nested routes. We can use the useParams hook to get any route parameters.Then we can define nested routes by defining a child component to hold our nested routes.In the child component, we get the url and path properties from the useRouteMatch hook.Then we use the url variable to prefix the path in the to prop of the Link s. In the Route components, we prefix the path prop with the path property returned from useRouteMatchm Then we create a parent component that holds the child route that we defined above.",
			fileId: 2,
			categoryId: 2,
		},
		showSpinner: false,
	};
	componentDidMount() {
		// this.setState({p})
		//
	}
	onChange = (event) => {
		const { name, value } = event.target;
		const oldState = this.state.post;
		this.setState({
			post: { ...oldState, [name]: value },
		});
	};
	onSubmit = () => {
		this.setState({ showSpinner: true });
		editPost(`update-post/${this.props.match.params.postId}`, {
			...this.state.post,
		})
			.then((result) => {
				this.setState({ showSpinner: false });
				if (result.error) {
					console.log(result.error);
				} else console.log("result", result);
			})
			.catch((err) => {
				this.setState({ showSpinner: false });
				console.log(err);
			});
	};

	render() {
		console.log("edit post", this.props);
		const {
			userId,
			title,
			fileId,
			categoryId,
			description,
			content,
		} = this.state.post;
		return (
			<div>
				<div className="mb-5">
					<h3 className="text-center">Edit Post { this.state.showSpinner ? <Spinner /> : ''}</h3>
					
				</div>
				<form
					className={" ustify-content-center"}
					noValidate
					autoComplete="off"
				>
					<div className="row">
						<div className="col-12 pr-0">
							<TextField
								id="standard-uncontrolled"
								label="User Id"
								variant="outlined"
								className={"mr-2"}
								value={userId}
								name="userId"
								onChange={this.onChange}
							/>
							<TextField
								id="title"
								label="title"
								variant="outlined"
								className={"mr-2"}
								value={title}
								name="title"
								onChange={this.onChange}
							/>
							<TextField
								id="fileId"
								label="file id"
								variant="outlined"
								className={"mr-2"}
								value={fileId}
								name="fileId"
								onChange={this.onChange}
							/>{" "}
							<TextField
								id="categoryId"
								label="category id"
								variant="outlined"
								className={""}
								value={categoryId}
								name="categoryId"
								onChange={this.onChange}
							/>
						</div>

						<div className="col-12 pt-3">
							<TextField
								id="outlined-name"
								label="Description"
								variant="outlined"
								fullWidth
								className={""}
								name="description"
								value={description}
								onChange={this.onChange}
							/>
						</div>

						<div className="col-12 pt-3">
							<TextField
								id="outlined-name"
								label="Content"
								variant="outlined"
								fullWidth
								multiline
								rows={15}
								className={""}
								value={content}
								name="content"
								onChange={this.onChange}
							/>
						</div>
						<div className="col-12 my-4">
							<Button
								variant="contained"
								color="secondary"
								size="large"
								className={""}
								startIcon={<SaveIcon />}
								fullWidth
								onClick={this.onSubmit}
							>
								Save
							</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default EditPost;
