/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let newCount = n;
    
    return function() {
        return newCount++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
