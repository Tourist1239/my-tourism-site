document.addEventListener("DOMContentLoaded", () => {
   
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tourName = e.target.dataset.tourName;
            alert(`You selected: ${tourName}`);
            e.target.closest('.card').classList.toggle('highlight'); 
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        const messageDiv = document.getElementById('form-message');
        messageDiv.textContent = 'Thank you for your submission!';
        messageDiv.classList.remove('hidden');
        messageDiv.classList.add('fade-in');
        contactForm.reset(); 
    });

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const tours = document.querySelectorAll('.tour-card');

        tours.forEach(tour => {
            const tourName = tour.dataset.tourName.toLowerCase();
            if (tourName.includes(searchTerm)) {
                tour.style.display = 'block';
            } else {
                tour.style.display = 'none';
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("booking-form");
    const submitButton = document.querySelector("#booking-form button[type='submit']");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

  
        const destination = document.getElementById("destination").value.trim();
        const departureDate = document.getElementById("departure-date").value.trim();
        const arrivalDate = document.getElementById("arrival-date").value.trim();
        const nights = document.getElementById("nights").value.trim();
        const guests = document.getElementById("guests").value.trim();
        const hotelClass = document.getElementById("hotel-class").value.trim();
        const mealPlan = document.getElementById("meal-plan").value.trim();
        const resort = document.getElementById("resort").value.trim();
        const budget = document.getElementById("budget").value.trim();

       
        if (!destination || !departureDate || !arrivalDate || !nights || !guests || !hotelClass || !mealPlan || !resort || !budget) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        
        alert("Your application has been accepted. Our manager will contact you.");
        
  
        form.reset();
    });
});
