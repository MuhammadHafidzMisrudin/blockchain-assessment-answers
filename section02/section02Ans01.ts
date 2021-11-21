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
  };

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
  };

  // function to set deposit.
  deposit = (amount: number): number => {
    let newBalance: number = 0;
    if (this.positiveAmount(amount)) {
      newBalance = this.balance + amount;
    }
    this.balance = newBalance;
    console.log(
      `Amount of deposit = ${amount} is added in the account of ${this.name}`
    );
    return this.balance;
  };

  // function to set withdrawal.
  withdraw = (amount: number): number => {
    let newBalance: number = 0;
    if (this.allowWithdraw(amount)) {
      newBalance = this.balance - amount;
    }
    this.balance = newBalance;
    console.log(
      `Amount of withdrawal = ${amount} is deducted from the account of ${this.name}`
    );
    return this.balance;
  };

  // function to display statement.
  displayAccountStatement = () => {
    console.log(`${this.name}'s account. Balance: ${this.balance}`);
  };
}

class DevAccount extends Account {
    
    constructor(id: number, name: string, balance: number) {
        super(id, name, balance);
    }

    displayAccountStatement = () => {
        // super.displayAccountStatement();
        console.log(`${this.name}'s account. Balance: ${this.balance}`);
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

const devAccountA = new DevAccount(4, "Mia", 900);
devAccountA.displayAccountStatement();