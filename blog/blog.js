const books = [
    {
        title: "Idaho Bureau Land Management",
        author: "Idaho Fish and Game Wildlife Management",
        date: "January 11, 2020",
        image: "BLM.jpg", // Update with your image path
        description: "This article helps to understand the basic layouts and laws."
    },
    {
        title: "Hunter's Guide",
        author: "Ron Spomer",
        date: "January 1, 2015",
        image: "hunter.jpg", // Update with your image path
        description: "This guide will help you with regulations and open and closed season."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const articlesSection = document.querySelector(".articles");

    books.forEach(book => {
        const article = document.createElement("article");

        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `by ${book.author}`;
        
        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = book.date;

        const img = document.createElement("img");
        img.src = book.image;
        img.alt = `Cover of ${book.title}`;

        const description = document.createElement("p");
        description.textContent = book.description;

        article.appendChild(title);
        article.appendChild(author);
        article.appendChild(date);
        article.appendChild(img);
        article.appendChild(description);

        articlesSection.appendChild(article);
    });
});
