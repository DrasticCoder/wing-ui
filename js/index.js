document.addEventListener('DOMContentLoaded', function () {
  // Modal Functionality
  const modal = document.querySelector('[data-modal]');
  const modalToggle = document.querySelector('[data-modal-toggle]');
  const modalClose = document.querySelector('[data-modal-close]');

  if (modalToggle) {
    modalToggle.addEventListener('click', function () {
      modal.classList.toggle('active');
    });
  }
  if (modalClose) {
    modalClose.addEventListener('click', function () {
      modal.classList.remove('active');
    });
  }

  // tooltip
  const tooltip = document.querySelector('[data-tooltip]');
  const tooltipToggle = document.querySelector('[data-tooltip-toggle]');
  if (tooltipToggle) {
    tooltipToggle.addEventListener('mouseenter', function () {
      tooltip.classList.toggle('active');
      console.log('mouseenter');
    });
  }
});
