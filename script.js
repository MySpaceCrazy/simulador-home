window.addEventListener("scroll", () => {
    const header = document.querySelector(".hero h1");
    if (window.scrollY > 50) {
        header.style.opacity = "0.5";
    } else {
        header.style.opacity = "1";
    }
});
