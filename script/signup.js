let password_Profile = JSON.parse(localStorage.getItem("localpasswordProfile"))
var passwordProfile =[]
function Submit(){
var  profile ={
 Phonenumber:phoneNumber.value,
userpassword:userPassword.value,
Confirmpassword:confirmPassword.value,
}
phoneNumber.value =""
userPassword.value =""
confirmPassword.value =""
passwordProfile.push(profile)

localStorage.setItem("localpasswordProfile",JSON.stringify(password_Profile))
console.log(passwordProfile)
}

var  allCode =[]
function code(){
  var  Code ={
    
  }

}