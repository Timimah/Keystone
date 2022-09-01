required_div.style.display = "none"
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
  generateAcctNo()
  generated_acctno = generate_acctno
  console.log(generated_acctno)
  generatePin() 
  console.log(pin);
  generated_pin = pin
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
window.location.href = "signin.html"

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
  if(phoneNumber.value == ""){
    required_div.style.display = "block"
    required_txt.innerText = `Please, input a valid Phone number`
    phoneNumber.focus()
  }
  else if (first_name.value == "") {
    required_div.style.display = "block"
    required_txt.innerText = `Please, input a valid name`
    first_name.focus()
  }
  else if (middle_name.value == ""){
    required_div.style.display = "block"
    required_txt.innerText = `Please, input a valid name`
    middle_name.focus()
  }
  else if (last_name.value == ""){
    required_div.style.display = "block"
    required_txt.innerText = `Please, input a valid name`
    last_name.focus()
  }
  else if (user_address.value == ""){
    required_div.style.display = "block"
    required_txt.innerText = `Please, input a valid address`
    user_address.focus()
  }
  else if(nok.value == ""){
    required_div.style.display = "block"
    required_txt.innerText = `Please, input a valid next of kin`
    nok.focus()
  }
  else if(userPassword.value == ""){
    alert("Password is empty")
    required_div.style.display = "block"
    required_txt.innerText = "Input a valid password"
  }
  else if(confirmPassword.value == ""){
    alert("Confirm password is empty")
    required_div.style.display = "block"
    required_txt.innerText = "Please confirm password"
  }
  else if(userPassword.value == confirmPassword.value){
    // alert("password is correct")
    submitDetails()
  }  
}