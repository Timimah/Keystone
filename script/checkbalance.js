let balance = 1000
balance = parseFloat(balance)
disp.innerHTML = `$${balance}`
checkBalance = () =>{
    disp.innerHTML = ""
    disp.innerHTML += `</br><h3>Your current balance is $ ${balance} </h3>`
    disp.value = ``
}
transfer = () =>{
    var amountEntered = parseFloat(document.getElementById("amountentered").value)
    if(amountEntered > balance){
        disp.innerHTML = `<h3> Can't perform this operation</h3>`
    }else if(amountEntered == ""){
        disp.innerHTML = `<h3> Enter a valid amount</h3>`
    }else if(amountEntered == 0){
        disp.innerHTML = `<h3>Enter a valid amount</h3>`
    }else if (amountEntered < 0){
        disp.innerHTML = `<h3>Enter a valid amount</h3>`
    }
    else {
        balance = balance - parseFloat(amountEntered)
    disp.innerHTML = `<h3>Your transfer of $ ${amountEntered} is successful and your new balance is $ ${balance} </h3>`
    }
    document.getElementById("amountentered").value = ``
}
deposit = () =>{
var amountEntered = document.getElementById("amountentered").value
if (amountEntered == 0){
    disp.innerHTML = `<h3> Can't perform this operation</h3>`
}else if (amountEntered == "") {
    disp.innerHTML = `<h3> Can't perform this operation</h3>`
}else if (amountEntered < 0){
    disp.innerHTML = `<h3> Can't perform this operation</h3>`
}else {
    balance = balance + parseInt(amountEntered)
    disp.innerHTML = `<h3>Your deposit of $ ${amountEntered} is successful and your new balance is $ ${balance} </h3>`
}
}