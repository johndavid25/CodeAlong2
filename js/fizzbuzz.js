document.getElementById("fizzButton").addEventListener("click", function () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;

    runTheNumber(num1, num2);
});

function runTheNumber (num1, num2) {
    for (let loop = num1; loop <= num2; loop++) {
        document.getElementById("results").innerText += loop;
    }
}

//The premise of fizzbuzz is to take 2 user inputs and fina all of their mulitples between 1 and 100 
//If the loop count is multiple of input 1 it is a fizz case 
//If the loop count is multiple of input 2 it is a buzz case 
//If the loop count is a multiple of both input it is a fizzbuzz case 
//The order you test is MIGHT be very important 

