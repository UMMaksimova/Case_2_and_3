const images = document.querySelectorAll('.slider-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const status = document.getElementById('status');

let currentIndex = 0;

function updateSlider() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    status.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

// Инициализация слайдера
updateSlider();