let _amount = document.getElementById("amount")
let select_bank = document.getElementById("select-bank")
let selected_value = select_bank.options[select_bank.selectedIndex].text
let acct_number = document.getElementById("acct-number")
let _remark = document.getElementById("remark")

sendMoney = ()=>{
    _remark = document.getElementById("remark")
    if(_amount.value < 50){
        // alert("Amount should not be less than 50")
        _amount.value = ""
        _amount.placeholder = "The minimum amount is 50"
    }
    if(acct_number.value == "" || _amount.value == "" || _remark.value == ""){
        acct_number.placeholder += " required"
        _amount.placeholder += " required"
        _remark.placeholder += " required"
    }
    console.log(_amount.value)
    console.log(selected_value)
    console.log(acct_number.value)
    console.log(_remark.value)
}