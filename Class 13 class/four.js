/*class Account{
    acc_Id;
    acc_Bal = 0;
    min_Bal = 500;

    deposit_amount(){}
    withdrawl_amount(){}
    get_Bal(){}
}
let a1 = new Account()
let a2 = new Account()
let a3 = new Account()

console.log(a1);
console.log(a2);
console.log(a3);

class Account{
    acc_Id;
    acc_Bal=0;
    min_Bal=500;
    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl_Amount(){}
    get_Bal(){}
}
let a1=new Account()
a1.deposit_Amount(500)
a1.deposit_Amount(50)
let a2=new Account()
a2.deposit_Amount(1000)
a2.deposit_Amount(10)

console.log(a1)//Account { acc_Id: undefined, acc_Bal: 0, min_Bal: 500 }
console.log(a2)*/

class test{
    constructor(){
        console.log("Special Method");
    }
    m1(){
        console.log("Test class m1 method");
    }
    m1(){
        console.log("")
    }
}