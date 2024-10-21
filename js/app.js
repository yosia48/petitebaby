let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal('.banner-content, .newsletter, .blog-header', {delay: 200, origin: 'left'})
sr.reveal('.featured-left, .featured-right, .blog-card', {delay: 200, origin: 'top'})

document.addEventListener('DOMContentLoaded', function() {
  const slideshows = document.querySelectorAll('.slideshow-container');
  
  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('.slide');
    let currentSlide = 0;

    // Remove dot functionality
    // const dotContainer = slideshow.querySelector('.dot-container');
    // slides.forEach((_, index) => {
    //   const dot = document.createElement('div');
    //   dot.classList.add('dot');
    //   if (index === 0) dot.classList.add('active');
    //   dot.addEventListener('click', () => goToSlide(index));
    //   dotContainer.appendChild(dot);
    // });

    function goToSlide(n) {
      // Remove active class from current slide
      slides[currentSlide].classList.remove('active');
      
      // Update current slide index
      currentSlide = (n + slides.length) % slides.length;
      
      // Add active class to new current slide
      slides[currentSlide].classList.add('active');
    }

    // Start slideshow
    goToSlide(currentSlide); // Initialize the first slide

    // Automatic slideshow
    setInterval(() => {
      goToSlide(currentSlide + 1); // Move to the next slide every 3 seconds
    }, 3000); // Change the interval time as needed
  });
});
