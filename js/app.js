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
    const dotContainer = slideshow.querySelector('.dot-container');
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotContainer.appendChild(dot);
    });

    function goToSlide(n) {
      slides[currentSlide].classList.remove('active');
      dotContainer.children[currentSlide].classList.remove('active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dotContainer.children[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function stopSlideshow() {
      clearInterval(slideInterval);
    }

    slideshow.addEventListener('mouseenter', stopSlideshow);
    slideshow.addEventListener('mouseleave', startSlideshow);

    startSlideshow();
  });
});
