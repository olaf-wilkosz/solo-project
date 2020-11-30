function toggleMenu(visible) {
  document.querySelector('.side-nav').classList.toggle('show-regular', visible);
}

document.querySelector('.hamburger').addEventListener('click', function (event) {
  event.preventDefault();
  toggleMenu();
});
