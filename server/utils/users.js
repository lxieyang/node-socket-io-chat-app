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

  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;  // undefined if not found
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];  // undefined if not found
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);  // map return the value we want

    return namesArray;
  }
}

module.exports = {Users};