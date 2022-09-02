let date = new Date()
let currentTime = date.toLocaleString()
// let storeHistory = []
let message 
if (localStorage.transHist){
    storeHistory =JSON.parse(localStorage.getItem("transHist"))
}
if(localStorage.signedin_user){
    signedInUser = JSON.parse(localStorage.getItem("signedin_user"))
}
let user_updatedBalance = []
// localStorage.setItem("user_balance",JSON.stringify(updatedBalance))
checkBalance = () =>{
    disp.innerHTML = ""
    signedInUser.map((item) =>{
        disp.innerHTML += `</br><h3>Your current balance is $${item.userBalance} </h3>`
    })
}
deposit = () =>{
amountEntered = document.getElementById("amountentered").value
if (amountEntered == 0){
    disp.innerHTML = `<h3> Can't perform this operation</h3>`
}else if (amountEntered == "") {
    disp.innerHTML = `<h3> Can't perform this operation</h3>`
}else if (amountEntered < 0){
    disp.innerHTML = `<h3> Can't perform this operation</h3>`
}else {
    signedInUser.map((item) =>{
        updatedUserBalance = item.userBalance + parseFloat(amountEntered)
         item.userBalance = updatedUserBalance
        localStorage.setItem("signedin_user", JSON.stringify(signedInUser))
        disp.innerHTML = `<h3>Your deposit of $ ${amountEntered} is successful and your new balance is $${item.userBalance} </h3>`
    })
    
    tHistory.innerHTML=""
    tHistory.innerText = `You have deposited $${amountEntered}  on ${currentTime} `
    let deposit_m = {
        transactionMessage: `Your deposit of $${amountEntered} on ${currentTime} was successful`
    }
    storeHistory.push(deposit_m)
    localStorage.setItem("transHist",JSON.stringify(storeHistory))
}
}