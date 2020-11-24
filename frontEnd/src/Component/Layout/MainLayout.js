import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Posts from "../Post/Posts";
import { Container } from "@material-ui/core";
import authorImg from "./lindsay kolowich headshot.jpg";
import bannerImg from "./blogging-for-beginners.webp";
import fasionImg from "../Assets/Image/fashion.jpg";
import historyImg from "../Assets/Image/history.jpg";
import natureImg from "../Assets/Image/nature.jpg";
import politicsImg from "../Assets/Image/politics.jpg";
import programmingImg from "../Assets/Image/programming.jpg";
import spaceImg from "../Assets/Image/space.jpg";
import technologyImg from "../Assets/Image/technology.jpg";

class MainLayout extends Component {
	render() {
		const category = [
			{ img: historyImg, altText: "history" },
			{ img: natureImg, altText: "nature" },
			{ img: politicsImg, altText: "politics" },
			{ img: programmingImg, altText: "programming" },
			{ img: spaceImg, altText: "space" },
			{ img: technologyImg, altText: "technology" },
		];
		const cateImgStyles = {
			width: "150px",
			height: "150px",
			borderRadius: "75px",
			margin: "5px",
		};
		let categoryIcons = category.map((cate, index) => (
			<div className="col" key={index}>
				<div className="d-flex justify-content-center">
					<img
						id={cate.altText}
						src={cate.img}
						alt={cate.altText}
						style={cateImgStyles}
					/>
				</div>
				<p className="text-center">{cate.altText}</p>
			</div>
		));

		return (
			<div className="border border-success">
				<Container>
					<Header />

					<div className="row p-5">
						<div className="align-items-center col d-flex flex-column justify-content-center">
							<h1 className="font-weight-normal text-center">
								17 Blogging Mistakes to Avoid in 2020, According
								to HubSpot Bloggers
							</h1>
							<div class="align-content-between d-flex justify-content-center">
								<img
									id="authorPic"
									src={authorImg}
									alt="author"
									style={{
										width: "93px",
										height: "93px",
										borderRadius: "46px",
									}}
								/>
								<div className="align-items-center d-flex">
									<p class="mb-0 ml-3">
										{" "}
										Written by Lindsay Kolowich Cox
									</p>
								</div>
							</div>
						</div>
						<div className="col">
							<img
								src={bannerImg}
								alt="random pic"
								// style={{ width: "100%", height: "417px" }}
								className="img-fluid"
							/>
						</div>
					</div>
					{/* category icons */}
					<div className="row">{categoryIcons}</div>
					<Posts />
					<Footer />
				</Container>
			</div>
		);
	}
}
export default MainLayout;
