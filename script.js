'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const openModal = document.querySelectorAll('.show-modal');

const openModalf = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalf = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openModal.length; i++)
  console.log(openModal[i].addEventListener('click', openModalf));

closeModal.addEventListener('click', closeModalf);

overlay.addEventListener('click', closeModalf);

document.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalf();
  }
});
