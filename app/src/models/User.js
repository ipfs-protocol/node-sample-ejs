'use strict';

const UserStorage = require('./UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body

    // req.body.id 값으로 들어온 아이디에 해당하는
    // id, pw값의 정보를 가져온다. (name 추가 가능하다.)
    const { id, pw } = UserStorage.getUserInfo(body.id);

    if(id) {
      // 아이디 존재
      if(id === body.id && pw === body.pw) {
        // 비밀번호가 동일한 경우
        return { success: true };
      }
      // 비밀번호가 다른 경우
      return { success: false, msg: "비밀번호가 다릅니다."}
    }
    // 아이디가 없을 경우
    return { success: false, msg: "아이디가 존재하지 않습니다."}
  }
}

module.exports = User;