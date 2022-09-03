 let storeHistory = []
//  let signedInUser = []
 let signupProfile =[]
//  let user_updatedBalance = []
let da = new Date()
let cuTime = da.toLocaleString()
let message2
let updatedUserBalance
let pinNumber
if (localStorage.transHist){
    storeHistory=JSON.parse(localStorage.getItem("transHist"))
}
if(localStorage.signedin_user){
    signedInUser = JSON.parse(localStorage.getItem("signedin_user"))
}
// balance.innerText = `Your Current balance is $${signedInUser.userBalance}`
// signedInUser.map((item) =>{
//         updatedUserBalance = item.userBalance
//         balance.innerText = `Your Current balance is $${item.userBalance}`
//     })
function withdraw(){
    
    signedInUser.map((item) =>{
        updatedUserBalance = item.userBalance
        userPin = item.profilePin
    })
    userPassword = user_password.value
    amountEntered=amountentered.value
    //item.userBalance = updatedUserBalance
    balance = updatedUserBalance
    if(userPassword!=userPin){
    alert("Incorrect Pin")
    }else if (amountEntered >updatedUserBalance){
        // alert()
        alert("Insufficient fund")
    }else if (amountEntered==0){
            alert("Enter a valid amount")
    }else if  (amountEntered==""){
        alert("Input an amount")
    }else{
        signedInUser.map((item) =>{
        updatedUserBalance = item.userBalance - parseFloat(amountEntered)
        item.userBalance = updatedUserBalance
        localStorage.setItem("signedin_user", JSON.stringify(signedInUser))
        withdrawMessage.innerHTML =`Your withdrawal of $${amountEntered} on ${cuTime} is successful and your new balance is $${item.userBalance}`
        balance.innerText = `Your Current balance is $${item.userBalance}`
        })
        let withdraw_m= {
            transactionMessage2: `You withdraw $${amountEntered} on ${cuTime}`
        }
        storeHistory.push(withdraw_m)
        localStorage.setItem("transHist",JSON.stringify(storeHistory))
    }    
}
