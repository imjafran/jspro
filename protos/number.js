const fn = require("../fn/fn");

const NumberProtos = {
  /**
   * revers numbe
   */
  reverse() {
    return Number(this.toString().split("").reverse().join(""));
  },

  /**
   * To binary
   */
  bin() {
    return fn.toBinary(this);
  },

  /**
   * To hexadecimal
   */
  hex() {
    return fn.toHex(this);
  },

  /**
   * Returns true when number is even
   */
  isEven() {
    return this % 2 == 0;
  },

  /**
   * Returns true when number is prime
   */
  isPrime() {
    for (var i = 2; i < Math.abs(this / 2); i++) {
      if (this % i === 0) {
        return false;
      }
    }
    return this > 1;
  },

  /**
   *
   * @param {Number} bite // default 1
   * shift left logical n bite
   */
  sll(bite = 1) {
    return Math.pow(this, bite * 2);
  },

  /**
   *
   * @param {Number} bite // default 1
   * shift right logical n bite
   */
  srl(bite = 1) {
    return Math.pow(this, 1 / (bite * 2));
  },

  /**
   *
   * @param {Number} n
   * returns repeated number
   */
  repeat(n = 2) {
    return Number(this.toString().repeat(n));
  },

  /**
   * Returns true when the number is palindromic
   */
  is_palindromic() {
    let str = this.toString();
    let len = str.length;
    let mid = Math.floor(len / 2);

    for (let i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }

    return true;
  },

  /**
   *
   * @returns factorial or the number
   */
  factorial() {
    return fn.factorial(this);
  },
};

module.exports = NumberProtos;
