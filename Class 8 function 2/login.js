function login(name, password){
    if(name==="Rahul" && password===123){
        return true
    }
    return false
}

let status1 =login("Rahul", 123)
let status2 =login("Rahul",145)

console.log(status1)
console.log(status2)