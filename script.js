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
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 450) { 
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("scroll", function () {
    let arrow = document.getElementById("arrowdwn");
    if (window.scrollY > 80) { // Om sidan scrollas ner 50px eller mer
        arrow.style.display = "none"; // Dölj pilen
    } else {
        arrow.style.display = "block"; // Visa pilen igen om man scrollar upp
    }
});
