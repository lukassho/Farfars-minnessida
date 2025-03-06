document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => { 
                    entry.target.classList.add("visible");
                }, 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in-long");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => { 
                    entry.target.classList.add("visible");
                }, 300);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });

    fadeElements.forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    const charCount = document.getElementById("char-count");

    messageInput.addEventListener("input", function () {
        const currentLength = messageInput.value.length;
        charCount.textContent = `${currentLength} / 200`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");
    const charCount = document.getElementById("char-count");
    const formStatus = document.getElementById("my-form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Förhindrar standardbeteendet

        // Skicka formuläret via Formspree
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Tömmer formuläret
                charCount.textContent = "0 / 200"; // Återställ räkningen
                formStatus.textContent = "Tack! Ditt minne har skickats.";
                formStatus.classList.add("success-message"); // Lägg till CSS-klass
            } else {
                formStatus.textContent = "Något gick fel. Försök igen.";
                formStatus.classList.add("error-message"); // Lägg till CSS-klass
            }
        }).catch(error => {
            formStatus.textContent = "Något gick fel. Försök igen.";
            formStatus.classList.add("error-message"); // Lägg till CSS-klass
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("poul.html")) { 
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.addEventListener("scroll", function () {
            let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPosition > 200) {  
                scrollToTopBtn.classList.add("show");
            } else {
                scrollToTopBtn.classList.remove("show");
            }
        });

        scrollToTopBtn.addEventListener("click", function () {
            smoothScrollToTop();
        });

        function smoothScrollToTop() {
            let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPosition > 0) {
                window.scrollBy(0, -scrollPosition / 15); // Minska farten
                requestAnimationFrame(smoothScrollToTop);
            }
        }
    }
});





