/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
        let guessed = Math.floor(n/2);
        let start=0,end=n;
        let match = guess(guessed);

        while(match !== 0){
            if(match === -1) end = guessed - 1;
            else start = guessed + 1;
            guessed = Math.floor((start+end) / 2);
            match = guess(guessed);
        }
        return guessed; 
};
