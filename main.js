const navIcon = document.querySelector('.nav-icon');
const navClose = document.querySelector('.nav-close');
const navlist = document.querySelector('.nav-list');
const navOverlay = document.querySelector('.overlay');

const navOpen = () => {
    navlist.classList.add('show');
    navOverlay.classList.add('active');
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden';
    
}

const navClosee = () => {
    navlist.classList.remove('show');
    navOverlay.classList.remove('active');
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden';
    
}


navIcon.addEventListener('click', navOpen);
navClose.addEventListener('click', navClosee);
navOverlay.addEventListener('click', navClosee);

//aos
AOS.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorplacement: 'top-bottom'
}) 