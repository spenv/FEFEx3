// this is the console app, just like we would do in C#.
import { SavingAccount } from "./SavingAccount";
import { ChequingAccount } from "./ChequingAccount";

let savingsAccount: SavingAccount = new SavingAccount(1000); // 1000 dollars
let chequingAccount: ChequingAccount = new ChequingAccount(100); // 100 dollars

console.log(savingsAccount.printBalance());
console.log(chequingAccount.printBalance());

try {
  savingsAccount.withdrawalAmount(1100);
} catch (error) {
  if (error instanceof Error) console.log(error.message);
}

try {
  savingsAccount.withdrawalAmount(100);
} catch (error) {
  if (error instanceof Error) console.log(error.message);
}

console.log(savingsAccount.printBalance());

savingsAccount.depositAmount(20);
savingsAccount.depositAmount(20);
savingsAccount.depositAmount(20);
savingsAccount.depositAmount(20);
savingsAccount.depositAmount(20); // 5th drawal i get interest

console.log(savingsAccount.printBalance());

console.log("---CHQ ACCOUNT---");

try {
  chequingAccount.withdrawalAmount(20);
  chequingAccount.withdrawalAmount(20);
  chequingAccount.withdrawalAmount(20);
  chequingAccount.withdrawalAmount(20);
  chequingAccount.depositAmount(10); //deposited to cover the transaction fee!
  chequingAccount.withdrawalAmount(20); // transaction fee of $10, this 5th one should fail!
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
console.log(chequingAccount.printBalance());
