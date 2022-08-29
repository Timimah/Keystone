let userName = document.getElementById("user_name0")
let userAddress = document.getElementById("user_address0")
let userNumber = document.getElementById("user_number0")
let userNok = document.getElementById("user_nok0")
let userNokRel1 = document.getElementById("user_nokrel1")
editProfile = ()=>{
    user_profile.style.display = "none"
    edit_Details.style.display = "block"
}
editedProfile = ()=>{
        userName =userName.value
        document.getElementById("user_name").innerText = userName
        userAddress = userAddress.value
        document.getElementById("user_address").innerText = userAddress
        userNumber = userNumber.value
        document.getElementById("user_number").innerText = userNumber
        userNok = userNok.value
        document.getElementById("user_nok").innerText = userNok
        userNokRel1 = userNokRel1.value
        document.getElementById("user_nokrel").innerText = userNokRel1
    update_profile_success.style.display = "flex"
    user_profile.style.display = "block"
    edit_Details.style.display = "none"
}
closeDiv = ()=>{
    update_profile_success.style.display = "none"
}