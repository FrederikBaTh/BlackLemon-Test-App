import './styles/main.scss';
import { renderProductPage } from './src/pages/ProductPage.js';

const productOne = {
  title: "Restorative Hair Mask",
  subtitle: "Nourishment in a bottle",
  image: "../src/assets/images/product-desktop.png",
  breadcrumbs: "All Products / Haircare / Restorative Hair Mask",
  description: "Lorem ipsum dolor sit amet...",
  badges: ["100% ORGANIC", "100% ORGANIC", "100% ORGANIC"],
  options: ["Buy Once | $38", "Subscribe (SAVE 20%) | $30"],
  accordions: ["Ingredients", "How to Use", "Shipping Info"]
};

document.addEventListener('DOMContentLoaded', () => {
  renderProductPage(productOne);

  // Wait for the DOM to update after rendering
  setTimeout(() => {
    document.body.addEventListener('click', function(e) {
      if (e.target.classList.contains('minus') || e.target.classList.contains('plus')) {
        const quantityBox = e.target.closest('.quantity-box');
        const input = quantityBox.querySelector('.quantity-input');
        let value = parseInt(input.value, 10);

        if (e.target.classList.contains('minus')) {
          value = Math.max(1, value - 1);
        } else if (e.target.classList.contains('plus')) {
          value = value + 1;
        }
        input.value = value;
      }
    });
  }, 0);
});


