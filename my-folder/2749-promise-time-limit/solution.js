/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {

        const fnp = fn(...args);
        
        const top = new Promise((_,rej)=>{
            setTimeout(()=>rej("Time Limit Exceeded"),t);
        });

        return Promise.race([fnp,top]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
