let n = parseInt(prompt("висота піраміди:"));
let space = "   ";
let block = "[~]";
let str = "";
if ((n <= 0) || (n > 20) || isNaN(n)) {
    console.error("Incorrect data");
} else {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n - i; j++) {
            str += space;
        }
        for (let k = 1; k <= 2 * i + 1; k++) {
            str += block;
        }
        str += "\n";
    }
}
console.log(str);