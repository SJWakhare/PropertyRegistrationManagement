import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import NavbarOther from "../NavbarOther/NavbarOther";
import Footer from "../Footer.js";

function PropertyListing() {
	const [propertyList, setPropertyList] = useState([]);
	const [sortingOption, setSortingOption] = useState("price"); // Default sorting option is "price"

	useEffect(() => {
		getAllPropertyListing();
	}, []);

	const getAllPropertyListing = async () => {
		let url = `http://localhost:4000/property-listing`;
		let res = await fetch(url);
		let list = await res.json();
		setPropertyList(list);
	};

	const handleSortingOptionChange = (event) => {
		setSortingOption(event.target.value);
	};

	useEffect(() => {
		sortPropertyList();
	}, [sortingOption]);

	const sortPropertyList = () => {
		let sortedList = [...propertyList];

		switch (sortingOption) {
			case "price":
				sortedList.sort((a, b) => a.price - b.price);
				break;
			case "bhk":
				sortedList.sort((a, b) => a.bhk - b.bhk);
				break;
			case "sqft":
				sortedList.sort((a, b) => a.sqft - b.sqft);
				break;
			// Add more cases for other sorting options if needed
			default:
				break;
		}

		setPropertyList(sortedList);
	};

	return (
		<div>
			{/* NAVBAR */}
			<NavbarOther />

			<div className="container">
				<div className="row justify-content-center">
					<div
						className="col-sm-12"
						style={{ maxHeight: "200px", marginLeft: "10%" }}
					>
						{/* PROPERTY HOUSE SALE & IMAGE DIV */}
						<div className="row mt-5">
							<div
								className="col-md-6 col-sm-12"
								style={{ maxHeight: "200px" }}
							>
								<h3>Houses for sale near me</h3>
								<p style={{ maxWidth: "70%" }}>
									Find houses for sale near you. View photos, open house
									information, and property details for nearby real estate.
								</p>
							</div>
							<div
								className="div-img col-md-6 col-sm-12"
								style={{ maxHeight: "200px" }}
							>
								<img
									src="https://ssl.cdn-redfin.com/vLATEST/corvstatic/customer-pages/1bce9a4e012a6bc1306fd9cf4c7b8c25.png"
									alt=""
									style={{ maxHeight: "75%", background: "cover" }}
								/>
							</div>
						</div>

						{/* SORTING OPTIONS */}
						<div className="row mt-3">
							<div className="col-md-6 col-sm-12 d-flex align-item-center">
								<label htmlFor="sortingOption">Sort by:</label>
								<select
									id="sortingOption"
									className="form-control w-50"
									value={sortingOption}
									onChange={handleSortingOptionChange}
								>
									<option value="price">Price</option>
									<option value="bhk">BHK</option>
									<option value="sqft">Sq. Ft.</option>
									{/* Add more sorting options as needed */}
								</select>
							</div>
						</div>

						{/* PROPERTY CARDS */}
						<div className="d-flex flex-wrap" style={{}}>
							{propertyList.map((item) => (
								<PropertyCard
									key={item.id}
									image={item.image}
									addressFirst={item.addressFirst}
									addressSecond={item.addressSecond}
									price={item.price}
									bhk={item.bhk}
									sqft={item.sqft}
									yearBuilt={item.yearBuilt}
									aboutHouse={item.aboutHouse}
									num={item.num}
								/>
							))}
						</div>
					</div>

					{/* FOOTER */}
					{/* <Footer /> */}
				</div>
			</div>
		</div>
	);
}

export default PropertyListing;
