import React from "react";
import '../Navbar.css';
import Navbar from "../Navbar.js";
import HomeCarousel from "../HomeCarousel";
import HomeCards from "../HomeCards";
import HomePropertyCards from "../HomePropertyCards";
import Footer from "../Footer";

function HomePage() {
	return (
		<div>
			<Navbar />
			<HomeCarousel />
			<HomeCards />
            <HomePropertyCards />
            <Footer />
		</div>
	);
}

export default HomePage;
