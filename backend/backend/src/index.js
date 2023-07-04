import { MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // allowing everyone.

// required in post
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

async function addUserRecord(req, res) {
	try {
		const uri = "mongodb://127.0.0.1:27017";
		const client = new MongoClient(uri);

		const db = client.db("mydb");
		const messageColl = db.collection("user");

		let inputDoc = {
			username: req.query.username,
			password: req.query.password,
			email: req.query.email,
			mobile: req.query.mobile,
		};

		await messageColl.insertOne(inputDoc);

		await client.close();

		// string response
		// res.send("record added")

		// json response :: preferred
		res.json({ operation: "success" });
	} catch (err) {
		// res.json({operation: false});
		res.status(500).send("Error" + err.message);
	}
}

async function findAllProperty(req, res) {
	const uri = "mongodb://127.0.0.1:27017";
	const client = new MongoClient(uri);

	const db = client.db("mydb");
	const messageColl = db.collection("property-listing");

	let list = await messageColl.find().toArray();

	await client.close();
	res.json(list);
}

async function loginByPost(req, res) {
	try {
		const uri = "mongodb://127.0.0.1:27017";
		const client = new MongoClient(uri);

		const db = client.db("mydb");
		const messageColl = db.collection("user");

		let query = { email: req.body.email, password: req.body.password };
		let userRef = await messageColl.findOne(query);

		console.log(userRef);

		await client.close();

		// Negative: UserRef CANBE NULL;
		if (!userRef) {
			let errorMessage = `Record Not Found or Authentication Failure: ${req.body.email}`;
			throw new Error(errorMessage);
		}

		// Postive Scenario
		res.json(userRef);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

async function addBooking(req, res) {
	const uri = "mongodb://127.0.0.1:27017";
	const client = new MongoClient(uri);

	const db = client.db("mydb");
	const { name, email, date, time, mobile } = req.body;

	// Access the "visits" collection
	const collection = db.collection("booking-visits");

	// Create a new visit document
	const visit = {
		name,
		email,
		date,
		time,
		mobile,
	};

	// Insert the visit document into the collection
	collection.insertOne(visit, (err) => {
		if (err) {
			console.error("Error saving visit data:", err);
			res.status(500).json({ error: "Error saving visit data" });
			return;
		}

		console.log("Visit data saved");
		res.status(200).json({ message: "Visit data saved" });
	});
}

async function deleteUserRecord(req, res) {
	try {
		const uri = "mongodb://127.0.0.1:27017";
		const client = new MongoClient(uri);

		const db = client.db("mydb");
		const messageColl = db.collection("user");

		if (!req.query.email) {
			throw new Error("Required field is missing");
		}

		// this line is for delete
		await messageColl.deleteOne({ email: req.query.email });

		// for delete all
		// await messageColl.deleteMany({});

		await client.close();

		res.json({ opr: true });
	} catch (err) {
		res.status(500).send(err.message);
	}
}

async function findAllUser(req, res) {
	try {
		const uri = "mongodb://127.0.0.1:27017";
		const client = new MongoClient(uri);

		const db = client.db("mydb");
		const messageColl = db.collection("user");

		let list = await messageColl.find().toArray();

		await client.close();
		res.json(list);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

app.put("/property-update", async (req, res) => {
	try {
		const { num, price } = req.body;

		const uri = "mongodb://127.0.0.1:27017";
		// Create a new MongoClient
		const client = new MongoClient(uri);

		// Connect to the MongoDB server
		await client.connect();

		// Get the database and property collection
		const db = client.db("mydb");
		const propertyCollection = db.collection("property-listing");

		// Find and update the property based on the num field
		const updatedProperty = await propertyCollection.findOneAndUpdate(
			{ num: num },
			{ $set: { price: price } },
			{ returnOriginal: false }
		);

		// Close the connection
		client.close();

		res.json(updatedProperty.value);
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
});

async function addContactUs(req, res) {
	try {
		const uri = "mongodb://127.0.0.1:27017";
		const client = new MongoClient(uri);

		const db = client.db("mydb");
		const messageColl = db.collection("contactus");

		let inputDoc = {
			name: req.query.task,
			email: req.query.email,
			description: req.query.description,
			numpref: req.query.numpref,
		};
		await messageColl.insertOne(inputDoc);

		await client.close();
		res.json({ opr: true });
	} catch (err) {
		res.status(500).send(err.message);
	}
}

app.get("/property-listing", findAllProperty);
app.get("/addUser", addUserRecord);
app.post("/login-by-post", loginByPost);
app.get("/find-all-user", findAllUser);
app.get("/contactus", addContactUs);
// route to handle booking form submissions
app.post("/booking-visits", addBooking);

//delete
app.get("/delete-user", deleteUserRecord);

app.listen(4000, () => {
	console.log("Server started on port 4000");
});
