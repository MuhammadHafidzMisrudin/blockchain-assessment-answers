console.log("Solution 1 and 2 for Section 2 goes here.");

// base class.
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
      console.log("The amount must be positive.");
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
      console.log("Insuffient funds.");
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
    console.log(`The amount of deposit = ${amount} is added in the account of ${this.name}`);
    return this.balance;
  };

  // function to set withdrawal.
  withdraw = (amount: number): number => {
    let newBalance: number = 0;
    if (this.allowWithdraw(amount)) {
      newBalance = this.balance - amount;
    }
    this.balance = newBalance;
    console.log(`The amount of withdrawal = ${amount} is deducted from the account of ${this.name}`);
    return this.balance;
  };

  // function to display statement.
  displayAccountStatement = () => {
    console.log(`${this.name}'s account. Balance: ${this.balance}`);
  };
}

// derived class.
class DevAccount extends Account {
    // initialise private fields.
    private _devAccountBalance: number = 0;

    // constructor.
    constructor(id: number, name: string, balance: number) {
        super(id, name, balance);
    }

    // getter function to get the balance.
    public get accountBalance() : number {
        return this._devAccountBalance;
    }

    // setter function to set the balance.
    public set accountBalance(val: number) {
        if (!this.positiveAmount(val)) {
            throw new Error('The account balance is negative invalid. Insufficient funds.');
        }
        this._devAccountBalance = val;
    }

    // transfer function to transfer amount to other account.
    transfer = (amount: number, account: Account): void => {
        let devAccountNewBalance: number = 0;
        if (this.withdraw(amount) > 0 && account.deposit(amount) > 0) {
            devAccountNewBalance = this.balance;
            this.accountBalance = devAccountNewBalance;
        }
        console.log(`Transfer = ${amount} has been moved from ${this.name}'s account to ${account.name}'s account`);
    }
    
    // function to display statement.
    displayAccountStatement = () => {
        // super.displayAccountStatement();
        console.log(`${this.name}'s account. Balance: ${this.accountBalance}`);
    }
}

// demo the instances of the Account class.
const accountA = new Account(1, "Hafidz", 3500);
const accountB = new Account(2, "Inmaculada", 100);
const accountC = new Account(3, "Lauren", 0);

console.log(`${accountA.name}'s current balance = ${accountA.balance}`);
console.log(`${accountB.name}'s current balance = ${accountB.balance}`);
console.log(`${accountC.name}'s current balance = ${accountC.balance}`);

accountA.deposit(500);
accountA.displayAccountStatement();
accountA.withdraw(1000);
accountA.displayAccountStatement();

accountB.displayAccountStatement();
accountC.displayAccountStatement();

accountB.deposit(200);
accountB.displayAccountStatement();

// demo DevAccount instance.
const devAccountA = new DevAccount(4, "Mia", 7000);

// current balance for dev account's.
devAccountA.accountBalance = 7000;
devAccountA.displayAccountStatement();

// dev account transfer to other account.
devAccountA.transfer(500, accountC);

// current balances for both accounts.
devAccountA.displayAccountStatement();
accountC.displayAccountStatement();