var nav = document.querySelector('nav');
var links = document.querySelectorAll('header nav a');

nav.addEventListener('click', eventHandler, false);

function eventHandler (event) {
  for  (let i = 0; i < links.length; i++ ) {
    links[i].classList.remove('active');
  }
  event.target.classList.add('active');
}
