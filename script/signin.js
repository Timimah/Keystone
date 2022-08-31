required_div.style.display  = "none"
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
        required_div.style.display  = "block"
        signed_in.innerTEXT = `You have successfully logged in`
        window.location.href = "/dashboard/index.html"
    }
    else if(found == false){
        required_div.style.display  = "block"
        signed_in.inner = `Invalid!!`
        // alert(signed_in.innerTEXT)
        acctPNumber.value = ""
        userPassword.value = ""
        acctPNumber.focus()
    }
}