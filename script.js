// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle (Simplified)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if(window.innerWidth < 992) {
            navLinks.style.display = 'none';
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic Validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        showStatus('Por favor, completa todos los campos.', 'error');
        return;
    }

    // Button loading state
    const submitBtn = contactForm.querySelector('button');
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Enviando...</span>';
    submitBtn.disabled = true;

    // Simulate form submission (Integrating with Formspree or similar in real usage)
    // To make it fully functional, the user would replace the URL below with their Formspree ID
    /*
    try {
        const response = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            showStatus('¡Mensaje enviado con éxito! Me pondré en contacto pronto.', 'success');
            contactForm.reset();
        } else {
            showStatus('Hubo un error al enviar el mensaje. Inténtalo de nuevo.', 'error');
        }
    } catch (error) {
        showStatus('Error de conexión. Inténtalo más tarde.', 'error');
    }
    */

    // For demonstration/initial setup, simulate success:
    setTimeout(() => {
        showStatus('¡Gracias Martha! El formulario ha sido configurado. (Simulación de envío a marthaceci.pacheco@gmail.com)', 'success');
        submitBtn.innerHTML = originalBtnContent;
        submitBtn.disabled = false;
        contactForm.reset();
    }, 1500);
});

function showStatus(message, type) {
    formStatus.innerText = message;
    formStatus.style.display = 'block';
    formStatus.style.backgroundColor = type === 'success' ? '#DEF7ED' : '#FEE2E2';
    formStatus.style.color = type === 'success' ? '#166534' : '#991B1B';
    
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}
