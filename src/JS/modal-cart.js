const cartBtnSubmit = document.querySelector('.cart_form_button');
const modalCartByBuy = document.querySelector('.modal-cart');
const modalCartClose = document.querySelector('.close-btn');

function displayByBuyModal() {
  modalCartByBuy.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

function handleModalClick(event) {
  if (event.target === modalCartByBuy) {
    closeModal();
  }
}

function closeModal() {
  modalCartByBuy.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
}

cartBtnSubmit.addEventListener('click', displayByBuyModal);
window.addEventListener('click', handleModalClick);
modalCartClose.addEventListener('click', closeModal);
