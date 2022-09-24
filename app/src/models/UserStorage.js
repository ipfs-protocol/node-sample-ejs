"use strict";

class UserStorage {
  // # : public한 변수에서 private한 변수로 변경
    // static이지만, 클래스 이름으로 외부에서 접근 불가능
  static #users = {
    id: ["aaa", "bbb", "김팀장"],
    pw: ["111", "222", "333"],
    name: ["이름1", "이름2", "이름3"],
  }

  static getUsers(...fields) {
    // 데이터를 은닉한 후, 메서드로 받아가기
    // ... :: 요청 변수가 몇개인지 몰라서, 배열로 변수 목록 받음
    // 여러개의 데이터 중에, 선텍된 데이터만을 받아오고 싶을 때.

    const users = this.#users;
    
    // console.log(fields); // 가져올 필드 출력

    // reduce :: 데이터(id, pw, name)가 있는 동안 계속 반복 실행
    // 선택된 필드(field)만으로 newUsers 를 만든다.
    const newUsers = fields.reduce((newUsers, field) => {
      // fields에 개별 변수 값들이, field 변수에 계속 순회하며 들어온다.
      // console.log(newUsers, field);

      // fields에 넘어온 변수만 담는, 새로운 Users를 만든다.
      if(users.hasOwnProperty(field)) {
        // users 라는 데이터 배열에, field 로 넘어온 항목이 있으면
        // 새로 만든 배열(newUsers)에 키(newUsers[field])와 값(users[field])으로 저장한다.
        newUsers[field] = users[field];
      }

      return newUsers;
    }, {}); // {} -> newUsers의 초기값(빈 object)이다.

    return newUsers; // 마지막 변수값 추가
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    // users에 있는 키값들만 뽑아 낸다.
    const usersKeys = Object.keys(users); // --> [id, pw, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
        // info에는 키값이 차례로 들어온다. 1.id, 2.pw, 3.name
        // idx에 해당하는 id, pw 값이 newUser에 들어간다.
        newUser[info] = users[info][idx];
        return newUser;
    }, {});

    return userInfo;
  }
};

module.exports = UserStorage;