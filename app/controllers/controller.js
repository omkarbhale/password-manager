const { User, SavedPassword } = require("../models");
const { StatusCodes } = require("http-status-codes");

const signUp = async (req, res, next) => {
	const { username, password } = req.body;

	const existingUser = await User.findOne({ username });
	if (existingUser != null) {
		return res.status(StatusCodes.CONFLICT).json({
			message: "User with this username already exists",
		});
	}

	const user = new User({ username, password });
	await user.save();

	return res.status(StatusCodes.CREATED).json({
		userid: user._id,
		username,
		message: "Registered successfully",
	});
};

const login = async (req, res, next) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username }).select("password");
	try {
		const token = await user.login(password);
		return res.status(StatusCodes.OK).json({
			userid: user._id,
			token,
		});
	} catch (err) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ message: err.message });
	}
};

const addPassword = async (req, res, next) => {
	const { website, loginUsername, password } = req.body;

	const savedPassword = new SavedPassword({
		website,
		loginUsername,
		password,
	});
	await savedPassword.save();

	return res
		.status(StatusCodes.OK)
		.json({
			website,
			loginUsername,
			message: "Password added successfully",
		});
};

module.exports = {
	signUp,
	login,
	addPassword,
	notImplemented: async (req, res, next) => {
		return res.status(StatusCodes.NOT_IMPLEMENTED).json({
			message: "Not implemented",
		});
	},
};
