"use strict";

const output ={
  main: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
};

const users = {
  id: ["aaa", "bbb", "김팀장"],
  pw: ["111", "222", "333"],
}

const process = {
  login: (req, res) => {
    // console.log(req.body);  body로 데이터 보내니까 body-parser 설치
    const id = req.body.id,
      pw = req.body.pw;

    // console.log(id, pw);
    if(users.id.includes(id)) {
      // user배열에 id값이 포함되어 있으면, 인덱스 값을 가져온다.
      const idx = users.id.indexOf(id);
      if(users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인 실패",
    });
  },
};



module.exports = {
  output,
  process,
}