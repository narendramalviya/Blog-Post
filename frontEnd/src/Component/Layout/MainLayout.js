import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Posts from '../Post/Posts';
import {Container} from '@material-ui/core'
class MainLayout extends Component {
	render() {
		return (
			<div className="border border-success">
			<Container >
				<Header />
                   <Posts/>
				<Footer />
			</Container>
			</div>
		);
	}
}
export default MainLayout;
