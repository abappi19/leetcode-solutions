/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {

    if (Array.isArray(obj)) {
        return obj.map(compactObject).filter(Boolean);
    }

    if (obj instanceof Object) {
        Object.entries(obj).forEach(([key, val]) => {
            if (!val) return delete obj[key];
            obj[key] = compactObject(obj[key]);
        });
    }
    return obj;
};
