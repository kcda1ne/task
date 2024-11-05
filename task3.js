class Account {
    #balance
    constructor(accountnumber,balance, accountholder) {
      this.accountnumber= accountnumber;
      this.#balance = balance;
      this.accountholder= accountholder;
    
    }
    checkBalance(){
      return this.#balance;
    }
    
  
    deposit(amount){
      if (amount > 0) {
        this.#balance += amount
        console.log(`${amount} was deposited`)
        
      }else{
        console.log("amount can not be negegative")
      }
    }
    _setBalance(newbalance){
      this.#balance=newbalance;
    }
  }
  
  class savingsAccount extends Account{
    static miniBalance = 200;
    static interestRate = 0.10
    constructor(accountnumber, balance, accountholder){
      super( accountnumber, balance, accountholder)
    }
    withdraw(amount){
      if (amount <= 0) {
        console.log("withdrawal amount must be positive");
        
      }else if(this.checkBalance() - amount< savingsAccount.miniBalance){
        console.log(`cannont withdraw $${amount}. savings account require a minimun balance of $${ savingsAccount.miniBalance}.`);
  
      }
      else{
        this._setBalance(this.checkBalance()- amount);
        console.log(`withdraw ${amount}. new balance: $${this.checkBalance()}`);
      }
    }
  
  
    calculateInterest() {
      let myBalance = this.checkBalance() + this.checkBalance() * savingsAccount.interestRate;
      console.log(`the savings account interets rates adds up to $${myBalance} at ${savingsAccount.interestRate*100}% yearly`);
    }
  }
  
  class checkingAccount extends Account{
    static overdraft = -500
    constructor(accountnumber, balance, accountholder){
      super( accountnumber, balance, accountholder)
    }
  
    withdraw(amount){
      if (amount <= 0) {
        console.log("withdrawal amount must be positive");
        
      }else if(this.checkBalance() - amount< checkingAccount.overdraft){
        console.log(`cannont withdraw $${amount}. savings account require a minimun balance of $${ savingsAccount.miniBalance}.`);
  
      }
      else{
        this._setBalance(this.checkBalance()- amount);
        console.log(`withdraw ${amount}. new balance: $${this.checkBalance()}`);
      }
    }
  }
  
  
  let savingsAccount1 = new savingsAccount (234562, 6000, "andrew");
  let checkingAccount1 = new checkingAccount (5463782, 40000, "karen");
  
  
  console.log("Account Balance:", savingsAccount1.checkBalance());
  savingsAccount1.deposit(3000);
  savingsAccount1.calculateInterest();
  savingsAccount1.withdraw(300);
  console.log("Account Balance:", savingsAccount1.checkBalance());
  savingsAccount1.withdraw(500);
  console.log("Account Balance:", savingsAccount1.checkBalance());
  
  console.log("Account Balance:", checkingAccount1.checkBalance());
  checkingAccount1.deposit(1000);
  checkingAccount1.withdraw(600);
  checkingAccount1.withdraw(100)
  checkingAccount1.withdraw(200);
  console.log("Account Balance:", checkingAccount1.checkBalance());