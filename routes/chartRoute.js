const express = require("express");
const router = express.Router();
const controller = require("../controllers/chartController");

router.get("/", controller.show);
router.get("/line", controller.show);
router.get("/bar", controller.show);
router.get("/pie", controller.show);
router.get("/bubble", controller.show);
router.get("/area", controller.show);
router.get("/radar", controller.show);
router.get("/scatter", controller.show);
router.get("/mixed", controller.show);

module.exports = router;
