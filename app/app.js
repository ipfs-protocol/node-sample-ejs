"use strict";

const express = require('express');
const app = express();

// 라우팅
const page = require("./src/routes");   // index.js

// 템플릿 설정
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어 등록(use)
app.use("/", page);   // 라우터 설정 : root로 들어오면 page로 연결

module.exports = app;