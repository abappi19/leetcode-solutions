function canReach(start: number[], target: number[]): boolean {
    return ((start[0] + start[1]) & 1) === ((target[0] + target[1]) & 1);
};


