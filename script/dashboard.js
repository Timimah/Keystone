var myNav = document.getElementById('navBar')
window.onscroll = () =>{
    if(window.scrollY > 20){
        myNav.classList.add('navbar-colored')
        // myNav.classList.remove('navbar')
    }
    else{
        // myNav.classList.add('navbar')
        myNav.classList.remove('navbar-colored')
    }
}
let userBalance = document.getElementById('balance').innerText
balance.innerText = userBalance