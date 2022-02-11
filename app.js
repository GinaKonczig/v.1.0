
const navSlide = () => {
    const Navbar = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navLinksA = document.querySelectorAll('.nav-links a');


    burger.addEventListener('click', () => {   
        //Enable Nav
        nav.classList.toggle('nav-active');
        

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `NavLinkFade 0.4s ease forwards  ${index / 12 + 0.1}s`;
            }  
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    }); 

}

navSlide();


window.addEventListener("scroll", () =>{

  var NavLinks = document.querySelector(".nav-links");
  NavLinks.classList.toggle("lighter-bg", window.scrollY > 0);

  var burger = document.querySelector(".burger");
  burger.classList.toggle("black", window.scrollY > 0);

  var logo = document.querySelector(".logo");
  logo.classList.toggle("dark-logo", window.scrollY > 0);
});

window.addEventListener("load", () => {
    const preload = document.querySelector(".preloader");
    preload.classList.add("preload-finish");

    const logo = document.querySelector(".logo");
    logo.classList.add("logo-visible");

    const burger = document.querySelector(".burger");
    burger.classList.add("burger-visible");

    const message = document.querySelector(".contact-btn");
    message.classList.add("contact-btn-visible")
});