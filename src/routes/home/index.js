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

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;