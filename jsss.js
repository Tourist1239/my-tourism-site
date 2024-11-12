document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.star-rating').forEach(starRating => {
        starRating.addEventListener('click', (e) => {
            const stars = starRating.querySelectorAll('.star');
            const ratingValue = e.target.getAttribute('data-value');
            const tour = starRating.getAttribute('data-tour');
            const ratingText = document.querySelector(`#${tour}-rating`);
            const ratingDisplay = starRating.nextElementSibling;

            ratingText.textContent = ratingValue;
            ratingDisplay.classList.remove('hidden');

            stars.forEach(star => {
                star.style.color = star.getAttribute('data-value') <= ratingValue ? '#FFD700' : ''; 
            });
        });
    });


    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault(); 
        const destination = document.getElementById('destination').value;
        const comments = document.getElementById('comments').value;

        alert(`Destination: ${destination}\nComments: ${comments}`);
    });
});
