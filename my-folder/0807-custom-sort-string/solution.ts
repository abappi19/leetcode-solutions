function customSortString(order: string, s: string): string {
    
    let m = {};

    for(let c of order){
        m[c] = 0;
    }

    let r = [];


    for(let c of s){
        if(typeof m[c] == 'number'){
            m[c] = m[c] +1;
        }else{
            r.push(c);
        }
    }


    
    for(let c of order){
        for(let i = 0; i<m[c]; i++){
            r.push(c);
        }
    }


    return r.join('');
};
