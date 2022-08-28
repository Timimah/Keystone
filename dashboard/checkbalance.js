var balance = 1000
parseFloat(balance)
function checkBalance(){
    var userDisp = disp.value
    disp.innerHTML = "<h1>Your balance is $" + balance + "</h1>"
    disp.value =""
}
function transfer(){
    var amountEntered = amountentered.value
    if(amountEntered>balance){
        // alert("Can't perform this operation")
        disp.innerHTML ="<h1> Can't perform this operation</h1>"
    }else if(amountEntered==""){
        // alert("Enter an amount")
        disp.innerHTML ="<h1> Enter a valid amount</h1>"
    }else if(amountEntered==0){
        // alert("Enter a valid amount")
        disp.innerHTML ="<h1>Enter a valid amount</h1>"
    }else if (amountEntered<0){
        // alert("Enter a valid amount")
        disp.innerHTML ="<h1>Enter a valid amount</h1>"
    }
    else {
        balance = balance - amountEntered
    disp.innerHTML = "<h1>Your transfer of $" +amountEntered +" is successful  and your new balance is" + " $" +balance+ "</h1>"
    // alert(`Your transfer of $${amountEntered} is successful and your new balance is $${balance} `)
    }
}
function deposit(){
var amountEntered = amountentered.value
if (amountEntered==0){
    disp.innerHTML ="<h1> Can't perform this operation</h1>"
}else if (amountEntered=="") {
    disp.innerHTML ="<h1> Can't perform this operation</h1>"
}else if (amountEntered<0){
    disp.innerHTML ="<h1> Can't perform this operation</h1>"
}else {
    balance= balance+amountEntered
    disp.innerHTML =`<h1>Your deposit of $${amountEntered} is successful and your new balance is $${balance}</h1>`
}
}