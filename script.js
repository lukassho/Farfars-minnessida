document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => { 
                    entry.target.classList.add("visible");
                }, 200); // Fördröjning i millisekunder (500ms = 0.5 sekunder)

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

