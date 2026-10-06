function calPoints(operations: string[]): number {
    let res:number[] = [];
    for (let i = 0; i < operations.length; i++) {
        const o = operations[i];
        switch (o) {
            case 'C':
                res.pop();
                continue;
            case 'D':
                res.push(res[res.length-1] * 2);
                continue;
            case '+':
                res.push(
                    res[res.length-1] + res[res.length-2]
                )
                continue;
            default:
                res.push(Number(o));

        }
    }

    let result=0;
    for(let i=0; i<res.length; i++){
        result+=res[i];
    }

    return result;
};
