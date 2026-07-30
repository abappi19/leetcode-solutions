function topKFrequent(nums: number[], k: number): number[] {
    const dict:any = {};
    for(const num of nums){
        dict[num] = (dict[num] ?? 0) +1;
    }

    const entries = Object.entries(dict).sort((a:any,b:any)=>b[1]-a[1]);


    const res:number[] = [];

    for(let i=0; i<k;i++){
        res.push(Number(entries[i][0]));
    }

    return res;
};
