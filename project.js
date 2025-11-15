// 1. Deposit money slot machine
// 2.Determine number of lines on bet
// 3.Collect bet anmmount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const promt = require("prompt-sync")();

const deposit = () => {
     while (true){
     const depositAmount = promt("Enter a deposit amount: ");
     const numberDepositAmount = parseFloat(depositAmount);

     if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
          console.log("Invalid deposit amount, try again.");
          return deposit();
     }else{
          return numberDepositAmount;
     }
}
}

const depositAmount = deposit();
console.log("You deposited: $ " + depositAmount);


const getNumberOfLines = () => {
    while (true){
     const lines = promt("Enter a Bet on Lines ( 1 - 3 ): ");
     const numberOflines = parseFloat(lines);

     if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
          console.log("Invalid Lines, try again.");
          return getNumberOfLines();
     }else{
          return numberOflines;
     }
}
}
const numberOflines = getNumberOfLines();
console.log("You bet on " + numberOflines + " lines");

