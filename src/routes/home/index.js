"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/bestpd", ctrl.output.bestpd);
router.get("/event", ctrl.output.event);
router.get("/introduce", ctrl.output.introduce);
router.get("/notice", ctrl.output.notice);
router.get("/jin", ctrl.output.jin);
router.get("/logincustom", ctrl.output.logincustom);
router.get("/delivery", ctrl.output.delivery);
router.get("/n1", ctrl.output.n1);
router.get("/n2", ctrl.output.n2);
router.get("/n3", ctrl.output.n3);
router.get("/n4", ctrl.output.n4);
router.get("/n5", ctrl.output.n5);
router.get("/n6", ctrl.output.n6);
router.get("/n7", ctrl.output.n7);
router.get("/n8", ctrl.output.n8);

router.post("/logincustom", ctrl.process.logincustom);
router.post("/register", ctrl.process.register);

module.exports = router;