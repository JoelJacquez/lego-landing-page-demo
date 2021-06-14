(function () {
  const modal = document.querySelector('.modal');
  const btnSpider = document.getElementById('btnSpider');
  const closeModalBtn = document.querySelector('.modal__content--close');

  console.log(btnSpider);
  console.log(modal);

  btnSpider.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  });
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
  });
})();
