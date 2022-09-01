let signedInUser
if(localStorage.signedin_user){
    signedInUser = JSON.parse(localStorage.getItem("signedin_user"))
}
let userName = document.getElementById("user_name0")
let userAddress = document.getElementById("user_address0")
let userNumber = document.getElementById("user_number0")
let userNok = document.getElementById("user_nok0")
let userNokRel1 = document.getElementById("user_nokrel1")
let profile_name = document.getElementById("user_name")
let profile_address = document.getElementById("user_address")
let profile_number = document.getElementById("user_number")
let profile_nok = document.getElementById("user_nok")
let profile_nokrel = document.getElementById("user_nokrel")
let aprofile_name = document.getElementById("auser_name")
let aprofile_acct = document.getElementById("auser_acct")



getProfile = () =>{
    signedInUser.map((item) =>{
        profile_name.innerText = item.profileName
        profile_address.innerText = item.profileAddress
        profile_number.innerText = item.profileNumber
        profile_nok.innerText = item.profileNok
        profile_nokrel.innerText = item.profileNokRel
        aprofile_name.innerText = item.profileName
        aprofile_acct.innerText = item.profileAcctNo
    })
}
editProfile = ()=>{
    user_profile.style.display = "none"
    edit_Details.style.display = "block"
}
editedProfile = ()=>{
    if(userName.value == ""){
        alert("Empty")
        userName = profile_name.innerText
        profile_name.innerText = userName
    }
    else{
        userName = userName.value
        profile_name.innerText = userName
    }
    if(userAddress.value == ""){
        alert("u empty")
        userAddress = profile_address.innerText
        profile_address.innerText = userAddress
    }
    else{
        userAddress = userAddress.value
        profile_address.innerText = userAddress
    }
    if(userNumber.value == ""){
        alert("v empty")
        userNumber = profile_number.innerText
        profile_number.innerText = userNumber
    }
    else{
        userNumber = userNumber.value
        profile_number.innerText = userNumber
    }
    if(userNok.value == ""){
        alert("Nok empty")
        userNok = profile_nok.innerText
        profile_nok.innerText = userNok
    }
    else{
        userNok = userNok.value
        profile_nok.innerText = userNok
    }
    if(userNokRel1.value == ""){
        alert("Nokrel1 empty")
        userNokRel1 = profile_nokrel.innerText
        profile_nokrel.innerText = userNokRel1
    }
    else{
        userNokRel1 = userNokRel1.value
        profile_nokrel.innerText = userNokRel1
    }    
    update_profile_success.style.display = "flex"
    user_profile.style.display = "block"
    edit_Details.style.display = "none"
    userName.value = ""
    userAddress.value = ""
    userNumber.value = ""
    userNok.value = ""
    userNokRel1.value = ""
}
closeDiv = ()=>{
    update_profile_success.style.display = "none"
}