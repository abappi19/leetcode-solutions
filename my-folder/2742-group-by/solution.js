/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((group, el)=>{
        const key = fn(el);
        if(group?.[key]){
            group[key].push(el);
        }else{
            group[key] = [el];
        }
        return group;
    }, {});
};


/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
