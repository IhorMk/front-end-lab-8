const reverseNumber = (num) => {
    let result = 0;
    while (num) {
        result *= 10;
        result += num % 10;
        num = Math.trunc(num / 10);
    }
    return result;
}