export abstract class BankAccount {
  protected accountBalance: number = 0;

  constructor(initialBalance: number) {
    this.accountBalance = initialBalance;
  }
}
