document.addEventListener('DOMContentLoaded', function () {
    // Mobile navigation toggle
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.addEventListener('click', function () {
            const open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // Contact form (simulated submission)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            document.getElementById('formStatus').textContent =
                'Thank you for reaching out! We will contact you within one business day.';
            form.reset();
        });
    }
});
