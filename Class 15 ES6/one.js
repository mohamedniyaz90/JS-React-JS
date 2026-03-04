let prod_Price = [98,198,298,398]

//create new array by adding +1 [99,199,299,399]

let new_price = [] //empty array

for(let price of prod_Price){
    new_price.push(price+1)
}
console.log(prod_Price);
console.log(new_price);