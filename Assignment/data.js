function changeColor(){
    document.getElementById('btn').style.backgroundColor='yellow'
    
}

function changeColor2(){
    document.getElementById('btn2').style.backgroundColor='grey'
}

function changeColor3(){
    document.getElementById('btn3').style.backgroundColor='red'
}

function changeColor4(){
    document.getElementById('ip1').style.backgroundColor='orange'
}

function changeCase(){
    let name = document.getElementById('ip2').value;
    alert(typeof name)
    //document.getElementById('ip2').value="Rajini"
    document.getElementById('ip2').value=name.toUpperCase()
}