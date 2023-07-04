import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
	let navigate = useNavigate();

	const logOutAction = () => {
		localStorage.removeItem("loginStatus");
		navigate("/login", { replace: true });
	};

	// Assistance of LocalStorage
	let loginStatus = localStorage.getItem("loginStatus");
	// if (!loginStatus) {
	// 	return <></>;
	// }

	return (
		<div>
			<div class="row">
				<div class="col-sm-12">
					<div class="bkg_img image-container mb-5">
						<div class="gradient-overlay"></div>
						<div class="overlay-content">
							<div class="row">
								<div class="col-12">
									<nav
										class="navbar navbar-expand-lg"
										style={{ width: "100%" }}
									>
										{/* <a
											class="navbar-brand nav ms-4 navbar-dark increase-size"
											href="/home"
										>
											<div class="logo-container">
												<OtherHousesOutlinedIcon fontSize="large" />
												<h3>ElitePro</h3>
											</div>
										</a> */}
										<Link
											class="navbar-brand nav ms-4 navbar-dark increase-size"
											to={"/"}
										>
											<div class="logo-container">
												<OtherHousesOutlinedIcon fontSize="large" />
												<h3>ElitePro</h3>
											</div>
										</Link>
										<button
											class="navbar-toggler"
											type="button"
											data-toggle="collapse"
											data-target="#navbarNav"
											aria-controls="navbarNav"
											aria-expanded="false"
											aria-label="Toggle navigation"
										>
											<span class="navbar-toggler-icon"></span>
										</button>

										<div
											class="collapse navbar-collapse justify-content-end mx-3 navbar-dark"
											id="navbarNav"
										>
											{/* <!-- SEARCH --> */}

											<form class="search-form me-4">
												<input type="text" placeholder="Search" />
												<button type="submit">
													{/* <img src="" alt="" id="search_icon" /> */}
													<SearchIcon />
												</button>
											</form>

											<ul class="navbar-nav">
												<li class="nav-item active px-2">
													<Link
														class="nav-link nav-font-color nav-color"
														to={"/property-listing"}
													>
														Buy
													</Link>
												</li>
												{/* <li class="nav-item px-2">
													<Link
														class="nav-link nav-font-color nav-color"
														to={"/"}
													>
														Lease
													</Link>
												</li>
												<li class="nav-item px-2">
													<a class="nav-link nav-font-color nav-color" href="/">
														Rent
													</a>
												</li> */}
												<li class="nav-item px-2">
													{/* <a
														class="nav-link nav-font-color nav-color"
														href="./aboutus.html"
													>
														About Us
													</a> */}
													<Link
														class="nav-link nav-font-color nav-color"
														to={"/aboutus"}
													>
														About Us
													</Link>
												</li>
												<li class="nav-item px-2">
													{/* <a
														class="nav-link nav-font-color"
														href="./contactus.html"
													>
														Contact Us
													</a> */}

													<Link
														class="nav-link nav-font-color nav-color"
														to={"/contactus"}
													>
														Contact Us
													</Link>
												</li>
											</ul>
										</div>

										{/* <div class="nav-button mx-2">
											<Link
												className={"custom-button"}
												to={"/login"}
												style={{ textDecoration: "none" }}
											>
												Login
											</Link>
											<span>&nbsp; &nbsp;</span>
											<Link
												className={"custom-button"}
												to={"/register"}
												style={{ textDecoration: "none" }}
											>
												Sign Up
											</Link>
										</div> */}

										{loginStatus ? (
											<div class="nav-button mx-2">
												<button
													className={"custom-button"}
													onClick={logOutAction}
												>
													Logout
												</button>
											</div>
										) : (
											<div class="nav-button mx-2">
												<Link
													className={"custom-button"}
													to={"/login"}
													style={{ textDecoration: "none" }}
												>
													Login
												</Link>
												<span>&nbsp; &nbsp;</span>
												<Link
													className={"custom-button"}
													to={"/register"}
													style={{ textDecoration: "none" }}
												>
													Sign Up
												</Link>
											</div>
										)}
									</nav>
								</div>
								<div class="body_content">
									{/* <div class="body_info">
										<h1>The best property related website in india</h1>
										<h3>Find the best property deal, rentals in India</h3>
									</div> */}
									<div class="col-sm-3 col-md-6 col-lg-8 mt-5">
										<h1 class="display-4 text-white">Welcome to ElitePro</h1>
										<p class="lead text-white">
											<h1>The best property related website in USA</h1>
											<h3>Find the best property deal, rentals in USA</h3>
										</p>
										{/* <a class="btn btn-primary btn-lg" href="./services.html">
											Explore Services
										</a> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
