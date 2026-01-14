window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollThreshold = 50;

  // Toggle the "scrolled" class based on the scroll position
  navbar.classList.toggle("scrolled", window.scrollY > scrollThreshold);
});

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});