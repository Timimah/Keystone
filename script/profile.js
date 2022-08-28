let userName = document.getElementById("user_name0").value
let userAddress = document.getElementById("user_address0").value
let userNumber = document.getElementById("user_number0").value
let userNok = document.getElementById("user_nok0").value
let userNokRel1 = document.getElementById("user_nokrel1").value
editProfile = ()=>{
    user_profile.style.display = "none"
    edit_Details.style.display = "block"
}
editedProfile = ()=>{
    // if(document.getElementById("user_name0").value == ""){
    //     alert()
    //     document.getElementById("user_name").innerText = document.getElementById("user_name").innerText
    // }
    // else if(document.getElementById("user_address0").value == ""){
    //     userAddress = document.getElementById("user_address").innerText
    //     document.getElementById("user_address").innerText = userAddress
    // }
    // else if(userNumber == ""){
    //     userNumber = document.getElementById("user_number").innerText
    //     document.getElementById("user_number").innerText = userNumber
    // }
    // else if( userNok == ""){
    //     userNok = document.getElementById("user_nok").innerText
    //     document.getElementById("user_nok").innerText = userNok
    // }
    // else if(userNokRel1 == ""){
    //     userNokRel1 = document.getElementById("user_nokrel").innerText
    //     document.getElementById("user_nokrel").innerText = userNokRel1
    // }
    // else{
        userName = document.getElementById("user_name0").value
        document.getElementById("user_name").innerText = userName
        userAddress = document.getElementById("user_address0").value
        document.getElementById("user_address").innerText = userAddress
        userNumber = document.getElementById("user_number0").value
        document.getElementById("user_number").innerText = userNumber
        userNok = document.getElementById("user_nok0").value
        document.getElementById("user_nok").innerText = userNok
        userNokRel1 = document.getElementById("user_nokrel1").value
        document.getElementById("user_nokrel").innerText = userNokRel1
    // }
    update_profile_success.style.display = "flex"
    user_profile.style.display = "block"
    edit_Details.style.display = "none"
}
closeDiv = ()=>{
    update_profile_success.style.display = "none"
}