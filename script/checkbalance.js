let date = new Date()
let currentTime = date.toLocaleString()
let storeHistory = []
let message 
if (localStorage.transHist){
    storeHistory =JSON.parse(localStorage.getItem("transHist"))
}
let balance = 1000
let updatedUserBalance 
balance = parseFloat(balance)
// disp.innerHTML = `$${balance}`
checkBalance = () =>{
    disp.innerHTML = ""
    disp.innerHTML += `</br><h3>Your current balance is $ ${balance} </h3>`
    disp.value = ""
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
    tHistory.innerHTML="" 
    tHistory.innerText = `You have deposited $${amountEntered}  on ${currentTime} `
    let deposit_m = {
        transactionMessage: `Your deposit of $${amountEntered} on ${currentTime} was successful`
    }
    storeHistory.push(deposit_m)
    localStorage.setItem("transHist",JSON.stringify(storeHistory))
}
}