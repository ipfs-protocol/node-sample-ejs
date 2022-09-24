"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./indexCtrl")

router.get("/", ctrl.output.main);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

// 외부 파일에서 사용할 수 있도록 출력
module.exports = router;