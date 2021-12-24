const StringProtos = {
  toCapitalize() {
    return this[0].toUpperCase() + this.slice(1);
  },

  toCamelCase() {
    let STR = this.toLowerCase()
      .trim()
      .split(/[ -_]/g)
      .map((word) => word.replace(word[0], word[0].toString().toUpperCase()))
      .join("");
    return STR.replace(STR[0], STR[0].toLowerCase());
  },

  reverse() {
    return this.toString().split("").reverse().join("");
  },

  slugify() {
    return this.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w]+/g, "-")
      .replace("[-]+", "-")
      .replace(/^-+|-+$/g, "");

  }
}

module.exports = StringProtos
