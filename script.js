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