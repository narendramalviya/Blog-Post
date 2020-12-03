import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";

class MainLayout extends Component {
	render() {console.log('main layout')
		return (
			<div>
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />

					<Route  path="/admin" component={Admin} />
				</Switch>
				<Footer />
			</div>
		);
	}
}
export default MainLayout;
