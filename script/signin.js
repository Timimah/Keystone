required_div.style.display = "none"
let signupProfile = JSON.parse(localStorage.getItem("user_profile"))
let found = false
signIn = () =>{
    if(acctPNumber.value != "" && userPassword.value != ""){
        signupProfile.forEach(element => {
            if (element.PhoneNumber == acctPNumber.value || element.accountNumber == acctPNumber.value && element.confirmPassword == userPassword.value) {
            found = true
            // console.log(found)
            let signedInUser = []
            let signedInUserProfile= {
                profileName: `${element.FirstName} ${element.MiddleName} ${element.LastName}`,
                profileAddress: `${element.userAddress}`,
                profileNok: `${element.NextofKin}`,
                profileNokRel: `${element.NextofKinRel}`,
                profilePNumber: `${element.PhoneNumber}`,
                profileAcctNo: `${element.accountNumber}`,
                profilePin: `${element.pinNumber}`,
                profilePassword:`${element.confirmPassword}`,
                userBalance: 1000
            }
            signedInUser.push(signedInUserProfile)
            // console.log(signedInUser)
            localStorage.setItem("signedin_user",JSON.stringify(signedInUser))
            }
        })  
    }
    else if(acctPNumber.value == "" && userPassword.value == ""){
    required_div.style.display = "block"
    acctPNumber.focus()
    acctPNumber.placeholder = "Please input a valid value"
    userPassword.focus()
    userPassword.placeholder = "Please input a valid value"
    }
    if(found == true){
        signed_in.innerText = "Log In successful"
        window.location.href = "/dashboard/index.html"
    }
    else if(found == false){
        required_div.style.display = "block"
        acctPNumber.value = ""
        userPassword.value = ""
        acctPNumber.focus()
    }
}
closeDiv = () =>{
    required_div.style.display = "none"
}