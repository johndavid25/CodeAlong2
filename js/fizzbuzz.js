document.getElementById("fizzButton").addEventListener("click", function () {
    fbSolution();
});

function fbSolution () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let num3 = [];
    for (let loop = 1; loop <= 100; loop++) {
        if (loop % num1 == 0 && loop % num2 == 0 ) {
            num3.push(" FizzBuzz");
        }else if (loop % num1 == 0) {
            num3.push(" Fizz");
        }else if (loop % num2 == 0 ) {
            num3.push(" Buzz");
        }else {
            num3.push(" " + loop);
        }
         document.getElementById("results").innerText = num3.join(",");
    }
       
}