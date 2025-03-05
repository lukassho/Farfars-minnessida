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

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Förhindrar standardbeteendet (för att kunna hantera det manuellt)

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
                document.getElementById("my-form-status").textContent = "Tack! Ditt minne har skickats.";
            } else {
                document.getElementById("my-form-status").textContent = "Något gick fel. Försök igen.";
            }
        }).catch(error => {
            document.getElementById("my-form-status").textContent = "Något gick fel. Försök igen.";
        });
    });
});
