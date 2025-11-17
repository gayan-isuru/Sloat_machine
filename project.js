// 1. Deposit money slot machine
// 2.Determine number of lines on bet
// 3.Collect bet anmmount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const promt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
     A: 2,
     B: 4,
     C: 6,
     D: 8
};
const SYMBOLS_VALUES = {
     A: 5,
     B: 4,
     C: 3,
     D: 2
};




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

//console.log("You deposited: $ " + depositAmount);


const getNumberOfLines = () => {
     while (true){
          const lines = promt("Enter the number of line of Bet ( 1 - 3 ): ");
          const numberOflines = parseFloat(lines);

          if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
               console.log("Invalid Lines, try again.");
               return getNumberOfLines();
          }else{
               return numberOflines;
          }
     }
}
const getBet = (balance,lines) => {
     while (true){
          const bet = promt("Enter the total Bet?: ");
          const numberBet = parseFloat(bet);

          if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
               console.log("Invalid Bet, try again.");
               
          }else{
               return numberBet;
          }
     }
}
//console.log("You bet on " + numberOflines + " lines");


const spin = () => {
     const symbols = [];
     for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
          for (let i = 0; i < count; i++) {
               symbols.push(symbol);
          }
     }

    // console.log(symbols);

     const reels = [[],[],[]];
     for (let i = 0; i < COLS; i++) {
          //reels.push([]);
          const reelSymbols = [...symbols];
          for (let j = 0; j < ROWS; j++) {
               const randomIndex = Math.floor(Math.random() * reelSymbols.length);
               const selectedSymbol = reelSymbols[randomIndex];
               reels[i].push(selectedSymbol);
               reelSymbols.splice(randomIndex, 1);
          }

     }    
     return reels;
};

const reels = spin();
console.log(reels);
let balance = deposit();
const numberOflines = getNumberOfLines();
const numberOfBet = getBet(balance,numberOflines);