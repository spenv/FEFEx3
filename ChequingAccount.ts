import { BankAccount } from "./BankAccount";
import { IBankAccount } from "./IBankAccount";

export class ChequingAccount extends BankAccount implements IBankAccount {
  private numberOfWithdrawals: number = 0;
  //all caps because its a constant? i think.
  //readonly is basically the const keyword from C#
  private readonly TRANSFEE: number = 10; // hardcoded value.

  constructor(initialBalance: number) {
    //this is the same as 'base' in C# 'super'
    super(initialBalance);
  }
  /**
   * Every 5th withdrawl, we incur a transaction fee. We cannot overdraw the account
   * @param amount the amount to withdraw.
   */
  withdrawalAmount(amount: number): void {
    this.numberOfWithdrawals++;
    let amountToWithdrawl: number = amount;

    //we owe a transaction fee every 5th withdrawl.
    if (this.numberOfWithdrawals % 5 === 0) {
      amountToWithdrawl += this.TRANSFEE;
    }
    if (this.accountBalance < amountToWithdrawl) {
      this.numberOfWithdrawals--;
      throw new Error("Insufficent Funds");
    }
    this.accountBalance -= amountToWithdrawl;
  }

  /**
   * Deposit to chequing account
   * @param amount the amount to deposit.
   */
  depositAmount(amount: number): void {
    this.accountBalance += amount;
  }

  /**
   * Get the current balance of chequing account
   * @returns the account balance.
   */
  getBalance(): number {
    return this.accountBalance;
  }

  /**
   * Print chequing account balance
   * @returns prints the account balance with currency formatting
   */
  printBalance(): string {
    let formattedBalance: string = new Intl.NumberFormat("en-CA", {
      currency: "EUR",
      style: "currency",
    }).format(this.accountBalance);
    return `the chequing account balance is ${formattedBalance}`;
  }
}
