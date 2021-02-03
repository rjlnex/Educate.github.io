 burger = document.querySelector('.burger')
 navbar = document.querySelector('.navbar')
 rightnav = document.querySelector('.rightnav')
 list = document.querySelector('.list')


 burger.addEventListener('click', ()=>{
    list.classList.toggle('h-nav');
    rightnav.classList.toggle('h-nav');
    navbar.classList.toggle('v-nav');
    })