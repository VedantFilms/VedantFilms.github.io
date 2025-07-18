const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('.sidebar nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.remove('active');
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
