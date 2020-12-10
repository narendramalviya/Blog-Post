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


class Home extends Component {
	render() {
		const category = [
			{ src: fasionImg, name: "fasion" },
			{ src: natureImg, name: "nature" },
			{ src: historyImg, name: "history" },
			{ src: politicsImg, name: "politics" },
			{ src: programmingImg, name: "programming" },
			{ src: spaceImg, name: "space" },
		];
		// console.log("arr", category);
		const cateImgStyles = {
			width: "140px",
			height: "140px",
			borderRadius: "70px",
			margin: "5px",
		};
		let categoryIcons = category.map((cate, index) => (
			<div className="col" key={index}>
				<div className="d-flex justify-content-center">
					<img
						id={index}
						src={cate.src}
						alt={cate.name}
						style={cateImgStyles}
					/>
				</div>
				<p className="text-center">{cate.name}</p>
			</div>
		));

		return (
			<div >
				<div className="row p-5 m-0">
					<div className="align-items-center col d-flex flex-column justify-content-center">
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
					<div className="col">
						<img
							src={bannerImg}
							alt="random pic"
							// style={{ width: "100%", height: "417px" }}
							className="img-fluid"
						/>
					</div>
				</div>
				<p className="text-center">&#x25cf;&#x25cf;&#x25cf;</p>
				{/* category icons */}
				<div className="row my-5 mx-0">{categoryIcons}</div>
				<div className="row my-5 mx-0">

                <Posts/>
				</div>
                
			</div>
		);
	}
}
export default Home;
