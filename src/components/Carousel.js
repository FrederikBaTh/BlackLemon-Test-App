export function renderCarousel() {
  const app = document.getElementById('app');
  app.innerHTML = ''; 
  const section = document.createElement('div');
  section.className = 'carousel';

  const items = [
    {
      img: 'assets/images/product-thumb.png', 
      title: 'HAND POMADE / POMMADE MAINS',
      desc: 'NOURISHMENT FOR YOUR HANDS',
      price: '159,00&nbsp;KR'
    },
    {
      img: 'assets/images/product-thumb.png',
      title: 'HAND POMADE / POMMADE MAINS',
      desc: 'NOURISHMENT FOR YOUR HANDS',
      price: '159,00&nbsp;KR'
    },
    {
      img: 'assets/images/product-thumb.png',
      title: 'HAND POMADE / POMMADE MAINS',
      desc: 'NOURISHMENT FOR YOUR HANDS',
      price: '159,00&nbsp;KR'
    }
  ];

  let current = 0;
  let animating = false;

  function getItemHtml(idx) {
    const item = items[idx];
  
    return `
      <div class="item">
        <img src="${item.img}" alt="Product" />
        <p><strong>${item.title}</strong><br>
        <span class="carousel-desc">${item.desc}</span></p>
        <p class="carousel-price">159,00 KR</p>
      </div>
    `;
  }

  function render(animationDirection = null) {
    const left = (current + items.length - 1) % items.length;
    const center = current;
    const right = (current + 1) % items.length;

    section.innerHTML = `
      <h2>You May Also Like</h2>
      <div class="carousel-track${animationDirection ? ' animating ' + animationDirection : ''}">
        <button class="carousel-arrow carousel-arrow--left" aria-label="Previous">&#8249;</button>
        ${getItemHtml(left)}
        ${getItemHtml(center)}
        ${getItemHtml(right)}
        <button class="carousel-arrow carousel-arrow--right" aria-label="Next">&#8250;</button>
      </div>
    `;

    section.querySelector('.carousel-arrow--left').onclick = () => {
      if (animating) return;
      animating = true;
      animate('left');
    };
    section.querySelector('.carousel-arrow--right').onclick = () => {
      if (animating) return;
      animating = true;
      animate('right');
    };
  }

  function animate(direction) {
    const track = section.querySelector('.carousel-track');
    track.classList.add('animating', direction);

    setTimeout(() => {
      if (direction === 'left') {
        current = (current + items.length - 1) % items.length;
      } else {
        current = (current + 1) % items.length;
      }
      render();
      animating = false;
    }, 350);
  }

  render();
  app.appendChild(section);
}
