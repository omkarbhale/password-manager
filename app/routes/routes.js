const express = require("express");
const router = express.Router();

const {
	signUp,
	login,
	addPassword,
	notImplemented,
} = require("../controllers/controller");

router.post("/signup", signUp);
router.get("/login", login);
router.patch("/account", notImplemented);
router.delete("/account", notImplemented);

router.get("/websites", notImplemented);
router.get("/allpasswords", notImplemented);
router.post("/password", addPassword);
router.delete("/password", notImplemented);

module.exports = router;
