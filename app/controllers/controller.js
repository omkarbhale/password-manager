const { StatusCodes } = require("http-status-codes");

module.exports = {
	notImplemented: async (req, res, next) => {
		return res.status(StatusCodes.NOT_IMPLEMENTED).json({
			message: "Not implemented",
		});
	},
};
