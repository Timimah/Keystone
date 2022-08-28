{allProfile -= JSON.parse(localStorage.getItem("localallProfile"))}
var allProfile =[]
function signIn(){
var profile ={
    Phonenumber :phoneNumber.value,
    password: userPassword.value,
}
allProfile.push(profile)
localStorage.setItem("localallProfile",JSON.stringify(allProfile))
console.log(profile)
window.location.href = "dashboard/index.html"
}