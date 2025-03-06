// JavaScript (main.js)
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const recipes = document.querySelectorAll('.recipe');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        recipes.forEach(recipe => {
            const title = recipe.querySelector('h2').textContent.toLowerCase();
            const description = recipe.querySelector('.description').textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                recipe.style.display = '';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});
