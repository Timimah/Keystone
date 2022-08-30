let profile
let pin
let generated_pin
let signupProfile =[]
if(localStorage.user_profile){
  signupProfile = JSON.parse(localStorage.getItem("user_profile"))
}
let nextOofKin = document.getElementById("nok_rel")
let selectedNok 
let generate_acctno
let generated_acctno

let generateAcctNo = () =>{
  generate_acctno = `01${Math.round(Math.random()* 1000000000)}`
}
let generatePin = () =>{
  pin = Math.round(Math.random()*10000)
}

let submitDetails = () =>{
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
    generated_acctno = generate_acctno
    generatePin() 
    console.log(pin);
    generated_pin = pin
    console.log(generated_pin)
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
      accountNumber: generated_acctno,
      pinNumber: generated_pin
    }
signupProfile.push(profile)
localStorage.setItem("user_profile",JSON.stringify(signupProfile))
alert(`You have successfully signed up. You can now log in with your phone number or your account number(${profile.accountNumber}). Your UTP (Unique Transaaction Pin) is ${profile.pinNumber}`)
// window.location.href = "signin.html"
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
let checkPassword = () =>{
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