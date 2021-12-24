const NumberProtos = {   
  reverse() {
    return Number(this.toString().split("").reverse().join(""))
  },

  bin() {
    return (this >>> 0).toString(2);
  },

  hex() {
    return this.toString(16)
  },

  isEven() {
    return this % 2 == 0;
  },

  isPrime() { 
    for (var i = 2; i < Math.abs(this / 2); i++) {
      if (this % i === 0) {
        return false;
      }
    }
    return this > 1;
  },

  sll(n = 1) {
    return Math.pow(this, (n * 2));
  },
  
  srl(n = 1) {
    return Math.pow(this, 1 / (n * 2));
  },
  
}

module.exports = NumberProtos
