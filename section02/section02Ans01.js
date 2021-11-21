"use strict";
console.log("Solution 1 for Section 2 goes here.");
class Account {
    // constructor. 
    constructor(id, name, balance) {
        // function to check if the amount is positive.
        this.positiveAmount = (amount) => {
            let isPositive = amount > 0;
            if (!isPositive) {
                console.log("amount must be positive.");
                return false;
            }
            return true;
        };
        // function to check if the amount is positive and within the balance.
        this.allowWithdraw = (amount) => {
            if (!this.positiveAmount(amount)) {
                return false;
            }
            let withdrawAllowed = this.balance - amount >= 0;
            if (!withdrawAllowed) {
                console.log("insuffient funds.");
                return false;
            }
            return true;
        };
        // function to set deposit.
        this.deposit = (amount) => {
            let newBalance = 0;
            if (this.positiveAmount(amount)) {
                newBalance = this.balance + amount;
            }
            this.balance = newBalance;
            console.log(`Amount of deposit = ${amount} is added in the account of ${this.name}`);
            return this.balance;
        };
        // function to set withdrawal.
        this.withdraw = (amount) => {
            let newBalance = 0;
            if (this.allowWithdraw(amount)) {
                newBalance = this.balance - amount;
            }
            this.balance = newBalance;
            console.log(`Amount of withdrawal = ${amount} is deducted from the account of ${this.name}`);
            return this.balance;
        };
        // function to display statement.
        this.displayAccountStatement = () => {
            console.log(`${this.name}'s account. Balance: ${this.balance}`);
        };
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
// Demo the instances of the Account class.
const accountA = new Account(1, "Hafidz", 3500);
const accountB = new Account(2, "Inmaculada", 100);
const accountC = new Account(3, "Lauren", 0);
console.log(`${accountA.name}'s current balance = ${accountA.balance}'`);
console.log(`${accountB.name}'s current balance = ${accountB.balance}'`);
console.log(`${accountC.name}'s current balance = ${accountC.balance}'`);
accountA.deposit(500);
accountA.displayAccountStatement();
accountA.withdraw(1000);
accountA.displayAccountStatement();
accountB.displayAccountStatement();
accountA.displayAccountStatement();
accountC.displayAccountStatement();
accountB.deposit(200);
accountB.displayAccountStatement();
