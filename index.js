require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();
const connectDB = require("./app/db/connect");

// static files
app.use(express.static("public"));

// Test route
app.get("/api", (req, res, next) => {
	return res.status(200).json({
		message: "Welcome to password-manager API!",
	});
});

// middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
const router = require("./app/routes/routes");
app.use("/api", router);

async function run() {
	await connectDB();
	app.listen(process.env.PORT || 3000, () => {
		console.log(`Listening on port: ${process.env.PORT || 3000}`);
	});
}
run();
