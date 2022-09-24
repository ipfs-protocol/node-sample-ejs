"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#password"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", loginFunc);

function loginFunc() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  // console.log(req);  --> {id: 'aaa', pw: 'ddd'} (object 향테)
  // console.log(JSON.stringify(req));  --> {"id":"aaa","pw":"ddd"} (json 형태)

  // 데이터 전달
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req) // 문자열로 바꾸어서 전달
  })
  .then((res) => res.json())  
  .then((res) => {
    // then()으로 결과값 받음
    if(res.success) {
      location.href = "/";
    } else {
      alert(res.msg);
    }
  })
  .catch((err) => {
    // 전송 경로가 없거나, 서버 에러인 경우
    console.error(new Error("로그인중 에러 발생"));
  });

  /*
    res.json()의 반환 값은 Promise 이다.
    기본 res의 반환 값은 Response 스트림 인데
    "json()" 메서드를 통해 Response(응답) 스트림을 읽을 수 있다.

    Response는 데이터가 모두 받아진 상내가 아니다.
    ".json()"으로 Response 스트림을 가져와 완료될 때까지 읽는다.
    다 읽은 body의 텍스트를 Promise 형태로 반환한다.
  */
  

  
}