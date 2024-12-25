document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const openButton = document.querySelector('.open-modal');
  const closeButton = modal.querySelector('.close');

  openButton.addEventListener('click', function () {
    modal.classList.add('active');
  });

  closeButton.addEventListener('click', function () {
    modal.classList.remove('active');
  });
});
