window.onload = function (){
    window.addEventListener('scroll', function(e){
        if(window.pageYOffset > 100){
            document.querySelector('header').style.backgroundColor = '#12002f'
        }else{
            document.querySelector('header').style.backgroundColor = ''
        }
    })
}

// modal interactivity

const modal_container = document.querySelector('#modal_container')
const modal = document.querySelector('.modal')
const btn_close = document.querySelector('#btn_close')
const btn_open = document.querySelector('#btn_open')

btn_open.addEventListener('click', ()=>{
    modal.classList.add('open');
})
btn_close.addEventListener('click', ()=>{
    modal.classList.remove('open')
})


// hamburger menu

const menuBtn =
 document.querySelector('.menu_btn');
let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
    console.log(menuBtn)
    if(!menuOpen){
        menuBtn.classList.add('open');
     menuOpen = true;  
 }else{
    menuBtn.classList.remove('open');
     menuOpen = false;
 }
})


const menu_btn = document.querySelector('.menu_btn_burger')
const mobileMenu = document.querySelector('.mobile-nav')

menu_btn.addEventListener('click', ()=>{
    // menu_btn.classList.toggle('open');
    mobileMenu.classList.toggle('active');
})