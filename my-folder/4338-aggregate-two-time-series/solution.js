/**
 * @param {number[][]} series1
 * @param {number[][]} series2
 * @return {number[][]}
 */
var aggregateTimeSeries = function(series1, series2) {

    let i=0,j= 0;
    let result = [];
    while(series1.length > i || series2.length > j){
        let t;
        if(series1.length === i) t = series2[j][0];
        else if(series2.length === j) t = series1[i][0];
        else t = Math.min(series1[i][0], series2[j][0]);

        //1
        let v1,v2;

        if(series1.length > i && t === series1[i][0]){
            v1 = series1[i][1];
            i++;
        }else {
            v1 = series1.length > i ? series1[i][1] : 0;
        }

        
        if(series2.length > j && t === series2[j][0]){
            v2 = series2[j][1];
            j++;
        }else {
            v2 = series2.length > j ? series2[j][1] : 0;
        }

        result.push([t,v1+v2]);
        
        
    }
    return result;
    
};
