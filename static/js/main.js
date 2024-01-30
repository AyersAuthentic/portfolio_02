/**
 * Template Name: MyPortfolio
 * Updated: Jan 09 2024 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  // List of taglines
  const taglines = [
    "Crafting Predictive Models for Strategic Insights",
    "Transforming Big Data into Intelligent Action",
    "Deploying Machine Learning for Real-World Solutions",
    "Engineering Data-Driven Innovations",
    // Add more taglines as needed
  ];

  // Initialize the current tagline index
  let currentTaglineIndex = 0; // Starts from the first tagline

  // Function to change tagline
  function changeTagline() {
    // Get the tagline element by ID
    const taglineElement = document.getElementById("tagline");

    // Fade out the tagline, then change the text and fade it back in
    taglineElement.style.opacity = 0; // Fade out the current tagline

    setTimeout(() => {
      currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length; // Move to the next tagline
      taglineElement.textContent = taglines[currentTaglineIndex]; // Change the text
      taglineElement.style.opacity = 1; // Fade in the new tagline
    }, 1000); // The delay should match the CSS transition time
  }

  // Event listener for DOMContentLoaded to set the initial tagline
  document.addEventListener("DOMContentLoaded", (event) => {
    changeTagline(); // Call changeTagline to set the initial tagline and start the cycle
  });

  // Set interval to change tagline every 5 seconds, after the transition
  setInterval(changeTagline, 6000); // Includes transition time of 0.5s

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * burgerMenu
   */
  const burgerMenu = select(".burger");
  on("click", ".burger", function (e) {
    burgerMenu.classList.toggle("active");
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select("#portfolio-grid");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".item",
      });

      let portfolioFilters = select("#filters a", true);

      on(
        "click",
        "#filters a",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("active");
          });
          this.classList.add("active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 500,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
