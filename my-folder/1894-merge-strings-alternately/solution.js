/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = "";
    for(var i = 0; i< word1.length || i< word2.length; i++){
        str += (word1[i] || '') + (word2[i] || '') 
    }

    return str

};
