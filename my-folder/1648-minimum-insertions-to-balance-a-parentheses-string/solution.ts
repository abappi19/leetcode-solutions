function minInsertions(s: string): number {
    let open = 0;
    let needed = 0;


    let oneCloseNeeded = false;
    for (let char of s) {
        switch (char) {
            case '(':
                if (oneCloseNeeded) {
                    needed++;
                    oneCloseNeeded = false;
                } else {
                    open++;
                }
                continue;
            case ')':
                if (oneCloseNeeded) {
                    open--;
                    oneCloseNeeded = false;
                } else {

                    if (open === 0) {
                        open++;
                        needed++;
                    }

                    oneCloseNeeded = true;
                }
                continue;
            default:
                continue;

        }
    }

    if (open > 0) needed += open * 2;
    if (oneCloseNeeded) needed -= 1;

    return needed;

};
