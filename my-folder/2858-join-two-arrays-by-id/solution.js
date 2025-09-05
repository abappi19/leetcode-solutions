/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {

    const a1 = arr1.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});

    const a2 = arr2.reduce((obj, item) => {
        obj[item.id] = {
            ...(obj?.[item.id] || {}),
            ...item
        }
        return obj;
    }, a1);

    return Object.values(a2);
};
