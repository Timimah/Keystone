 let storedHistory 
if (localStorage.transHist){
    storedHistory = JSON.parse(localStorage.getItem("transHist"))
}
    storedHistory.map((item) => {
        if(userT_history==undefined){
            userT_history.innerHTML=""
        }else{
        userT_history.innerHTML += `${item.transactionMessage}</br> ${item.transactionMessage2}</br>`
        }
    })
    // storedHistory.map((item) => {
        // if (userT_history1==undefined){
        //     alert(userT_history1.innerHTML)
        // }else{
        // userT_history.innerHTML += `${item.transactionMessage2}</br>`
        // }
    // })
