require("dotenv").config();
const express = require("express");
require("express-async-errors");
const app = express();

// Setup next js or any frontend middleware

app.get("/api", (req, res, next) => {
	return res.status(200).json({
		message: "Welcome to password-manager API!",
	});
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port: ${process.env.PORT || 3000}`);
});
