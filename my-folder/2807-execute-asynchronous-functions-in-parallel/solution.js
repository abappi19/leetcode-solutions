/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((res, rej) => {
        let count = 0;
        let arr = new Array(functions.length);
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then(r => {
                count++;

                arr[i] = r;
                if (count === functions.length) {
                    return res(arr);
                }

            }).catch(e => {
                rej(e);
            });
        }

    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
