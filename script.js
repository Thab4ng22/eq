const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(reveal => observer.observe(reveal));

const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you. Your enquiry has been received.');
  form.reset();
});
