/** SEARCH */
let searchBody = document.querySelector('.search-body');
let searchIcon = document.querySelector('.search-icon');
let searchCross = document.querySelector('.cross-btn');
let searchForm = document.querySelector('.search-form')
let searchFooter = document.querySelector('.search-footer')

function showSearchBody() {
  if (!searchBody.classList.contains('search-active')) {
      searchBody.classList.add('search-active');
      searchForm.classList.add('form-active');
  }
}

// Function to hide the search body
function hideSearchBody() {
  if (searchBody.classList.contains('search-active')) {
      searchBody.classList.remove('search-active');
      searchForm.classList.remove('form-active');
  }
}

// Event listener for the search icon in the footer
searchIcon.addEventListener('click', showSearchBody);

// Event listener for the cross button to hide the search body
searchCross.addEventListener('click', hideSearchBody);

// Event listener for the search footer
searchFooter.addEventListener("click", showSearchBody); // This show

/**SEARCH END */

// SCROLL INDICATOR

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//scroll indicator end


document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
      navbar.classList.add("navbar-hidden");
  } else {
      navbar.classList.remove("navbar-hidden");
  }
});

//nav end

// active button for card-image
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#cardCarousel");
    const pageNumbers = document.querySelectorAll(".page-number");

    // Listen for the slide event
    carousel.addEventListener("slide.bs.carousel", (event) => {
      const activeIndex = event.to; // Get the index of the active slide

      // Remove active class from all page numbers
      pageNumbers.forEach((page) => page.classList.remove("active"));

      // Add active class to the corresponding page number
      pageNumbers[activeIndex].classList.add("active");
    });
  });

//tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

