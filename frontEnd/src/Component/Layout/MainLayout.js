import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";

class MainLayout extends Component {
	render() {
		return (
			<Container disableGutters maxWidth>
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />

					<Route exact path="/admin" component={Admin} />
				</Switch>
				<Footer />
			</Container>
		);
	}
}
export default MainLayout;
