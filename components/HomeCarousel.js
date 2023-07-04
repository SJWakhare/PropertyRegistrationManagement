import React from "react";

import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
	return (
		<Carousel className="h-50">
			<Carousel.Item interval={1000}>
				<img
					height={370}
					className="d-block w-100"
					src="https://www.tclf.org/sites/default/files/styles/crop_2000x700/public/thumbnails/image/GovernorsIsland_hero_CharlesABirnbaum_2016_0.jpg?itok=3YiWam_c"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>New York</h3>
					<p>The Big Apple</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					height={370}
					className="d-block w-100"
					src="https://cdn.britannica.com/02/163002-050-5E5121B6/Chicago-skyline.jpg"
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Chicago</h3>
					<p>Second to none</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					height={370}
					className="d-block w-100"
					src="https://images.unsplash.com/photo-1572925151789-c13420b54514?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=josh-miller-x0jaoF-qPCU-unsplash.jpg"
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3>Los Angeles</h3>
					<p>The City of Hollywood</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default HomeCarousel;
