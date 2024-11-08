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

/* leader jquery start*/
$('.parent-leader').slick({
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
         slidesToShow: 2,
         slidesToScroll: 2,
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

/* leader jquery end*/

//insta jquery start
$(function(){
  $('.insta-parent').slick({
    dots: true,               
    infinite: true,
    arrows:false,
    dotsClass:"container dot-active",            
    speed: 500,                
    autoplay: true,            
    autoplaySpeed: 3000,       
    slidesToShow: 6,         
    slidesToScroll: 6, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
        
  });
          
});
/* insta jquery end*/