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
    if(userName.value == ""){
        alert("Empty")
        userName = document.getElementById("user_name").innerText
        document.getElementById("user_name").innerText = userName
    }
    else{
        userName = userName.value
        document.getElementById("user_name").innerText = userName
    }
    if(userAddress.value == ""){
        alert("u empty")
        userAddress = document.getElementById("user_address").innerText
        document.getElementById("user_address").innerText = userAddress
    }
    else{
        userAddress = userAddress.value
        document.getElementById("user_address").innerText = userAddress
    }
    if(userNumber.value == ""){
        alert("v empty")
        userNumber = document.getElementById("user_number").innerText
        document.getElementById("user_number").innerText = userNumber
    }
    else{
        userNumber = userNumber.value
        document.getElementById("user_number").innerText = userNumber
    }
    if(userNok.value == ""){
        alert("Nok empty")
        userNok = document.getElementById("user_nok").innerText
        document.getElementById("user_nok").innerText = userNok
    }
    else{
        userNok = userNok.value
        document.getElementById("user_nok").innerText = userNok
    }
    if(userNokRel1.value == ""){
        alert("Nokrel1 empty")
        userNokRel1 = document.getElementById("user_nokrel1").innerText
        document.getElementById("user_nokrel1").innerText = userNokRel1
    }
    else{
        userNokRel1 = userNokRel1.value
        document.getElementById("user_nokrel1").innerText = userNokRel1
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