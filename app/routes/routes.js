const express = require("express");
const router = express.Router();

const { signUp, login, notImplemented } = require("../controllers/controller");

router.post("/signup", signUp);
router.get("/login", login);
router.post("/updateAccount", notImplemented);

router.get("/websites", notImplemented);
router.get("/allpasswords", notImplemented);
router.post("/password", notImplemented);
router.delete("/password", notImplemented);

module.exports = router;
