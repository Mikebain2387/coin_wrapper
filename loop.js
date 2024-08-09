let currencyValue = [.01, 0.05, .10, .25];
let coins = [12521, 1602, 4411, 9171];
let type = ['pennies', 'nickels', 'dimes', 'quarters'];
//let myCoins=[];
let wrappers =[50, 40, 50, 40];
let wrapperType = ['Penny Wrappers', 'Nickel Wrappers', 'Dime Wrappers', 'Quarter Wrappers'];
let total = [0 0 0 0 ];




for (let i = 0; i < type.length; i++) {
    total[i] = currencyValue[i] * coins[i];

console.log(`${coins[i]} ${type[i]} = $${total[i].toFixed(2)}`
);
}
let totalValue = 0;
for (let i = 0; i < total.length; i++){
 totalValue += total [i];
}
  
for( let i =0; type.length; i++){

 let wrapper = Math.floor(coins[i]/wrappers[i]);
 console.log(wrapper[i] +' '+ wrapperType[i] );
}










/*
 let nickelRemain = coins[1] % wrappers[1];
 console.log(nickelRemain + ' nickels left over')

/*
//VARIABLES
let coin_arr = ["Pennies", "Nickles", "Dimes", "Quarters"];
let coinVal_arr = [0.01, 0.05, 0.1, 0.25];
let coinAmount_arr = [125, 346, 157, 62];
let wrapper_arr = [50, 40, 50, 40];
let totalVal_arr = [0, 0, 0, 0];


//Calculate total value combined of coins
//todo adds up elements in totalVal_arr to get totalValueCombined 
let totalValueCombined = 0;
for (let i = 0; i < totalVal_arr.length; i++) {
 totalValueCombined += totalVal_arr[i];
}

//Sort Display # amount of wrappers needed

for (let i = 0; i < coin_arr.length; i++) {
 // divides coin amount & wrapper capacity Math.ceil rounds up
 let wrappersNeeded = Math.ceil(coinAmount_arr[i] / wrapper_arr[i]); //stores result
 console.log(`Wrappers needed for ${coin_arr[i]}: ${wrappersNeeded}`); //display
}

//Display to console total amount of coins in dollars
console.log(`Total value combined of coins: $${totalValueCombined.toFixed(2)}`);

*/