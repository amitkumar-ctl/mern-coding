export const questionData = {
  title: "Build a Responsive Landing Page",
  description:
    "Create a modern, responsive landing page for a tech startup. The page should include a hero section, features section, and contact form. Use HTML5, CSS3 with Flexbox/Grid, and vanilla JavaScript for interactivity.",
  requirements: [
    "Mobile-first responsive design",
    "Hero section with call-to-action",
    "Features section with cards",
    "Contact form with validation",
    "Smooth scrolling navigation",
    "Modern CSS animations",
  ],
  difficulty: "Intermediate",
};

export const initialFiles = {
  "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechStart - Innovation Begins Here</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <h1 class="nav-logo">TechStart</h1>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section id="home" class="hero">
        <div class="hero-container">
            <h1 class="hero-title">Innovation Begins Here</h1>
            <p class="hero-subtitle">Transform your ideas into reality with cutting-edge technology solutions</p>
            <button class="cta-button" onclick="scrollToSection('contact')">Get Started</button>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2 class="section-title">Our Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <h3>Fast Development</h3>
                    <p>Rapid prototyping and development with modern tools</p>
                </div>
                <div class="feature-card">
                    <h3>Scalable Solutions</h3>
                    <p>Built to grow with your business needs</p>
                </div>
                <div class="feature-card">
                    <h3>24/7 Support</h3>
                    <p>Round-the-clock technical support and maintenance</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Contact Us</h2>
            <div class="contact-form" id="contactForm">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="button" onclick="submitForm()">Send Message</button>
            </div>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>`,

  "styles.css": `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    background: #2c3e50;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.8rem;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #3498db;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 150px 0 100px;
    text-align: center;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.hero-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s both;
}

.cta-button {
    background: #e74c3c;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
    animation: fadeInUp 1s ease 0.4s both;
}

.cta-button:hover {
    background: #c0392b;
}

/* Features Section */
.features {
    padding: 80px 0;
    background: #f8f9fa;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

/* Contact Section */
.contact {
    padding: 80px 0;
    background: #2c3e50;
    color: white;
}

.contact .section-title {
    color: white;
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
}

.contact-form textarea {
    height: 120px;
    resize: vertical;
}

.contact-form button {
    background: #3498db;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s;
}

.contact-form button:hover {
    background: #2980b9;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
        gap: 1rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
}`,

  "script.js": `// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Form validation and submission
function submitForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    if (isValid) {
        alert('Message sent successfully!');
        inputs.forEach(input => input.value = '');
    } else {
        alert('Please fill in all fields.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website loaded successfully!');
    
    // Add active class to navigation links on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add some interactivity to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});`,
};
