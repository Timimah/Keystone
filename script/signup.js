let profile
let signupProfile =[]
if(localStorage.user_profile){
  signupProfile = JSON.parse(localStorage.getItem("user_profile"))
}
let nextOofKin = document.getElementById("nok_rel")
let selectedNok 
submitDetails = () =>{
  selectedNok = nextOofKin.options[nextOofKin.selectedIndex].text
  profile = {
    FirstName: first_name.value,
    MiddleName: middle_name.value,
    LastName: last_name.value,
    userAddress: user_address.value,
    NextofKin: nok.value,
    NextofKinRel: selectedNok,
    Phonenumber:phoneNumber.value,
    userpassword:userPassword.value,
}
signupProfile.push(profile)

localStorage.setItem("user_profile",JSON.stringify(signupProfile))
alert("You have successfully signed up")
first_name.value = ""
middle_name.value = ""
last_name.value = ""
user_address.value = ""
nok.value = ""
selected_nok = ""
phoneNumber.value =""
userPassword.value =""

console.log(signupProfile)
}

var  allCode =[]
function code(){
  var  Code ={
    
  }

}