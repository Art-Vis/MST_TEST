const rangeInput = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');
rangeValue.textContent = rangeInput.value + '%';

rangeInput.addEventListener('change', () => {
	rangeValue.textContent = rangeInput.value + '%';
});

document.getElementById('burger-menu').addEventListener('click', function () {
	this.classList.toggle('open');

	const mobileMenu = document.querySelector('.mobile-menu');
	mobileMenu.classList.toggle('open');
});

const slider = document.querySelector('.reviews__slider');
const slides = document.querySelectorAll('.reviews__slide');
let currentIndex = 0;
const totalSlides = slides.length;

function autoScroll() {
	currentIndex++;

	if (currentIndex >= totalSlides) {
		currentIndex = 0;
	}

	// Прокрутка по горизонтали
	slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoScroll, 3000);
