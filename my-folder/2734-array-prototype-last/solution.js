/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const lastItem = this[this.length-1];
    return lastItem === undefined ? -1 : lastItem ;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
