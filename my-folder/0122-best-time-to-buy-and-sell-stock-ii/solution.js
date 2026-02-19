/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let lbPrice = prices[0];
    let lsPrice = 0;
    let lProfit = 0;

    for(let i =1; i<prices.length; i++){
        
        const price = prices[i];

        if(lbPrice>price || lsPrice>price) {
            if(lProfit>0) profit+=lProfit;
            lbPrice = price;
            lProfit = 0;
            lsPrice = 0;
            continue;
        }

        const newProfit = price - lbPrice;
        if(newProfit>lProfit) {
            lProfit = newProfit;
            lsPrice = price;    
        }
    }
    
    if(lProfit>0)profit+=lProfit;

    return profit;
};
