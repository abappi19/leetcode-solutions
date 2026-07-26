/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
    if(9*n<s) return -1;
    if(s===0) return 0;

    let digits = [];
    let remaining = s;
    for(let i=0; i<n; i++){
        const digit = Math.min(remaining, 9);
        digits.push(digit);
        remaining-=digit;
        if(digit === 0) break;
    }

    while(digits.length < n) digits.push(0);

    return Number(digits.join(""));
    
};
