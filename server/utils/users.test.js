const expect = require('expect');

const {Users} = require('./users');

var users;

beforeEach(() => {
  users = new Users();
  users.users = [{
    id: '1',
    name: 'Michael',
    room: 'Node Example'
  }, {
    id: '2',
    name: 'Antonia',
    room: 'React Example'
  }, {
    id: '3',
    name: 'Julie',
    room: 'Node Example'
  }];
});

describe('Users', () => {
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Mike',
      room: 'Star war'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toBe(undefined);
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '4';
    var user = users.getUser(userId);

    expect(user).toBe(undefined);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Example');
    expect(userList).toEqual(['Michael', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Example');
    expect(userList).toEqual(['Antonia']);
  });
  
});