function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => sec.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}

document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Pronto te responderemos.');
    this.reset();
});

// Carrusel automático
let slideIndex = 0;
const slides = document.querySelectorAll('.carrusel .slide');
function mostrarSlideAuto() {
    slides.forEach((slide, i) => slide.classList.toggle('activa', i === slideIndex));
    slideIndex = (slideIndex + 1) % slides.length;
}
if (slides.length > 0) {
    setInterval(mostrarSlideAuto, 3500);
}
