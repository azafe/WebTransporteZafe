// Año dinámico en el footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Scroll suave al bloque de valores
const scrollBtn = document.getElementById('scrollValores');
const valoresSection = document.getElementById('valores');

if (scrollBtn && valoresSection) {
  scrollBtn.addEventListener('click', () => {
    valoresSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Tabs de conductas
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    // Actualizar botones
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Actualizar contenido
    tabContents.forEach(content => {
      if (content.id === `tab-${target}`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});