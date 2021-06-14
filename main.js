(function () {
  const modal = document.querySelector('.modal');
  const btnSpider = document.getElementById('btnSpider');
  const btnRobin = document.getElementById('btnRobin');
  const btnBatman = document.getElementById('btnBatman');
  const closeModalBtn = document.querySelector('.modal__content--close');

  btnSpider.addEventListener('click', openModal);
  btnRobin.addEventListener('click', openModal);
  btnBatman.addEventListener('click', openModal);

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
  });
  function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  }
})();
