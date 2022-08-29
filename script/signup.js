let profile
let signupProfile =[]
if(localStorage.user_profile){
  signupProfile = JSON.parse(localStorage.getItem("user_profile"))
}
let nextOofKin = document.getElementById("nok_rel")
let selectedNok 
let generate_acctno
let generated_acctno
submitDetails = () =>{
  if (first_name.value == "" || middle_name.value == "" || last_name.value == "" || user_address.value == "" || userPassword.value == "" || phoneNumber.value == "" || nok.value == ""){
    alert("All fields are required")
    if (first_name.value == "") {
        first_name.focus()
    }
    else if (middle_name.value == ""){
        middle_name.focus()
    }
    else if (last_name.value == ""){
        last_name.focus()
    }
    else if (user_address.value == ""){
        user_address.focus()
    }
    else if (userPassword.value == ""){
        userPassword.focus()
    }
    else if(phoneNumber.value == ""){
      phoneNumber.focus()
    }
    else if(nok.value == ""){
      nok.focus()
    }
}
  else{
    generateAcctNo()   
    selectedNok = nextOofKin.options[nextOofKin.selectedIndex].text
    profile = {
      FirstName: first_name.value,
      MiddleName: middle_name.value,
      LastName: last_name.value,
      userAddress: user_address.value,
      NextofKin: nok.value,
      NextofKinRel: selectedNok,
      PhoneNumber:phoneNumber.value,
      confirmPassword:userPassword.value,
      accountNumber: generated_acctno
    }
    if(generate_acctno == generated_acctno){
      console.log(generate_acctno)
      console.log(generated_acctno)
      generateAcctNo()
      console.log(generate_acctno)
      console.log(generated_acctno)
    }
signupProfile.push(profile)
localStorage.setItem("user_profile",JSON.stringify(signupProfile))
alert("You have successfully signed up")
  }


first_name.value = ""
middle_name.value = ""
last_name.value = ""
user_address.value = ""
nok.value = ""
selected_nok = ""
phoneNumber.value = ""
userPassword.value = ""
confirmPassword.value = ""
console.log(signupProfile)
}
checkPassword = () =>{
  if(userPassword.value == confirmPassword.value){
    alert("password is correct")
  
  }
  else if(confirmPassword.value != userPassword.value){
    alert("password is incorrect")
    confirmPassword.focus()
  }
  else{
    submitDetails()
  }
}
generateAcctNo = () =>{
  generate_acctno = `01${Math.round(Math.random()* 100000000)}`
  generated_acctno = generate_acctno
  console.log(generate_acctno)
  console.log(generated_acctno)
}
