class JSProFunction {
  toBinary(number) {
    number = Number(number) ? Number(number) : number.dec();
    return (number >>> 0).toString(2);
  }
    
  toHex(number) {
    number = Number(number) ? Number(number) : number.dec();
    return number.toString(16);
  }

  factorial(n) {
    if (n > 1) {
      return n * this.factorial(n - 1);
    }
    return 1;
  }
};

module.exports = new JSProFunction();