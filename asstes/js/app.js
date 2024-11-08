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


/** banner jquery*/
$(function(){
   $('.parent').slick({
      dots:true,
      arrows:false,
      dotsClass:"container dots-active",
      autoplay: true,
      autoplaySpeed: 2000,
   });
}) 

 /**tooltip */
 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/**product jquery */
$('.parent-product').slick({
   infinite: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   arrows:true,
   prevArrow:`<i class="left-arrow fa-solid fa-chevron-left"></i>`,
   nextArrow:`<i class="right-arrow fa-solid fa-chevron-right"></i>`,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

 });

 //product jquery end

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
 

 //best-product jquery

 //jQuery  "dealbox" section end

 $(document).ready(function() {
  // Set the date we're counting down to
  var countdownDate = new Date("Oct 30, 2025 23:59:59").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the time difference between now and the countdown date
      var distance = countdownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the respective HTML elements
      $('.days').text(days);
      $('.hour').text(hours < 10 ? "0" + hours : hours); // Add leading zero
      $('.min').text(minutes < 10 ? "0" + minutes : minutes); // Add leading zero
      $('.sec').text(seconds < 10 ? "0" + seconds : seconds); // Add leading zero

      // If the countdown is over, stop the timer and display a message
      if (distance < 0) {
          clearInterval(x);
          $('.days').text('0');
          $('.hour').text('00');
          $('.min').text('00');
          $('.sec').text('00');
          $('.title h2').text('Deal Expired');
      }

  }, 1000); // Update every second
});

//timer end

//dealbox slick-slider jQuery
$(document).ready(function(){
  $('.wrapper').slick({
    dots: true,               
    infinite: true,
    arrows:false,
    dotsClass:"container dot-active",            
    speed: 500,                
    autoplay: true,            
    autoplaySpeed: 2000,       
    slidesToShow: 2,         
    slidesToScroll: 2          
  });
});

//latest news
$(function(){
  $('.latest-parent').slick({
    dots: true,               
    infinite: true,
    arrows:false,
    dotsClass:"container dot-active",            
    speed: 500,                
    autoplay: true,            
    autoplaySpeed: 2000,       
    slidesToShow: 4,         
    slidesToScroll: 4, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
        
  });
          
});

