export function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach((item) => {
    const btn = item.querySelector('.accordion-toggle');
    const content = item.querySelector('.accordion-content');

    // Ensure only one icon per button
    let icon = btn.querySelector('.accordion-icon');
    if (!icon) {
      icon = document.createElement('span');
      icon.className = 'accordion-icon';
      btn.appendChild(icon);
    }

    // All collapsed by default
    item.classList.add('collapsed');
    icon.textContent = '+';

    btn.onclick = function () {
      // Close all
      items.forEach((otherItem) => {
        const otherBtn = otherItem.querySelector('.accordion-toggle');
        const otherIcon = otherBtn.querySelector('.accordion-icon');
        if (otherItem !== item) {
          otherItem.classList.add('collapsed');
          otherIcon.textContent = '+';
        }
      });
      // Toggle this one
      const isCollapsed = item.classList.toggle('collapsed');
      icon.textContent = isCollapsed ? '+' : '–';
    };
  });
}