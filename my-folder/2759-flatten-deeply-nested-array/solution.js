/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */



var flat = function (arr, n) {
    if(n==0 || !Array.isArray(arr)) return arr;
    return arr.flatMap(item=>flat(item, n-1));
};
