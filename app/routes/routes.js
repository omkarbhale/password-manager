const express = require("express");
const router = express.Router();

const { notImplemented } = require("../controllers/controller");

router.post("/signup", notImplemented);
router.get("/login", notImplemented);
router.post("/updateAccount", notImplemented);

router.get("/websites", notImplemented);
router.get("/allpasswords", notImplemented);
router.post("/password", notImplemented);
router.delete("/password", notImplemented);

module.exports = router;
