import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./NavbarOther.css";
import SearchIcon from "@mui/icons-material/Search";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import { Link, useNavigate } from "react-router-dom";

function NavbarOther() {
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
		<div className="row">
			<div className="col-12">
				<Navbar bg="dark" variant="dark" expand="lg" style={{ width: "100%" }}>
					<Navbar.Brand
						className="navbar-brand nav ms-4 nav-font-color increase-size"
						href="./home"
					>
						<div className="logo-container">
							<OtherHousesOutlinedIcon fontSize="large" />
							<h3>ElitePro</h3>
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarNav" />
					<Navbar.Collapse
						className="collapse navbar-collapse justify-content-end mx-3"
						id="navbarNav"
					>
						<Form className="search-form me-4">
							<FormControl type="text" placeholder="Search" />
							<Button type="submit">
								{/* <img src="./images/search_icon.png" alt="" id="search_icon" /> */}
								<SearchIcon style={{ color: "black" }} />
							</Button>
						</Form>
						<Nav className="navbar-nav">
							<Nav.Link className="nav-item px-2">
								{/* <a className="nav-link" href="/property-listing">
									Buy
								</a> */}
                                <Link
									className={"nav-link"}
									to={"/property-listing"}
									style={{ textDecoration: "none" }}
								>
									Buy
								</Link>
							</Nav.Link>
							{/* <Nav.Link className="nav-item px-2">
								<a className="nav-link" href="#">
									Lease
								</a>
							</Nav.Link>
							<Nav.Link className="nav-item px-2">
								<a className="nav-link" href="#">
									Rent
								</a>
							</Nav.Link> */}
							<Nav.Link className="nav-item px-2">
                                <Link
									className={"nav-link"}
									to={"/aboutus"}
									style={{ textDecoration: "none" }}
								>
									About Us
								</Link>
							</Nav.Link>
							<Nav.Link className="nav-item px-2">
                                <Link
									className={"nav-link"}
									to={"/contactus"}
									style={{ textDecoration: "none" }}
								>
									Contact Us
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>

					<div className="nav-button mx-2">
						{/* <Button
							variant=""
							className="custom-button"
							onClick={() => {
								window.location.href = "/login";
							}}
						>
							Log In
						</Button>
						<Button
							variant=""
							className="custom-button"
							onClick={() => {
								window.location.href = "/registration";
							}}
						>
							Sign Up
						</Button> */}
						{/* <Link
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
						</Link> */}

						{loginStatus ? (
							<div class="nav-button mx-2">
								<button className={"custom-button"} onClick={logOutAction}>
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
					</div>
				</Navbar>
			</div>
		</div>
	);
}

export default NavbarOther;
