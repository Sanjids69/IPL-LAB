function sum(a, b) {
    return x+y;
}
function sub(a, b) {
    return x-y;
}
function mul(a, b) {
    return a*b;
}
function div(a, b) {
    return a/b;
}
let a = parseInt(prompt("Take first number as input: "));
let b = parseInt(prompt("Take second number as input: "));
let char = parseInt(prompt("Which operation you want(+, -, *, /): "));
if (char = "+") {
    document.write("Summation is : ", sum(x, y));
}
else if (char = "-") {
    document.write("Substraction is : ", sub(x, y));
}
else if (char = "*") {
    document.write("Multiplication is : ", mul(x, y));
}
else {
    document.write("Divisiob is : ", div(x, y));
}