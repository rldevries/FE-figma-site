const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") 
        ? navToggle.setAttribute("aria-expanded", false) 
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,  // all below - default to lowest display
    dots: true,             // " "
    centerMode: true,       // " "
    arrows: false,          // Next / Prev labels disappear 
    responsive: {
        480: {          // displays > 480px
          dots: false, // dots disabled 1280px and up
          arrows: true,     // Next / Prev labels for > 480px
        },
      },
}); 