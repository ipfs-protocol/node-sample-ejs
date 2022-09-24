"use strict";

const User = require("../models/User");

const output ={
  main: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
};

const process = {
  login: (req, res) => {
    // user의 인스턴스를 생성
    const user = new User(req.body);

    const response = user.login();
    return res.json(response); // 클라이언트에게 전달(login.js)

    /*
      res.json()의 반환 값은 Promise 이다.
      기본 res 의 반환 값은 Response 스트림인데,
      ".json()" 메서드를 통해 Response(응답) 스트림을 읽을 수 있다.
      Response 는 데이터가 모드 받아진 상태가 아니다.
      ".json()"으로 Response 스트림을 가져와 완료될 때까지 읽는다.
      다 읽은 body 의 텍스트를 Promise 형태로 반환한다.
    */
  }    
};

module.exports = {
  output,
  process,
}