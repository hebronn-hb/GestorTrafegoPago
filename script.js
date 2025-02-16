document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Simple Case Slider (you might want to use a library for a more robust slider)
  const casesSlider = document.querySelector('.cases-slider');
  if (casesSlider) {
    let scrollPosition = 0;
    const caseWidth = document.querySelector('.case').offsetWidth + 20; // Add margin

    // Basic "Next" button functionality (you'd likely want to enhance this)
    casesSlider.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollPosition += e.deltaY; // Adjust scroll speed
      casesSlider.scrollLeft = scrollPosition;
    });
  }
});