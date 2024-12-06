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

// Function to update the large image
function showImage(imgElement) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = imgElement.src;
}

// Slider navigation logic
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true, // Enable navigation arrows
    prevArrow: '<button class="slider-nav prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="slider-nav next"><i class="fa fa-chevron-right"></i></button>',
    dots: false, // Disable dots (optional)
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // Adjust for tablet
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Adjust for mobile
        },
      },
    ],
  });

  // Change main image on thumbnail click
  $('.slider img').on('click', function () {
    const newSrc = $(this).attr('src');
    $('#mainImage').attr('src', newSrc);
  });
});

//jacket quantity section
function updateQuantity(change) {
  const quantityInput = document.getElementById("quantity");
  let currentQuantity = parseInt(quantityInput.value);

  // Update quantity with boundary checks
  currentQuantity += change;
  if (currentQuantity < 1) currentQuantity = 1; // Minimum value is 1
  quantityInput.value = currentQuantity;
}
