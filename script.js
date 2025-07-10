document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Simple Testimonial Slider (Optional - More advanced sliders would need a library or more complex JS)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        // You can add logic here for auto-scrolling, navigation arrows, or dots
        // For now, it's just a horizontally scrollable container.
        // A more robust solution would involve dynamically changing 'transform: translateX()'
        // or using a library like Swiper.js for advanced slider features.
    }

    // Lazy Loading for Images (for faster loading times)
    const lazyImages = document.querySelectorAll('img'); // Select all images initially

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src'); // Assuming you'd add data-src attribute to images
                if (src) {
                    img.src = src;
                    img.classList.add('loaded'); // Add a class for loaded images if needed
                    observer.unobserve(img); // Stop observing once loaded
                }
            }
        });
    });

    lazyImages.forEach(img => {
        // For initial setup, add 'data-src' to your image tags instead of 'src'
        // Example: <img data-src="images/dreadlock_style_1.jpg" alt="Dreadlock Style 1">
        // And remember to set a small placeholder 'src' or a 'background-color' in CSS for images before they load.
        // Alternatively, if you're not using data-src, you could just observe all images
        // and let the browser's native lazy loading handle it if you include 'loading="lazy"' in your HTML img tags.
        // For demonstration, let's just observe all images for now.
        // If you want proper lazy loading, you MUST use data-src and a placeholder src.
        imageObserver.observe(img);
    });

    // Form Submission (Basic - you'd need a backend service for actual email sending)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you'd send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }

    // Instagram Feed (Conceptual - requires Instagram Basic Display API or a third-party service)
    // Embedding an Instagram feed securely and reliably often requires using their API
    // or a service that handles the API integration for you (e.g., LightWidget, SnapWidget).
    // Direct embedding with client-side JavaScript is difficult due to API limitations and CORS policies.

    // function loadInstagramFeed() {
    //     // This would involve making an API call to Instagram's Basic Display API
    //     // after a user has authorized your app. This is complex and requires
    //     // server-side components for token handling.
    //     console.log("Instagram feed loading functionality goes here (requires API integration).");
    //     // Placeholder for what the structure might look like
    //     const instagramContainer = document.createElement('div');
    //     instagramContainer.innerHTML = `<p style="text-align: center; color: #555;">Follow us on Instagram for live updates!</p>
    //                                     <a href="https://instagram.com/blackrosesalon" target="_blank" style="display: block; text-align: center;">@blackrosesalon</a>`;
    //     // You'd append this to a specific section in your HTML
    //     // document.querySelector('#instagram-feed-section').appendChild(instagramContainer);
    // }
    // loadInstagramFeed(); // Call this function if you have the API setup
});