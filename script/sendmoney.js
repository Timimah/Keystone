let _amount = document.getElementById("amount")
let select_bank = document.getElementById("select-bank")
let selected_value = select_bank.options[select_bank.selectedIndex].text
let acct_number = document.getElementById("acct-number")
let _remark = document.getElementById("remark")
let balance = 1000

sendMoney = ()=>{
    _remark = document.getElementById("remark")
    if(acct_number.value == "" || _amount.value == "" || _remark.value == ""){
        acct_number.placeholder += " required"
        _amount.placeholder += " required"
        _remark.placeholder += " required"
    }
    if(_amount.value <= 0 || _amount.value > balance){
        _amount.value = ""
        _amount.placeholder = "Enter a valid amount"
    }
    else if(_amount.value < 50){
        // alert("Amount should not be less than 50")
        _amount.value = ""
        _amount.placeholder = "The minimum amount is 50"
    }
    else if(!(acct_number.value == "" || _amount.value == "" || _remark.value == "")){
        disp_message.innerHTML = `<h3>Your have successfully transfered $ ${_amount.value} to ${acct_number.value}</h3>`
    }
    
    
    console.log(_amount.value)
    console.log(selected_value)
    console.log(acct_number.value)
    console.log(_remark.value)
}