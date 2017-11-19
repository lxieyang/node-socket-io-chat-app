const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should return non-stting value', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('    ');
    expect(res).toBe(false);
  });

  it('should allow string with non-sapce characters', () => {
    var res = isRealString('   Michael Liu    ');
    expect(res).toBe(true);
  });
});