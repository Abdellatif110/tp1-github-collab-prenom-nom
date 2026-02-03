document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation on load
    const reveals = document.querySelectorAll('.reveal');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    reveals.forEach((el, index) => {
        // Staggered delay for hero elements
        el.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fetch message from Backend
    fetch('/api/message')
        .then(response => response.json())
        .then(data => {
            const messageEl = document.getElementById('backend-message');
            if (messageEl) {
                messageEl.textContent = data.message;
            }
        })
        .catch(err => console.error('Erreur backend:', err));
});
