const express = require("express");
const router = express.Router();
const controller = require("../controllers/serviceController");
const auth = require("../middlewares/auth");

router.get("/", controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;
