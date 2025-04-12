// Demo button functionality
document.addEventListener('DOMContentLoaded', function() {
    const demoBtns = document.querySelectorAll('.demo-btn');
    const constructionOverlay = document.getElementById('constructionOverlay');
    const closeOverlay = document.getElementById('closeOverlay');

    // Open construction overlay when demo buttons are clicked
    demoBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            constructionOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close construction overlay
    closeOverlay.addEventListener('click', function() {
        constructionOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Notify form submission
    const notifyForm = document.getElementById('notify-form');
    notifyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! We will notify you when our app launches.');
        notifyForm.reset();
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.background = 'var(--white)';
        }
    });
});