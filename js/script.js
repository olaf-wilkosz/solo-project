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

hamburger.addEventListener('click', function () {
  sidebar.classList.toggle('is-active');
  overlay.classList.toggle('is-active');

  const hamburgerStatus = document.getElementsByClassName('is-active');

  if (window.screen.height <= 1023) {
    if (hamburgerStatus.length == 0) {
      hamburger.setAttribute('style', 'left: 0');
    } else {
      hamburger.setAttribute('style', 'left: 260px');
    }
  } else if (window.screen.height > 1024) {
    hamburger.setAttribute('style', 'left: 128px');
  }
});


overlay.addEventListener('click', function () {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
});
