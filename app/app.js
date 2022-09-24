"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// 라우팅
const page = require("./src/routes");   // index.js

// 템플릿 설정
app.set("views", "./src/views");
app.set("view engine", "ejs");
// 정적 폴더 설정 : __dirname는 app.js위치
app.use(express.static(`${__dirname}/src/public`));
// body-parser가 json 데이터를 파싱하도록 설정
app.use(bodyParser.json());
// URL을 통ㄹ해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

// 미들웨어 등록(use)
app.use("/", page);   // 라우터 설정 : root로 들어오면 page로 연결

module.exports = app;