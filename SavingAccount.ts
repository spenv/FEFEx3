import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";

export class SavingAccount extends BankAccount implements IBankAccount {
  private numberOfDeposits: number = 0;
  private readonly INTEREST: number = 0.05;

  /**
   * Construct a SavingsAccount providing the initial balance
   * @param initialBalance the initial balance amount
   */
  constructor(initialBalance: number) {
    //this is the same as 'base' in C# 'super'
    super(initialBalance);
  }

  /**
   * Withdrawl funds from savings account. Cannot overdraw from the account.
   * not allow a negative balance basically in other words...
   * @param amount the amount to withdrawl
   */
  withdrawalAmount(amount: number): void {
    if (amount > this.accountBalance) {
      throw new Error("Insufficent Funds.");
    } else {
      this.accountBalance -= amount;
    }
  }
  /**
   * Every 5 deposits, we incur interest at the defined rate, which is 0.05 (5%)
   * @param amount this is the amount to deposit!
   */
  depositAmount(amount: number): void {
    this.numberOfDeposits++;
    //every 5th depo we need to put our interest calculation there.
    if (this.numberOfDeposits % 5 == 0) {
      let tempNewBalance: number = this.accountBalance + amount;
      this.accountBalance = tempNewBalance += tempNewBalance * this.INTEREST;
    } else {
      this.accountBalance += amount;
    }
  }

  /**
   * Read the cyrrent account balance
   * @returns the balance of the account
   */
  getBalance(): number {
    //return the account balance
    return this.accountBalance;
  }
  /**
   * Prints the account balance for savings
   * @returns the printed balance formatted for currency.
   */
  printBalance(): string {
    let formattedValue = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "EUR",
    }).format(this.accountBalance);
    return `Your savings account balance is now: ${formattedValue}`;
  }
}
