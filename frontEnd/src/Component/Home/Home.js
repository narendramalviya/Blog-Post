import React, { Component } from "react";
import Posts from "../Post/Posts";
import authorImg from "./lindsay kolowich headshot.jpg";
import bannerImg from "./blogging-for-beginners.webp";
import fasionImg from "../Assets/Image/girl-5760039_640.jpg";
import historyImg from "../Assets/Image/dc4425bd-834b-4f4f-abb6-0c0b5e7432f5.jpg";
import natureImg from "../Assets/Image/squirrel-5728047_640.jpg";
import politicsImg from "../Assets/Image/protective-suit-5716753_640.jpg";
import programmingImg from "../Assets/Image/earth-11015_640.jpg";
import spaceImg from "../Assets/Image/astronaut-11080_640.jpg";
import { ListItemText, Input, TextField, Button } from "@material-ui/core/";

class Home extends Component {
	render() {
		const badgeColors = [
			"primary",
			"secondary",
			"success",
			"danger",
			"warning",
			"info",
			"light",
			"dark",
		];
		// const category = [
		// 	{ src: fasionImg, name: "fasion" },
		// 	{ src: natureImg, name: "nature" },
		// 	{ src: historyImg, name: "history" },
		// 	{ src: politicsImg, name: "politics" },
		// 	{ src: programmingImg, name: "programming" },
		// 	{ src: spaceImg, name: "space" },
		// ];

		const category = [
			"fasion",
			"nature",
			"history",
			"politics",
			"programming",
			"space",
		];
		// console.log("arr", category);
		const cateImgStyles = {
			width: "112px",
			height: "112px",
			borderRadius: "57px",
			margin: "5px",
		};
		let categoryIcons = category.map((cate, index) => (
			<Button
				key={index}
				variant="contained"
				color={badgeColors[index % 8]}
				className="mr-2"
			>
				{cate}
			</Button>
		));

		return (
			<div>
				<div className="row p-5 m-0">
					<div className="align-items-center col-12 col-lg-6 col-md-6 col-xl-6 d-flex flex-column justify-content-center">
						<h1 className="font-weight-normal text-center">
							17 Blogging Mistakes to Avoid in 2020, According to
							HubSpot Bloggers
						</h1>
						<div className="align-content-between d-flex justify-content-center">
							<img
								id="authorPic"
								src={authorImg}
								alt="author"
								style={{
									width: "90px",
									height: "90px",
									borderRadius: "45px",
								}}
							/>
							<div className="align-items-center d-flex">
								<p className="mb-0 ml-3">
									{" "}
									Written by Lindsay Kolowich Cox
								</p>
							</div>
						</div>
					</div>
					<div className="d-flex align-items-center col-12 col-lg-6 col-md-6 col-xl-6 justify-content-center">
						<img
							src={bannerImg}
							alt="random pic"
							style={{ width: "400px" }}
						/>
					</div>
				</div>
				<p className="text-center">&#x25cf;&#x25cf;&#x25cf;</p>
				{/* category icons */}
				<div className="align-items-center d-flex justify-content-center mx-0 my-5 row">
					{categoryIcons}
				</div>
				<div className="row my-5 mx-0">
					<Posts />
				</div>
			</div>
		);
	}
}
export default Home;
