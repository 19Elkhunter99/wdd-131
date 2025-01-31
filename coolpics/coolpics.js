document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menuItems = document.querySelector(".nav-items");

    menuButton.addEventListener("click", () => {
        menuItems.classList.toggle("hide");
    });

    function handleResize() {
        if (window.innerWidth > 1000) {
            menuItems.classList.remove("hide");
        } else {
            menuItems.classList.add("hide");
        }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    function viewerTemplate(src, alt) {
        return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${src}" alt="${alt}">
        </div>
        `;
    }

    function viewHandler(event) {
        const img = event.target;
        if (img.tagName.toLowerCase() === 'img') {
            const src = img.src.replace("-thumbnail.jpeg", "-full.jpeg");
            const alt = img.alt;
            const viewer = viewerTemplate(src, alt);
            document.body.insertAdjacentHTML("afterbegin", viewer);
            document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        }
    }

    function closeViewer() {
        document.querySelector(".viewer").remove();
    }

    document.querySelector(".gallery").addEventListener("click", viewHandler);
});
