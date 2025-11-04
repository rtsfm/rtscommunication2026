// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // "Voir plus" button functionality
    const btnMore = document.getElementById('btnMore');
    const aboutFull = document.getElementById('aboutFull');
    const aboutPreview = document.querySelector('.about-preview');

    if (btnMore && aboutFull && aboutPreview) {
        btnMore.addEventListener('click', function() {
            // Toggle full content visibility
            aboutFull.classList.add('active');
            
            // Hide the button
            btnMore.classList.add('active');
            
            // Hide the preview
            aboutPreview.style.display = 'none';
        });
    }

    // Smooth scroll for anchor links (if any are added in the future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
