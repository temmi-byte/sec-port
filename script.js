
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 5s ease';

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500); // match transition duration
});


// Subtle parallax effect for background
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth * 30;
  const y = e.clientY / window.innerHeight * 30;

  document.querySelector(".bg").style.transform =
    `translate(${x}px, ${y}px)`;
});

document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  // Toggle sidebar
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Close sidebar when overlay is clicked
  overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Close sidebar when a link is clicked
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});
