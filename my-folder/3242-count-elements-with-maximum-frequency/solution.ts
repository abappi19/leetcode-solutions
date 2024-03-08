function maxFrequencyElements(nums: number[]): number {
    let freq:Record<number, number> = {};

    for(let num of nums){
        freq[num] = (freq[num] || 0) + 1;
    }

    let mf = 0;
    let cmf = 0;

    for(let f of Object.values(freq)){

        if(f >mf){
            cmf = 1;
            mf = f;
        }
        else if(f==mf){
            ++cmf;
        }

    }

    return mf * cmf;
    
    
};
