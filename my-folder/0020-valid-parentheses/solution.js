/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const openningsStack = [];
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const openings = Object.values(pairs);

    for(const character of s) {
        if(!openings.includes(character)){
            if(openningsStack.lenght===0) return false;
            const lastPushedOpenning = openningsStack.pop();
            if(pairs[character] !== lastPushedOpenning) return false;
            continue;
        }
        openningsStack.push(character);
    }

    if(openningsStack.length !== 0) return false;

    return true;
};
