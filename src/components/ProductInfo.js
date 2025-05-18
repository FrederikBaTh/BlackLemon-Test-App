export function renderProductInfo() {
  const app = document.getElementById('app');
  const container = document.createElement('div');
  container.className = 'product-info';

  container.innerHTML = `
    <h1>Restorative Hair Mask</h1>
    <p>Nourishment in a bottle</p>
    <button id="add-to-cart">Add to Cart</button>
    <div id="cart-animation" class="hidden">✔ Added!</div>
  `;

  app.appendChild(container);

  document.getElementById('add-to-cart').addEventListener('click', () => {
    const anim = document.getElementById('cart-animation');
    anim.classList.remove('hidden');
    setTimeout(() => anim.classList.add('hidden'), 1500);
  });
}
