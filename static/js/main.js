document.addEventListener("DOMContentLoaded", () => {
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");
    const sidebar = document.querySelector(".sidebar");

    openMenu.addEventListener("click", () => {
        sidebar.style.display = "block";
    });

    closeMenu.addEventListener("click", () => {
        sidebar.style.display = "none";
    });

    document.querySelectorAll(".sidebar .link").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.style.display = "none";
        });
    });

    // Scroll animations
    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2,
    });

    animatedElements.forEach(el => observer.observe(el));
});
