const fn = require("../fn/fn");

const ArrayProtos = {
    /**
     * 
     * @param {String} key 
     * @returns sorted array by key string
     */
    sort_by(key = 'name') {
        return this.sort((a, b) => {
            if (!key in a || !key in b) return a < b ? - 1 : 1;
            return a[key] < b[key] ? -1 : 1
        })
    }
};

module.exports = ArrayProtos;
