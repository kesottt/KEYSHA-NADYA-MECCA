// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
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

// Filter portfolio items
const filterButtons = document.querySelectorAll('.portfolio-filter button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // active class
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      const cat = item.getAttribute('data-category');
      if (filter === 'all' || filter === cat) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Contact form submit (dummy)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim!');
  this.reset();
});
