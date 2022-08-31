let date = new Date()
let currentTime = date.toLocaleString()
let storedHistory 
if (localStorage.transHist){
    storedHistory = JSON.parse(localStorage.getItem("transHist"))
    // historyMessage.innerHTML = `<p> ${store_History}</p>`
    storedHistory.map((item) => {
        historyMessage.innerHTML += `<p> ${item.transactionMessage} ${currentTime}</p>`
        historyMessage.innerHTML += `<p> ${item.transactionMessage2} ${currentTime}</p>`
    })
    // storedHistory.map((item) => {
    //     
    // })
}
