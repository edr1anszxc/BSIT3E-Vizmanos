// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Remove the # symbol
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust for the nav height
            behavior: 'smooth'
        });
    });
});

// Contact form validation and submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
    }

    // Example of form submission logic (e.g., send an email or save the data)
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);

    // Clear form fields after submission
    form.reset();
});