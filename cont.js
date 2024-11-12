document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formMessage.textContent = 'Thank you for your message!';
        formMessage.classList.remove('hidden');
        form.reset();
    });

    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', () => {
        form.reset();
        formMessage.classList.add('hidden');
    });

    const stars = document.querySelectorAll('.star');
    const ratingMessage = document.getElementById('rating-message');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
            });
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
            ratingMessage.textContent = `You rated us: ${rating} star(s)`;
            ratingMessage.classList.remove('hidden');
        });
    });

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        alert(`You searched for: ${searchTerm}`);
    });

    const showTimeBtn = document.getElementById('show-time-btn');
    const currentTimeDiv = document.getElementById('current-time');

    showTimeBtn.addEventListener('click', () => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        currentTimeDiv.textContent = `Current time: ${formattedTime}`;
        currentTimeDiv.classList.remove('hidden');
    });

    const loadContentBtn = document.getElementById('load-content-btn');
    const extraContentDiv = document.getElementById('extra-content');

    loadContentBtn.addEventListener('click', () => {
        extraContentDiv.classList.toggle('hidden');
    });
});
const clickSound = new Audio("звук.mp3");

const stars = document.querySelectorAll("#stars .star");
const ratingMessage = document.getElementById("rating-message");

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll("#stars .star");
    const ratingMessage = document.getElementById("rating-message");
    const sound = document.getElementById("sound"); 
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = this.getAttribute("data-value");
            ratingMessage.textContent = `You rated this ${rating} stars!`;
            ratingMessage.classList.remove("hidden");

            sound.play(); 
        });
    });
});

// Инициализация карты
var map = L.map('map-container').setView([40.7128, -74.0060], 13); // Устанавливаем начальные координаты (например, Нью-Йорк)

// Добавляем слой OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Добавляем маркер на карту (например, на Статую Свободы)
var marker = L.marker([40.7128, -74.0060]).addTo(map);
marker.bindPopup("<b>Statue of Liberty</b><br>New York City").openPopup();


