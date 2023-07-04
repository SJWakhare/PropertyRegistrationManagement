import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import NavbarOther from "../NavbarOther/NavbarOther";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const BookVisit = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [mobile, setMobile] = useState("");

	const [errors, setErrors] = useState({});

	const validateField = (fieldName, value) => {
		let error = null;

		if (fieldName === "name") {
			error = value ? null : "Please enter your name";
		} else if (fieldName === "email") {
			if (!value) {
				error = "Please enter your email";
			} else if (!/\S+@\S+\.\S+/.test(value)) {
				error = "Please enter a valid email";
			}
		} else if (fieldName === "date") {
			error = value ? null : "Please enter a date";
		} else if (fieldName === "time") {
			error = value ? null : "Please enter a time";
		} else if (fieldName === "mobile") {
			if (!value) {
				error = "Please enter your mobile number";
			} else if (!/^\d{10}$/.test(value)) {
				error = "Please enter a valid 10-digit mobile number";
			}
		}

		return error;
	};

	const handleChange = (fieldName, value) => {
		const error = validateField(fieldName, value);

		setErrors((prevErrors) => ({
			...prevErrors,
			[fieldName]: error,
		}));

		// Update the field value
		if (fieldName === "name") {
			setName(value);
		} else if (fieldName === "email") {
			setEmail(value);
		} else if (fieldName === "date") {
			setDate(value);
		} else if (fieldName === "time") {
			setTime(value);
		} else if (fieldName === "mobile") {
			setMobile(value);
		}
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	// Validate the form fields
	// 	const validationErrors = {};
	// 	if (!name) {
	// 		validationErrors.name = "Please enter your name";
	// 	}
	// 	if (!email) {
	// 		validationErrors.email = "Please enter your email";
	// 	} else if (!/\S+@\S+\.\S+/.test(email)) {
	// 		validationErrors.email = "Please enter a valid email";
	// 	}
	// 	if (!date) {
	// 		validationErrors.date = "Please enter a date";
	// 	}
	// 	if (!time) {
	// 		validationErrors.time = "Please enter a time";
	// 	}
	// 	if (!mobile) {
	// 		validationErrors.mobile = "Please enter your mobile number";
	// 	} else if (!/^\d{10}$/.test(mobile)) {
	// 		validationErrors.mobile = "Please enter a valid 10-digit mobile number";
	// 	}

	// 	if (Object.keys(validationErrors).length > 0) {
	// 		setErrors(validationErrors);
	// 	} else {
	// 		try {
	// 			// Prepare the data for submission
	// 			const formData = {
	// 				name,
	// 				email,
	// 				date,
	// 				time,
	// 				mobile,
	// 			};

	// 			let url = `http://localhost:4000/booking-visits`;
	// 			// Make a POST request to your backend API endpoint
	// 			const response = await fetch(url, {
	// 				method: "POST",
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify(formData),
	// 			});

	// 			if (response.ok) {
	// 				// Submission successful
	// 				const data = await response.json();
	// 				console.log("Submission successful:", data);
	// 				// Perform any additional logic or UI updates as needed
	// 			} else {
	// 				// Submission failed
	// 				throw new Error("Submission failed");
	// 			}
	// 		} catch (error) {
	// 			// Handle errors if the request fails
	// 			console.error("Submission failed:", error);
	// 			// Perform any error handling or display appropriate messages
	// 		} finally {
	// 			// Reset the form and errors
	// 			setName("");
	// 			setEmail("");
	// 			setDate("");
	// 			setTime("");
	// 			setMobile("");
	// 			setErrors({});
	// 		}
	// 	}
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate the form fields
		const validationErrors = {};
		if (!name) {
			validationErrors.name = "Please enter your name";
		}
		if (!email) {
			validationErrors.email = "Please enter your email";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			validationErrors.email = "Please enter a valid email";
		}
		if (!date) {
			validationErrors.date = "Please enter a date";
		}
		if (!time) {
			validationErrors.time = "Please enter a time";
		}
		if (!mobile) {
			validationErrors.mobile = "Please enter your mobile number";
		} else if (!/^\d{10}$/.test(mobile)) {
			validationErrors.mobile = "Please enter a valid 10-digit mobile number";
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			try {
				// Prepare the data for submission
				const formData = {
					name,
					email,
					date,
					time,
					mobile,
				};

				let url = `http://localhost:4000/booking-visits`;
				// Make a POST request to your backend API endpoint
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				if (response.ok) {
					// Submission successful
					const data = await response.json();
					console.log("Submission successful:", data);
					// Perform any additional logic or UI updates as needed

                    alert("You have booked a visit");
					// Reset the form and errors
					setName("");
					setEmail("");
					setDate("");
					setTime("");
					setMobile("");
					setErrors({});
				} else {
					// Submission failed
					throw new Error("Submission failed");
				}
			} catch (error) {
				// Handle errors if the request fails
				console.error("Submission failed:", error);
				// Perform any error handling or display appropriate messages
			} finally {
				setName("");
				setEmail("");
				setDate("");
				setTime("");
				setMobile("");
				setErrors({});
			}
		}
	};

	return (
		<div>
			<NavbarOther />
			<Container className="col-sm-12 col-md-6">
				<h1>Book a Visit Form</h1>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="name" className="mt-2">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your name"
							value={name}
							onChange={(e) => handleChange("name", e.target.value)}
							isInvalid={!!errors.name}
							required
						/>
						<Form.Control.Feedback type="invalid">
							{errors.name}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="email" className="mt-2">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => handleChange("email", e.target.value)}
							isInvalid={!!errors.email}
							required
						/>
						<Form.Control.Feedback type="invalid">
							{errors.email}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="date" className="mt-2">
						<Form.Label>Date</Form.Label>
						<Form.Control
							type="date"
							value={date}
							onChange={(e) => handleChange("date", e.target.value)}
							isInvalid={!!errors.date}
							required
						/>
						<Form.Control.Feedback type="invalid">
							{errors.date}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="time" className="mt-2">
						<Form.Label>Time</Form.Label>
						<Form.Control
							type="time"
							value={time}
							onChange={(e) => handleChange("time", e.target.value)}
							isInvalid={!!errors.time}
							required
						/>
						<Form.Control.Feedback type="invalid">
							{errors.time}
						</Form.Control.Feedback>
					</Form.Group>

					<Form.Group controlId="mobile" className="mt-2">
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control
							type="tel"
							placeholder="Enter your mobile number"
							value={mobile}
							onChange={(e) => handleChange("mobile", e.target.value)}
							isInvalid={!!errors.mobile}
							required
						/>
						<Form.Control.Feedback type="invalid">
							{errors.mobile}
						</Form.Control.Feedback>
					</Form.Group>

					<Button variant="danger" type="submit" className="w-100 fs-5 mt-4">
						<Link style={{ textDecoration: "none", color: "white" }}>
							Submit
						</Link>
					</Button>
				</Form>
			</Container>

			<Footer />
		</div>
	);
};

export default BookVisit;
