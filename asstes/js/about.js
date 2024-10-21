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

//sticy nav
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.style.top = '-100px'; // Hide the navbar
  } else {
    // Scrolling up
    navbar.style.top = '0'; // Show the navbar
  }
  lastScrollY = window.scrollY;
});

//nav end