function mySqrt(x: number): number {
    let low = 0, high = x;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const sq = mid * mid;
        if(sq==x){
            return mid;
        }else if(sq<x){
            low= mid+1;
        }else{
            high = mid-1;
        }
    }
    return high;
};

