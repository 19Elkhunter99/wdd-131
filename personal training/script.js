document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission

    const formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const statusMessage = document.getElementById("contactStatus");
        statusMessage.innerText = data.message;
        statusMessage.style.color = data.status === "success" ? "green" : "red";
    })
    .catch(error => console.error("Error:", error));
});
document.addEventListener('DOMContentLoaded', () => {
    fetch('reviews.json')  // ✅ Load the reviews JSON file
        .then(response => response.json())
        .then(reviews => {
            const reviewList = document.getElementById('review-list');
            reviews.forEach(review => {
                const reviewItem = document.createElement('p');
                reviewItem.innerHTML = `<strong>${review.name}</strong>: ${review.review}`;
                reviewList.appendChild(reviewItem);
            });
        })
        .catch(error => console.error("Error loading reviews:", error));
});

