import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarOther from "../NavbarOther/NavbarOther.js";
import "./Login.css";

function Login() {
	const navigate = useNavigate();
	let formRef = useRef();
	let [isSuccess, setIsSuccess] = useState(false);
	let [isError, setIsError] = useState(false);

	let [user, setUser] = useState({
		email: "",
		password: "",
	});

	let [validationMessages, setValidationMessages] = useState({
		email: "",
		password: "",
	});

	let handlerPasswordAction = (e) => {
		let newuser = { ...user, password: e.target.value };
		setUser(newuser);
		validatePassword();
	};

	let handlerEmailAction = (e) => {
		let newuser = { ...user, email: e.target.value };
		setUser(newuser);
		validateEmail();
	};

	const validateField = (fieldName, value) => {
		let error = null;

		if (fieldName === "email") {
			if (!value) {
				error = "Please enter your email";
			} else if (!/\S+@\S+\.\S+/.test(value)) {
				error = "Please enter a valid email";
			}
		} else if (fieldName === "password") {
			error = value ? null : "Please enter your password";
		}

		return error;
	};

	const validateEmail = () => {
		const { email } = user;
		const error = validateField("email", email);

		setValidationMessages((prevMessages) => ({
			...prevMessages,
			email: error,
		}));
	};

	const validatePassword = () => {
		const { password } = user;
		const error = validateField("password", password);

		setValidationMessages((prevMessages) => ({
			...prevMessages,
			password: error,
		}));
	};

	let loginAction = async () => {
		try {
			formRef.current.classList.add("was-validated");
			let formStatus = formRef.current.checkValidity();
			if (!formStatus) {
				return;
			}

			// Backend login code...
			let url = `http://localhost:4000/login-by-post`;
			let data = { email: user.email, password: user.password };
			let res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});

			console.log(data);

			if (res.status === 500) {
				let erroMessage = await res.text();
				throw new Error(erroMessage);
			}

			localStorage.setItem("loginStatus", "true");
			navigate("/home", { replace: true });
		} catch (err) {
			alert(err.message);
			setIsError(true);
		} finally {
			setTimeout(() => {
				setIsError(false);
				setIsSuccess(false);
			}, 5000);
		}
	};

	return (
		<div className="my-img1 d-flex flex-column">
			<NavbarOther />

			<div className="container">
				<div
					className="row justify-content-center flex-grow-1"
					style={{ marginTop: "15%" }}
				>
					<div className="col-sm-12 col-md-6 align-item-center">
						<div className="fs-1 text-white mb-3 text-center">Login Form</div>

						<form ref={formRef} className="needs-validation">
							<input
								type="email"
								className={`form-control form-control-lg mb-2 ${
									validationMessages.email ? "is-invalid" : ""
								}`}
								placeholder="Enter Email"
								value={user.email}
								onChange={handlerEmailAction}
								onBlur={validateEmail}
								required
							/>
							{validationMessages.email && (
								<div className="invalid-feedback">
									{validationMessages.email}
								</div>
							)}

							<input
								type="password"
								className={`form-control form-control-lg mb-2 ${
									validationMessages.password ? "is-invalid" : ""
								}`}
								placeholder="Enter password"
								value={user.password}
								onChange={handlerPasswordAction}
								onBlur={validatePassword}
								required
							/>
							{validationMessages.password && (
								<div className="invalid-feedback" >
									{validationMessages.password}
								</div>
							)}

							<input
								type="button"
								value="Login"
								className="w-100 btn btn-lg btn-secondary"
								onClick={loginAction}
							/>

							<div className="d-flex justify-content-center ">
								<Link
									to={"/registration"}
									style={{ textDecoration: "none", color: "white" }}
								>
									New User, Register here
								</Link>
							</div>
							<div></div>
						</form>

						{isSuccess && <div className="alert alert-success">Success</div>}
						{isError && <div className="alert alert-danger">Error</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
