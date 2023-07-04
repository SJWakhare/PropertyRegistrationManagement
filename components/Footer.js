import React from "react";

function Footer() {
	return (
		<div className="row">
			<div className="col-sm-12">
				<footer class="footer mt-5">
					<div class="row justify-content-center">
						<div class="col-md-3 ms-12 justify-content-center">
							<h5>Property</h5>
							<ul>
								<li>Our Services</li>
								<li>Post your Property</li>
							</ul>
						</div>
						<div class="col-md-3 ms-12 justify-content-center">
							<h5>
								<a style={{ "text-decoration": "none", color: "white" }}>
									About Us
								</a>
							</h5>
							<ul>
								<li>Careers with Us</li>
								<li>Terms & Conditions</li>
								<li>Testimonials</li>
								<li>Privacy Policy</li>
							</ul>
						</div>
						<div class="col-md-3 ms-12 justify-content-center">
							<h5>
								<a
									href="./contactus.html"
									style={{ "text-decoration": "none", color: "white" }}
								>
									Contact Us
								</a>
							</h5>
							<p>Toll Free - 1800 00 0000</p>
							<p>Monday - Saturday (9:00AM to 11:00PM IST)</p>
							<p>Email - feedback@example.com</p>
							<p>Connect with Us</p>
							<p>All trademarks are the property of their respective owners.</p>
							<p>All rights reserved</p>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Footer;
