var nav = document.querySelector('nav');
var links = document.getElementsByTagName('a');

nav.addEventListener('click', function () {
  console.log('Yes, it clicked!');
  links[1].classList.add('active')
});
