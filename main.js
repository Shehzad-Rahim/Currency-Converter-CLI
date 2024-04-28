#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        type: 'number',
        message: "Enter your amount"
    }
]);
let fromAmount = currency[answer.from]; // exchange rate

let toAmount = currency[answer.to]; // exchange rate

let amount = answer.amount;

let baseAmount = amount / fromAmount; // usd base currency    // 4

let convertedAmount = baseAmount * toAmount;

convertedAmount = Math.floor(convertedAmount);

console.log(`You have converted ${amount} ${answer.from} into ${answer.to} `);

console.log('Your Converted amount is', convertedAmount);
