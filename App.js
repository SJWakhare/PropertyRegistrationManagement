import React from "react";
import HomePage from "./components/HomePage/HomePage";
import PropertyListing from "./components/PropertyListing/PropertyListing";
import PropertyIndividualPage1 from "./components/PropertyIndividualPage/PropertyIndividualPage1/PropertyIndividualPage1.js";

import PropertyIndividualPage2 from "./components/PropertyIndividualPage/PropertyIndividualPage2/PropertyIndividualPage2.js";

import PropertyIndividualPage3 from "./components/PropertyIndividualPage/PropertyIndividualPage3/PropertyIndividualPage3.js";

import PropertyIndividualPage4 from "./components/PropertyIndividualPage/PropertyIndividualPage4/PropertyIndividualPage4.js";

import PropertyIndividualPage5 from "./components/PropertyIndividualPage/PropertyIndividualPage5/PropertyIndividualPage5.js";

import PropertyIndividualPage6 from "./components/PropertyIndividualPage/PropertyIndividualPage6/PropertyIndividualPage6.js";

import PropertyIndividualPage7 from "./components/PropertyIndividualPage/PropertyIndividualPage7/PropertyIndividualPage7.js";

import PropertyIndividualPage8 from "./components/PropertyIndividualPage/PropertyIndividualPage8/PropertyIndividualPage8.js";

import PropertyUpdate from "./components/PropertyUpdate/PropertyUpdate.js";
import ContactUs from "./components/Contactus/Contactus";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import BookVisit from "./components/BookVisit/BookVisit";
import Aboutus from "./components/Aboutus/Aboutus";
import Deleteuser from "./components/Deleteuser/Deleteuser";

function App() {
	return (
		<div className="App">
			{/* <Navbar /> */}
			{/* <HomeCarousel /> */}
			{/* <HomeCards /> */}
			{/* <HomePropertyCards/> */}
			{/* <Footer /> */}

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
					<Route path="/property-listing" element={<PropertyListing />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Signup />}/>
                    <Route path="/book-visit" element={<BookVisit />}/>
                    <Route path="/aboutus" element={<Aboutus />}/>
                    <Route path="/delete-user" element={<Deleteuser />}/>
                    <Route path="/property-update" element={<PropertyUpdate />}/>
                    <Route path="/contactus" element={<ContactUs />}/>
                    {/* <Route path="/property-individual-page" element={<PropertyIndividualPage />} /> */}
                    <Route path="/property-individual-page-1" element={<PropertyIndividualPage1 />} />
                    <Route path="/property-individual-page-2" element={<PropertyIndividualPage2 />} />
                    <Route path="/property-individual-page-3" element={<PropertyIndividualPage3 />} />
                    <Route path="/property-individual-page-4" element={<PropertyIndividualPage4 />} />
                    <Route path="/property-individual-page-5" element={<PropertyIndividualPage5 />} />
                    <Route path="/property-individual-page-6" element={<PropertyIndividualPage6 />} />
                    <Route path="/property-individual-page-7" element={<PropertyIndividualPage7 />} />
                    <Route path="/property-individual-page-8" element={<PropertyIndividualPage8 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
