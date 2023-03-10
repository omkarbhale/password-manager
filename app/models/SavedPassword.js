const mongoose = require("mongoose");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

const SavedPasswordSchema = mongoose.Schema({
	user: { type: mongoose.Types.ObjectId, ref: "User" },
	website: { type: String, required: true },
	loginUsername: { type: String, required: true },
	password: { type: String, required: true },
});

SavedPasswordSchema.pre("save", async function (next) {
	// only encrypt the password if it has been modified (or is new)
	if (!this.isModified("password")) return next();
	this.password = cryptr.encrypt(this.password);
	return next();
});

SavedPasswordSchema.methods.decryptPassword = function () {
	return cryptr.decrypt(this.password);
};

module.exports = mongoose.model("SavedPassword", SavedPasswordSchema);
