function evenInArray(arr) {
    let evenNum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNum.push(arr[i]);
        }
    }
    return evenNum;
}

let size = 5; 
let numbers = [];


for (let i = 0; i < size; i++) {
    let num = parseInt(prompt()); 
    numbers.push(num); 
}

let evenNumbers = evenInArray(numbers);


document.write("Even numbers is: ");
for (let i = 0; i < evenNumbers.length; i++) {
    document.write(evenNumbers[i] + " "); 
}