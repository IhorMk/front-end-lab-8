const reverseNumber = (num) => {
    let result = 0;
    let numSign = Math.sign(num);
    while (Math.abs(num)) {
        result *= 10;
        result += Math.abs(num) % 10;
        num = Math.trunc(Math.abs(num) / 10);
    }
    return result * numSign;
}