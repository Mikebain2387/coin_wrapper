/*
Define Variables for Coins:
Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.
*/

const currencyValue = [.01, 0.05, .10, .25];
let coins = [12521, 1602, 4411, 9171];
const type = ['pennies', 'nickels', 'dimes', 'quarters'];
let myCoins=[];
let wrappers =[50, 40, 50, 40];
let wrapperType = ['Penny Wrappers', 'Nickel Wrappers', 'Dime Wrappers', 'Quarter Wrappers'];
let total = 0;


/*
Calculate Total Value of Coins:
Write code to calculate the total value of each type of coin in dollars.
Calculate the combined total value of all coins.
*/
let pennies = currencyValue[0] * coins[0];
//
//pennies = Math.round(pennies*100/100);

myCoins.push(pennies);
pennies = pennies.toFixed(2);
console.log('$'+ pennies + ' in ' + type[0])

let nickels = currencyValue[1] * coins[1];
//nickels = Math.round(nickels*100)/100;
myCoins.push(nickels);
nickels = nickels.toFixed(2);
console.log('$'+ nickels + ' in ' + type[1])

let dimes = currencyValue[2] * coins[2];
//dimes = Math.round(dimes*100)/100;
myCoins.push(dimes);
dimes = dimes.toFixed(2);
console.log('$'+ dimes + ' in ' + type[2])

let quarters = currencyValue[3] * coins[3];
//quarters = Math.round(quarters*100)/100;
myCoins.push(quarters);
quarters = quarters.toFixed(2);
console.log('$'+ quarters + ' in ' + type[3])

//console.log(myCoins)


/*
Sort Coins into Wrappers:
Use the standard capacity for each type of coin wrapper:
Pennies: 50 coins per wrapper
Nickels: 40 coins per wrapper
Dimes: 50 coins per wrapper
Quarters: 40 coins per wrapper
Calculate the number of wrappers needed for each type of coin.
Calculate the remaining coins that do not fill a wrapper completely.
*/

let penniesWrapper = Math.floor(coins[0]/wrappers[0]);
console.log(penniesWrapper +' '+ wrapperType[0] )
let penniesRemain = coins[0] % wrappers[0];
console.log(penniesRemain + ' pennies left over')



let NickelWrapper = Math.floor(coins[1]/wrappers[1]);
console.log(NickelWrapper +' '+ wrapperType[1] )
let nickelRemain = coins[1] % wrappers[1];
console.log(nickelRemain + ' nickels left over')

let dimeWrapper = Math.floor(coins[2]/wrappers[2])
console.log(dimeWrapper +' '+ wrapperType[2] )
let dimesRemain = coins[2] % wrappers[2];
console.log(dimesRemain + ' dimes left over')

let quarterWrapper = Math.floor(coins[3]/wrappers[3]);
console.log(quarterWrapper +' '+ wrapperType[3] )
let quarterRemain = coins[3] % wrappers[3];
console.log(quarterRemain + ' quarters left over')


/*
Output Results:
Use console.log to display the number of wrappers needed for each type of coin.
Use console.log to display the total amount in dollars.
*/


for(let i=0; i<myCoins.length; i++){
 total += myCoins[i];
}
total = total.toFixed(2);

console.log('$' + total + ' in total')





const challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

//? Give me the total amount of each coin;
// ex. dime = 234;
let rate =[.01, .05, .10, .25];
let coinCount =[];
let currencyTotal=[0, 0, 0, 0,];
let target = ['penny', 'nickel', 'dime', 'quarter']; 
let totalPenny = 0;
let totalDimes = 0;
let totalNickels = 0;
let totalQuarters = 0;
let totals = 0;


for (let i = 0; i < challengeData.length;i++){
 if (challengeData[i]==='penny'){
  totalPenny++
  
 }
 
 else if (challengeData[i]=== 'dimes'){
  totalDimes++
 }
 else if (challengeData[i]=== 'quarters'){
  totalQuarters++
 }
 else if (challengeData[i]=== 'nickels'){
  totalNickels++
 }
}
 
console.log(totalPenny)
console.log(totalNickels)
console.log(totalDimes)
console.log(totalQuarters)
 
 /*if(target[i]){
coinCount [i]++;
coinCount.push(target[i]);
 }
}
console.log()
*/

/*
for(let i = 0; i < challengeData.length;i++){
const item = challengeData[i];
 if (coinCount[item]){
  coinCount[item]++;
 }
 else{
  coinCount[item]= 1;
 }
}

 const result =[];
 for(const item in coinCount){
  result.push({item: item, coinCount: coinCount[item]});
 }
console.log(result);
*/


 //? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20


//for (let i = 0; i < type.length; i++) {
 //currencyTotal[i] = rate[i] * coinCount[i];

//console.log(`${coinCount[i]} ${type[i]} = $${currencyTotal[i]}`);
//}



//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)

//let totalValueCombined = 0;
//for (let i = 0; i < currencyTotal.length; i++) {
// totalValueCombined += currencyTotal[i];
//}