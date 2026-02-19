/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let btBuy = prices[0];
    for(let i=1; i<prices.length; i++){
        const price = prices[i];
        if(price<btBuy){
             btBuy = price;
             continue;
        }
        const newProfit = price - btBuy;
        if(newProfit>profit) profit = newProfit;

    }

    return profit;
};
