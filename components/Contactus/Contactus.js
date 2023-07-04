import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./Contactus.css";
import NavbarOther from "../NavbarOther/NavbarOther";

function ContactUs() {
	let formRef = useRef();
	let [sucessBox, setSuccessBox] = useState(false);
	let [todo, setTodo] = useState({ name: "", email: "", description: "" });

	let handleChnageNameAction = (e) => {
		let newTodo = { ...todo, name: e.target.value };
		setTodo(newTodo);
	};

	let handleChnageEmailAction = (e) => {
		// console.log(e.target);
		let newTodo = { ...todo, email: e.target.value };
		setTodo(newTodo);
	};

	let handleChangeDescriptionAction = (e) => {
		// console.log(e.target.value);
		let newTodo = { ...todo, description: e.target.value };
		setTodo(newTodo);
	};

	let addTodoAction = async () => {
		console.log(todo);
		formRef.current.classList.add("was-validated");
		let formStatus = await formRef.current.checkValidity();
		if (!formStatus) {
			alert();
			return;
		}

		let url = `http://localhost:4000/addtodo?name=${todo.name}&email=${todo.email}&description=${todo.description}`;
		let res = await fetch(url);

		if (res.status != 200) {
			let serverMsg = await res.text();
			throw new Error(serverMsg);
		}

		// clear the box
		let newtodo = { name: "", email: "", description: "" };
		setTodo(newtodo);

		setSuccessBox(true);
		setTimeout(() => {
			setSuccessBox(false);
		}, 5000);

		formRef.current.classList.remove("was-validated");
	};

	return (
		<>
			<NavbarOther />
			{/* <Container className="background-container"> */}
			<div className="row justify-content-center background-container">
				<div className=" col-sm-12 col-md-6 mb-1 ">
					<form ref={formRef} className="needs-validation">
						<h1>Contact Us</h1>
						<input
							className="form-control form-control-lg mb-2"
							type="text"
							placeholder="Enter your name"
							value={todo.name}
							onChange={handleChnageNameAction}
							pattern="^[A-Za-z\s]{3,20}"
							required
						/>

						<input
							className="form-control form-control-lg mb-2"
							type="text"
							placeholder="Enter Your Email"
							value={todo.email}
							onChange={handleChnageEmailAction}
							pattern="^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.*[!@#$&]).{8,30}"
							required
						/>

						<textarea
							className="form-control mb-2"
							cols="30"
							rows="3"
							placeholder="We are here for you!"
							value={todo.description}
							onChange={handleChangeDescriptionAction}
							required
						></textarea>

						{/* <select
              className="form-select mb-2"
              aria-label="Default select example"
              onChange={handleChangeNumPrefAction}
            >
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}

						<input
							className="btn btn-lg btn-secondary w-100"
							type="button"
							value="Send"
							onClick={addTodoAction}
						/>
					</form>

					{sucessBox && (
						<div className="alert alert-success">Operation Success</div>
					)}
				</div>
				<div className="row justify-content-center">
					<div className="d-flex justify-content-center col-sm-12 col-md-6 mb-5">
						<img
							src="https://images.unsplash.com/photo-1590615370581-265ae19a053b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbm5lY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
							alt="react logo"
							style={{ width: "100%" }}
						/>
					</div>
				</div>
			</div>
			{/* </Container> */}
		</>
	);
}

export default ContactUs;
