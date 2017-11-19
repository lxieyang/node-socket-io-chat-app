/*
  [{
    id: 'asdfjasdkla',
    name: 'Michael',
    room: 'The office Fans'
  }]
*/

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person('Michael', 45);
// console.log(me.getUserDescription());

class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
}

module.exports = {Users};