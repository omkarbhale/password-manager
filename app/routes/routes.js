const express = require("express");
const router = express.Router();

const {
	signUp,
	login,
	getWebsites,
	getAllPasswords,
	addPassword,
	deletePassword,
	notImplemented,
} = require("../controllers/controller");
const auth = require("../middlewares/auth");

router.post("/signup", signUp);
router.get("/login", login);
router.patch("/account", notImplemented);
router.delete("/account", notImplemented);

router.get("/websites", auth, getWebsites);
router.get("/allpasswords", auth, getAllPasswords);
router.post("/password", auth, addPassword);
router.delete("/password", auth, deletePassword);

module.exports = router;
