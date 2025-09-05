/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    
    let index = 0;
    const res = [];

    while(index < arr.length){
        res.push(arr.slice(index, index+size));
        index = index+size;
    }

    return res;    
};

