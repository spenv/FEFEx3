"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChequingAccount = void 0;
var BankAccount_1 = require("./BankAccount");
var ChequingAccount = /** @class */ (function (_super) {
    __extends(ChequingAccount, _super);
    function ChequingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.numberOfWithdrawals = 0;
        //all caps because its a constant? i think.
        //readonly is basically the const keyword from C#
        _this.TRANSFEE = 10; // hardcoded value.
        return _this;
    }
    /**
     * Every 5th withdrawl, we incur a transaction fee. We cannot overdraw the account
     * @param amount the amount to withdraw.
     */
    ChequingAccount.prototype.withdrawalAmount = function (amount) {
        this.numberOfWithdrawals++;
        var amountToWithdrawl = amount;
        //we owe a transaction fee every 5th withdrawl.
        if (this.numberOfWithdrawals % 5 === 0) {
            amountToWithdrawl += this.TRANSFEE;
        }
        if (this.accountBalance < amountToWithdrawl) {
            this.numberOfWithdrawals--;
            throw new Error("Insufficent Funds");
        }
        this.accountBalance -= amountToWithdrawl;
    };
    /**
     * Deposit to chequing account
     * @param amount the amount to deposit.
     */
    ChequingAccount.prototype.depositAmount = function (amount) {
        this.accountBalance += amount;
    };
    /**
     * Get the current balance of chequing account
     * @returns the account balance.
     */
    ChequingAccount.prototype.getBalance = function () {
        return this.accountBalance;
    };
    /**
     * Print chequing account balance
     * @returns prints the account balance with currency formatting
     */
    ChequingAccount.prototype.printBalance = function () {
        var formattedBalance = new Intl.NumberFormat("en-CA", {
            currency: "EUR",
            style: "currency",
        }).format(this.accountBalance);
        return "the chequing account balance is ".concat(formattedBalance);
    };
    return ChequingAccount;
}(BankAccount_1.BankAccount));
exports.ChequingAccount = ChequingAccount;
