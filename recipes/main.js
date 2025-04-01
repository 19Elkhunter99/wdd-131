<script type="module">
    import recipes from './recipes.mjs';

    document.addEventListener('DOMContentLoaded', () => {
        const searchForm = document.getElementById('search-form');
        const recipeList = document.getElementById('recipe-list');

        function recipeTemplate(recipe) {
            return `
                <article class="recipe">
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
                    <h2 class="recipe-title">${recipe.title}</h2>
                    <p class="recipe-meta">Date: ${recipe.date}</p>
                    <p class="recipe-description">${recipe.description}</p>
                </article>
            `;
        }

        function renderRecipes(recipeListToRender) {
            recipeList.innerHTML = recipeListToRender.map(recipe => recipeTemplate(recipe)).join('');
        }

        function filterRecipes(query) {
            const queryLower = query.toLowerCase();
            return recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(queryLower) ||
                recipe.description.toLowerCase().includes(queryLower)
            );
        }

        function init() {
            renderRecipes(recipes);
        }

        init();

        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const searchTerm = document.getElementById('search').value;
            const filteredRecipes = filterRecipes(searchTerm);
            renderRecipes(filteredRecipes);
        });
    });
</script>
