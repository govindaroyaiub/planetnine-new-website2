document.addEventListener('DOMContentLoaded', () => {
const toggleBtn = document.querySelector('.toggle_btn');
const togglebtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');


toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    togglebtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// parallax code

let mountains = document.getElementById('mountains');
let sky = document.getElementById('sky');
let land = document.getElementById('land');
let planet = document.getElementById('planet');
let text = document.querySelector('.texts');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);

    // text.style.marginTop = value * 2.5 + 'px';
    planet.style.top = value * .75 + 'px';
    land.style.top = value * .25 + 'px';
    text.style.marginTop = value * .5 + 'px';
});


gsap.registerPlugin(ScrollTrigger);

});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbarHeader');
  if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

$(document).ready(function() {
  let workflowTL = gsap.timeline({
      scrollTrigger: {
          trigger: "#workflow",
          start: "-10% center",
          end: "center center",
          scrub: 3,
          markers: false,
      }
  });

  workflowTL

  .add('f1')
  .to('.workflow-step-circle-1', {duration: 0.5, opacity: 1, y: 0}, 'f1')
  .to('.workflow-text-box-1', {duration: 0.5, opacity: 1, x: 0}, 'f1')
  .to('.workflow-timeline', {duration: 0.5, '--after-height': '35%'}, 'f1')

  .add('f2')
  .to('.workflow-step-circle-2', {duration: 0.5, opacity: 1, y: 0}, 'f2')
  .to('.workflow-text-box-2', {duration: 0.5, opacity: 1, x: 0}, 'f2')
  .to('.workflow-timeline', {duration: 0.5, '--after-height': '70%'}, 'f2')

  .add('f3')
  .to('.workflow-step-circle-3', {duration: 0.5, opacity: 1, y: 0}, 'f3')
  .to('.workflow-text-box-3', {duration: 0.5, opacity: 1, x: 0}, 'f3')
  .to('.workflow-timeline', {duration: 0.5, '--after-height': '100%'}, 'f3')
});