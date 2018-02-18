const getClosesToZero = (...args) => {
    let min = Math.abs(args[0]);
    for (let i = 1; i < args.length; i++) {
        if (min > Math.abs(args[i])) {
            min = args[i];
        }
    }
    return min;
}