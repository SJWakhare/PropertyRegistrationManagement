import React, { useEffect, useState } from "react";
import NavbarOther from "../NavbarOther/NavbarOther";
import "./PropertyIndividualPage.css";
import Footer from "../Footer.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PropertyIndividualPage2() {
	const [property, setProperty] = useState(null);

	useEffect(() => {
		getPropertyDetails();
	}, []);

	async function getPropertyDetails() {
		try {
			const response = await fetch("http://localhost:4000/property-listing");
			if (!response.ok) {
				throw new Error("Network response was not OK");
			}
			const data = await response.json();
			setProperty(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<NavbarOther />

			<div className="row" style={{ marginLeft: "10%", marginRight: "10%" }}>
				<div className="col-sm-12 col-md-6">
					<div className="mt-5 col">
						<img
							src="https://ssl.cdn-redfin.com/photo/113/bigphoto/989/Plan-231928989_0.jpg"
							alt=""
							className="img-fluid w-100"
							style={{ borderRadius: "10px" }}
						/>
					</div>
					<div className="mt-3 fs-5">
						{/* <span style={{ fontWeight: "400" }}>Address</span> */}
						<p>
							<span style={{ fontWeight: "500" }}>656 W Qunicy St#1701, </span>
							<span style={{ fontWeight: "300" }}>Chicago, IL 60661</span>
						</p>
						<hr />

						<div className="d-flex justify-content-between">
							<div>
								<h3 style={{ fontWeight: 700 }}>$100000</h3>
								<p>Est. $4,247/mo</p>
							</div>

							{/* ROOMS */}
							<div className="justify-content-center lh-sm">
								<h3>3</h3>
								<p>BHK</p>
							</div>

							{/* SQ FT */}
							<div className="justify-content-center lh-sm">
								<h3>2000</h3>
								<p>Sq. Ft.</p>
							</div>

							{/* YEAR BUILT */}
							<div className="justify-content-center lh-sm">
								<h3>2020</h3>
								<p>Year Built</p>
							</div>
						</div>
					</div>
					<hr />
					<div>
						{/* <input as={Link}  type="button" value="Book A Visit"  className="btn btn-danger w-100 fs-5"/> */}
						<Link to="/book-visit" style={{ textDecoration: "none" }}>
							<button type="submit" className="btn btn-danger w-100 fs-5">
								Book A Visit
							</button>
						</Link>
					</div>
				</div>
				<div className="col-sm-12 col-md-6">
					<div
						className="col-sm-12 mt-5 ms-4"
						style={{ marginTop: "20px", fontFamily: "Google" }}
					>
						<h1>About this home</h1>
						<p className="fs-6" style={{ textAlign: "justify" }}>
							The must-see Lenora plan was designed for entertaining, featuring
							an inviting great room, an open dining nook and an impressive
							kitchen with a center island and spacious pantry. Rounding out the
							main floor are a convenient bedroom, bathroom and mudroom.
							Upstairs, you'll find a laundry with optional cabinets, a central
							loft, two generous bedrooms and a shared bath. Personalize this
							plan with a deluxe owner's bath and an extra bedroom in lieu of
							the loft.
						</p>
					</div>

					<div className="map-responsive ms-4">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14441.67997007766!2d-87.63814881313158!3d41.872766541713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687068718633!5m2!1sen!2sin"
							title="map"
							width="500"
							height="400"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="mt-5"
						></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default PropertyIndividualPage2;
