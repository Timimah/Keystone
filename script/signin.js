let signupProfile = JSON.parse(localStorage.getItem("user_profile"))
let found = false
signIn = () =>{
    if(acctPNumber.value != "" && userPassword.value != ""){
        signupProfile.forEach(element => {
            if (element.PhoneNumber == acctPNumber.value || element.accountNumber == acctPNumber.value && element.confirmPassword == userPassword.value) {
            found = true
            // console.log(found)
            }
        })  
    }
    else if(acctPNumber.value == "" && userPassword.value == ""){
    acctPNumber.focus()
    acctPNumber.placeholder = "Please input a valid value"
    userPassword.focus()
    userPassword.placeholder = "Please input a valid value"
    }
    if(found == true){
        alert("You have been successfully logged in")
        window.location.href = "/dashboard/index.html"
    }
    else if(found == false){
        alert("Invalid!!")
        acctPNumber.value = ""
        userPassword.value = ""
        acctPNumber.focus()
    }
}