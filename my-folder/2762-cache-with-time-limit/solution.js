var TimeLimitedCache = function() {
    this.valueMap = {};
    this.timerMap = {};
    
};


/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let rv = !!this.valueMap[key];
    
    this.valueMap[key] = value;
    this.timerMap[key] && clearTimeout(this.timerMap[key]);
    

    const id = setTimeout(()=>{
        delete this.valueMap[key];
    },duration);
    
    this.timerMap[key] = id;
    return rv;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.valueMap[key] || -1;
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.valueMap).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
