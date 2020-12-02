// function toggleMenu(visible) {
//   document.querySelector('.side-nav').classList.toggle('show-regular', visible);
// }

// document.querySelector('.hamburger').addEventListener('click', function (event) {
//   event.preventDefault();
//   toggleMenu();
// });

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const bottombar = document.querySelector('.bottombar');

hamburger.addEventListener('click', function () {
  sidebar.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
  bottombar.classList.toggle('is-active');

  const hamburgerStatus = document.getElementsByClassName('is-active');

  if (window.screen.height <= 1023) {
    if (hamburgerStatus.length == 0) {
      hamburger.setAttribute('style', 'left: 0');
      bottombar.setAttribute('style', '  transform: translateX(-100%)');
    } else {
      hamburger.setAttribute('style', 'left: 260px');
      bottombar.setAttribute('style', 'transform: translateX(0)');
    }
  } else if (window.screen.height > 1024) {
    hamburger.setAttribute('style', 'left: 128px');
    bottombar.setAttribute('style', 'display: none');
  }
});

overlay.addEventListener('click', function () {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
});
