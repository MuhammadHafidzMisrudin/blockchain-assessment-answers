console.log("Solution 1 for Section 2 goes here.");

class Account {
    // initialise fields.
    id: number;
    name: string;
    balance: number;

    // constructor. 
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    // function to check if the amount is positive.
    positiveAmount = (amount: number): boolean => {
        let isPositive = amount > 0;
        if (!isPositive) {
            console.log("amount must be positive.");
            return false;
        }
        return true;
    }

    // function to check if the amount is positive and within the balance.
    allowWithdraw = (amount: number): boolean => {
        if (!this.positiveAmount(amount)) {
            return false;
        }

        let withdrawAllowed = this.balance - amount >= 0;
        if (!withdrawAllowed) {
            console.log("insuffient funds.");
            return false;
        }
        return true; 
    }

    // function to set deposit.
    deposit = (amount: number): number => {
        let newBalance: number = 0;
        if (this.positiveAmount(amount)) {
            newBalance = this.balance + amount;
        }
        this.balance = newBalance
        console.log(`amount of deposit = ${amount}`);
        return this.balance;
    }

    withdraw = (amount: number): number => {
        let newBalance: number = 0;
        if (this.allowWithdraw(amount)) {
            newBalance = this.balance - amount;
        }
        this.balance = newBalance;
        console.log(`amount of withdrawal = ${amount}`);
        return this.balance;
    }

    displayAccountStatement = () => {
        console.log(`${this.name}'s account. Balance: ${this.balance}`);
    }
}

// Demo the instances of the Account class.
const accountA = new Account(1, "Hafidz", 3500);
console.log(`${accountA.name}'s current balance = ${accountA.balance}'`)
accountA.deposit(500);
accountA.displayAccountStatement();
accountA.withdraw(1000);
accountA.displayAccountStatement();