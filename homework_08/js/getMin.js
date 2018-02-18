const getMin = (...args) => {
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
        if (min > args[i]) {
            min = args[i];
        }
    }
    return min;
}