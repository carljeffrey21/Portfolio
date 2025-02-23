let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Developer', 'Graphics Designer', 'IT Specialist'],
    typeSpeed: 80,
    backspeed: 80,
    backDelay: 1200,
    loop: true,
  });
