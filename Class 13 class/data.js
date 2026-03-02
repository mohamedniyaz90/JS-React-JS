class Account{
    min_Bal = 500;
    open_Account(){
        console.log('Account opened');
    }
    deposit_Amount(){
        console.log('Amount Deposited');
    }
    withdrawl_Amount(){
        console.log("Low Balance");
    }
    get_Bal(){}
    close_Account(){}
}
let a1 = new Account()
console.log(a1);
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_Bal()
a1.close_Account()