import React, { Component } from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItemText, Input, TextField, Button } from "@material-ui/core/";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import SaveIcon from "@material-ui/icons/Save";
import { Link,Switch,Route } from "react-router-dom";
import NewPost from './NewPost';
import UserPosts from './UserPosts';


class Admin extends Component {
	render() {
		const style1 = {
			listStyle: "none",
        };
        const {path} = this.props.match;
        // console.log(this.props);
		return (
			<div className="row m-0 mt-5">
				<div className="col-2 border">
					<nav className="mt-3 nav">
						<ul className="align-content-center d-flex flex-column justify-content-center p-3" style={style1}>
							<li >
								<Link to={`${path}`} >all post</Link>
							</li >
							<li className="mt-1">
								<Link to={`${path}/new-post`} >New Post</Link>
							</li>
							<li className="mt-1">
								<Link to="" >option3</Link>
							</li>
							<li className="mt-1">
								<Link to="">option4</Link>
							</li>
						</ul>
					</nav>
				</div>
				{/* content goes here */}
				<div className="col-10 border">
                     {/* <NewPost/> */}
                    
                     <Switch>
                         <Route exact path={`${path}`} component={UserPosts}/>
                         <Route exact path={`${path}/new-post`} component={NewPost}/>
                     </Switch>
                </div>
			</div>
		);
	}
}
export default Admin;
