let storeHistory = []
let message2
if (localStorage.transHist){
    storeHistory=JSON.parse(localStorage.getItem("transHist"))
}
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
    if(userPassword!=8879){
    alert("Incorrect password")
    }else if (amountEntered>balance){
        alert("Insufficient fund")
    }else if (amountEntered==0){
            alert("Enter a valid amount")
    }else if  (amountEntered==""){
        alert("Input an amount")
    }else{
        balance = balance - amountEntered
        tTransfer.innerText = `Your withdrawal of $${amountEntered} was successful and your new balance is $${balance}`
        // tTransfer=""
        // tTransfer.innerText = `You have transferred $${amountEntered}  on `
        message2 = tTransfer.innerText
        console.log(message2)
        let newTransaction2 = {
            transactionMessage2: message2
        }
        storeHistory.push(newTransaction2)
    console.log(newTransaction2)
    console.log(storeHistory);
    localStorage.setItem("transHist",JSON.stringify(storeHistory))
    } 
}
// tHistory.innerText = `You have deposited $${amountEntered}  on `
//     message = tHistory.innerText
//     console.log(message)
//     let newTransaction = {
//         transactionMessage: message
//     }
//     storeHistory.push(newTransaction)
//     console.log(newTransaction)
//     console.log(storeHistory);
//     localStorage.setItem("transHist",JSON.stringify(storeHistory))
// }
// }