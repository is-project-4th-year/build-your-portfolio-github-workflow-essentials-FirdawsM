// Project Card Interactions
document.querySelectorAll('.project-card').forEach(card => {
  // Add clickable whole card effect
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    if (!e.target.closest('a')) { // Don't trigger if clicking a link
      const link = card.querySelector('.project-link');
      if (link) window.location.href = link.href;
    }
  });

  document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});
// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

  // Dynamic tag coloring
  const tags = card.querySelectorAll('.project-tags span');
  tags.forEach(tag => {
    const randomHue = Math.floor(Math.random() * 360);
    tag.style.backgroundColor = `hsla(${randomHue}, 80%, 90%, 1)`;
    tag.style.color = `hsl(${randomHue}, 60%, 30%)`;
  });
});

// Animate project links on hover
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'translateX(5px)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'translateX(0)';
  });
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Dynamic year in footer (if you add one)
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
document.body.appendChild(document.createElement('footer'))
  .appendChild(document.createElement('div'))
  .appendChild(yearSpan);

  // Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send to a server
    console.log('Form submitted:', data);
    
    // Show success message
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.innerHTML = 'Message Sent!';
    submitBtn.style.backgroundColor = '#4BB543';
    
    // Reset form after 2 seconds
    setTimeout(() => {
      this.reset();
      submitBtn.innerHTML = 'Send Message <svg>...</svg>';
      submitBtn.style.backgroundColor = '';
    }, 2000);
  });
}
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
  const typewriterElements = document.querySelectorAll('.typewriter');
  
  typewriterElements.forEach(el => {
    const words = JSON.parse(el.getAttribute('data-words'));
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        el.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        el.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }
      
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before typing next word
      }
      
      setTimeout(type, typingSpeed);
    }
    
    // Start the typewriter effect
    setTimeout(type, 1000);
  });
});