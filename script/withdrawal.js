var balance = 1000
// function withdraw(){
//     userPassword=user_password.value
//     if(amountEntered==0){
//         alert("Enter a valid amount")
//     }else if (amountEntered=="") {
//     alert("Please enter a valid amount")
//     }else if(amountEntered>balance){
//     alert("Insufficient balance")
//     }else if(amountEntered>balance){
//         alert("incorrect pin, enter correct pin")
//     }else if (userPassword==8879){
//         amountEntered=amountentered.value
//         balance=balance-amountEntered
//     alert("Success, Your withdrawal of $"+amountEntered+" is successful"+"Your new balance is $"+balance)
// }
// }
function withdraw(){
    userPassword=user_password.value
    amountEntered=amountentered.value
    balance = balance - amountEntered
    if(userPassword!=8879){
    alert("Incorrect password")
    }else if (amountEntered>balance){
        alert("Insufficient fund")
    }else if (amountEntered==0){
            alert("Enter a valid amount")
    }else if  (amountEntered==""){
        alert("Input an amount")
    }else{
        alert("Your withdrawal of $"+amountEntered +" was successful and your new balance is $"+balance)
    } 
}