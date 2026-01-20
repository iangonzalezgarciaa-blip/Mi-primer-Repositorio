// Agregar clase activa al navegar por secciones
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remover clase activa de todos
            navLinks.forEach(l => l.classList.remove('active'));
            // Agregar clase activa al clickeado
            this.classList.add('active');
        });
    });
});

// Animación de progress bars al llegar a la sección
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.style.animation = 'none';
                setTimeout(() => {
                    bar.style.animation = '';
                }, 10);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('#habilidades');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Smooth scroll personalizado
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

// Efecto hover en tarjetas
const cards = document.querySelectorAll('.experience-item, .education-item, .skill-category');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});
