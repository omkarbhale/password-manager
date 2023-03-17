const express = require("express");
const router = express.Router();

const {
	signUp,
	login,
	patchAccount,
	getWebsites,
	getAllPasswords,
	addPassword,
	deletePassword,
	deleteAccount,
	notImplemented,
} = require("../controllers/controller");
const auth = require("../middlewares/auth");

router.post("/signup", signUp);
router.post("/login", login);
router.patch("/account", auth, patchAccount);
router.delete("/account", auth, deleteAccount);

router.get("/websites", auth, getWebsites);
router.get("/allpasswords", auth, getAllPasswords);
router.post("/password", auth, addPassword);
router.delete("/password", auth, deletePassword);

module.exports = router;
