let arr = [];
let large = -1;

for (let i=0; i<5; i++) {
    let x = parseInt(prompt(""));
    arr.push(x);
}

for (let i=0; i<5; i++) {
    if (arr[i] > large) {
        large = arr[i];
    }
}
document.write("Largest number is : ", large);