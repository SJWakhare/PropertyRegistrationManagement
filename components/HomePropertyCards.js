import React from "react";
import PropertyCard from "./PropertyCard/PropertyCard";

function HomePropertyCards() {
	return (
		<div>
			{/* CARDS od home page */}
			<div class="">
				<h3 class="mt-5 text-center">Top Rated Properties</h3>
				<div class="row mt-5 justify-content-center">
					<div class="col-sm-12 col-md-2">
						<div class="card">
							<img
								src="./img/26.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body mt-3">
								<h5 class="card-title">BriarCrest</h5>
								<p class="card-text">
									Bestowing excellent hospitality to its every category of
									guests, Piyush Residency reflects the culture and ethos of its
									location. With jawdropping views
								</p>
								{/* <a href="#" class="btn btn-primary">
									Go to Property
								</a> */}
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-2">
						<div class="card">
							<img
								src="./img/11.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body mt-3">
								<h5 class="card-title">Rockwell Apartments</h5>
								<p class="card-text">
									Vaibhav Apratments goes above and beyond to provide
									exceptional hospitality to guests from all backgrounds,
									showcasing the local culture and values of its..
								</p>
								{/* <a href="#" class="btn btn-primary">
									Go to Property
								</a> */}
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-2" style={{maxHeight: "605px"}}>
						<div class="card">
							<img
								src="../img/27.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body mt-3">
								<h5 class="card-title">Newport Apartments</h5>
								<p class="card-text">
									As you step inside, you are greeted by an openness layout that
									seamlessly combines the living, dining, and kitchen areas. The
									design of space fosters a sense of openness.
								</p>
								{/* <a href="#" class="btn btn-primary">
									Go to Property
								</a> */}
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-2">
						<div class="card">
							<img
								src="./img/22.jpg"
								class="card-img-top w-100"
								alt="..."
								style={{ height: "24vh" }}
							/>
							<div class="card-body">
								<h5 class="card-title mt-3">Royal Retreat</h5>
								<p class="card-text">
									The project is set in an area of 8 acres and offers various
									configurations including residential plot formats. The plot
									area is 1200.0 sq.ft. and there is one building. With all the
									accessibilty
								</p>
								{/* <a href="#" class="btn btn-primary">
									Go to Property
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePropertyCards;
