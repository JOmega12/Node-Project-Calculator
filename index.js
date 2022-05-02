let rs = require('readline-sync');

//ask user what operation: /, *, -, + -- done
//if user enters invalid, prints invalid then restarts program --done
//after valid operation, enter first number-- done
//user enters numbers, if not a number print not a number and reask question-- done
//first get the numbers then push it into an array then use an operator for them --done
//after valid number ask for second number. perform same error as before --done
//create a function to perform a proper math operation and print the result --done

//create a function that only does one functionality 
let numbers = [];
let prompt;
let num1;
let num2;

function firstQuestion() {
   prompt = rs.question('What operation do you want to use? +, -, *, or /? ');
   }

firstQuestion();


function twoInput() {
   num1 = rs.questionInt('Please enter the first number ');
   num2 = rs.questionInt('Please enter the second number ');

   //this adds the numbers into an array of variable "numbers"
   // numbers.push(num1);
   // numbers.push(num2);
}

// this is to calculate the numbers
/* function calculateNum() {
      if (prompt === '+') {
         let totalSum = 0;
         numbers.forEach(number => {
            return totalSum += number;
         });
         console.log('The result is ' + totalSum)
      } else if (prompt === '-') {
         let totalSubtract = numbers.reduce((a, b) => {
            return a - b;
         })
         console.log('The result is ' + totalSubtract);
      } else if (prompt === '*') {
         let totalMultiply = numbers.reduce((a, b) => {
            return a * b;
         }, 1)
         console.log('The result is ' + totalMultiply);
      } else if (prompt === '/') {
         let totalDivide = numbers.reduce((a, b) => {
            return a / b;
         })
         console.log('The result is ' + totalDivide);
      }
   } */
   function calculateNum(a, b) {
      if (prompt === '+') {
         console.log('The result is ' + (a + b))
      } else if (prompt === '-') {
         console.log('The result is ' + (a - b));
      } else if (prompt === '*') {
         console.log('The result is ' + (a * b));
      } else if (prompt === '/') {
         console.log('The result is ' + (a / b));
      }
   } 

 //trying to get the operation from user  
if (prompt === '+' || prompt === '-' || prompt === '*' || prompt === '/') {
   twoInput();
   calculateNum(num1, num2);
} else {
   console.log('You need an operator');
   firstQuestion();
   twoInput();
   calculateNum(num1, num2);
}
