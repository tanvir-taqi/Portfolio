const showMenu = (toggleId, navID)=>{
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle' , 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')
const navMenu = document.querySelector('.nav-menu')

navLink.forEach((n)=>{
    n.addEventListener('click',()=>{
        navLink.forEach((s)=>{
            s.classList.remove('active')
            navMenu.classList.remove('show')
        })
        this.classList.add('active')

    })
})



const sr = scrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset:true

})
sr.reveal('.home-title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home-img',{delay:400})
sr.reveal('.home-social-icon',{interval:400})