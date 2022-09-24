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
}