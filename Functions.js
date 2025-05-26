// Carrusel automático
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showNextImage() {
    // Ocultar todas las imágenes
    images.forEach(img => img.classList.remove('active'));

    // Mostrar la siguiente imagen
    images[currentIndex].classList.add('active');

    // Actualizar índice
    currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar imagen cada 3 segundos
setInterval(showNextImage, 3000);