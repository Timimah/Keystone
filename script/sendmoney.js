if(localStorage.user_profile){
    signupProfile = JSON.parse(localStorage.getItem("user_profile"))
  }
  if(localStorage.signedin_user){
    signedInUser = JSON.parse(localStorage.getItem("signedin_user"))
}
let amountEntered =""
let date2 = new Date()
let currentTime2 = date2.toLocaleString()
transferMessage.style.display="none"
pinvalidation.style.display="none"
function sendMoney(){
    amountEntered=amount.value
    userAcctNo=acctNumber.value
    userRemark=remark.value
    signedInUser.map((item) =>{
        // updatedUserBalance = item.userBalance - parseFloat(amountEntered)
         item.userBalance = updatedUserBalance
        localStorage.setItem("signedin_user", JSON.stringify(signedInUser))
    })
    signupProfile.map((item) =>{
        userAcctNo2 = item.accountNumber
         item.accountNumber = userAcctNo2
        localStorage.setItem("user_profile", JSON.stringify( signupProfile))
    })
    if (amountEntered==0){
        amountEntered=""
        userAcctNo=""
        userRemark=""
        alert("Enter a valid amount")
    }else if (amountEntered==""){
        amountEntered=""
        userAcctNo=""
        userRemark=""
        alert("Enter a valid amount")
    }else if (amountEntered>updatedUserBalance){
        amountEntered=""
        userAcctNo=""
        userRemark=""
        alert("insufficient balance")
    }else if (userAcctNo!=userAcctNo2){
        alert("Account number not found")
    }else{
        signedInUser.map((item) =>{
            updatedUserBalance = item.userBalance - parseFloat(amountEntered)
               updatedUserBalance = item.userBalance
            localStorage.setItem("signedin_user", JSON.stringify(signedInUser))
        })
        signupProfile.map((item) =>{
            userAcctNo2 = item.accountNumber
             item.accountNumber = userAcctNo2
            //  localStorage.setItem("user_profile", JSON.stringify( signupProfile))
        })
        transfer_money.style.display="none"
        pinvalidation.style.display="block"
    // console.log(amountEntered,userAcctNo,userRemark)
    // alert(`You have successfully transferred $${amountEntered} to ${userAcctNo} on ${currentTime2}`)
    disp_message.innerHTML =`<h3>You have successfully transferred $${amountEntered} to ${userAcctNo} on ${currentTime2}</h3><br><h3>Remark: ${userRemark}</h3>`
        amountEntered=""
        userAcctNo=""
        userRemark=""
    }
}
function closeMessage(){
    transfer_money.style.display="block"
    transferMessage.style.display="none"
    pinvalidation.style.display="none"
}
function enterPin(){
    pinEntered=pinEntered.value
    pinvalidation.style.display="block"
    transfer_money.style.display="none"
    signedInUser.map((item) =>{
        updatedUserBalance = item.userBalance
        userPin = item.profilePin
    })
    if (pinEntered!=userPin){
        alert("incorrect pin")
    }else if (pinEntered==0){
        alert("Enter a valid pin")
    }else if (pinEntered==""){
        alert("Enter a valid pin")
    }else{
        pinvalidation.style.display="none"
        transferMessage.style.display="block"
    }
}