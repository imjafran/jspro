const fn = require("../fn/fn")

const StringProtos = {
  /**
   * To make string capital
   */
  toCapitalCase() {
    return this[0].toUpperCase() + this.slice(1);
  },

  /**
   * To make string camel case
   */
  toCamelCase() {
    let STR = this.toLowerCase()
      .trim()
      .split(/[ -_]/g)
      .map((word) => word.replace(word[0], word[0].toString().toUpperCase()))
      .join("");
    return STR.replace(STR[0], STR[0].toLowerCase());
  },

  /**
   * Revers string
   */
  reverse() {
    return this.toString().split("").reverse().join("");
  },

  /**
   * Makes slug from text
   */
  slugify() {
    return this.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w]+/g, "-")
      .replace("[-]+", "-")
      .replace(/^-+|-+$/g, "");
  },

  /**
   * To hexadecimal
   */
  dec() {
    return Number(this) ? Number(this) : parseInt(this, 16);
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
};

module.exports = StringProtos
