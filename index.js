
      var fm1 = new FluidMeter();
      var fm2 = new FluidMeter();
      var fm3 = new FluidMeter();

      fm1.init({
        targetContainer: document.getElementById("card-1"),
        fillPercentage: 80,
        options: {
          fontSize: "45px",
          fontFamily: "Questrial",
          fontFillStyle: "white",
          drawShadow: true,
          drawText: true,
          drawPercentageSign: true,
          drawBubbles: true,
          size: 270,
          borderWidth: 10,
          backgroundColor: "#e2e2e2",
          foregroundColor: "#fafafa",
          foregroundFluidLayer: {
            fillStyle: "#393e46", //chnage this
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
          },
          backgroundFluidLayer: {
            fillStyle: "#929aab", //change this
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
          }
        }
      });
      fm2.init({
        targetContainer: document.getElementById("card-2"),
        fillPercentage: 75,
        options: {
          fontSize: "45px",
          fontFamily: "Questrial",
          fontFillStyle: "white",
          drawShadow: true,
          drawText: true,
          drawPercentageSign: true,
          drawBubbles: true,
          size: 270,
          borderWidth: 10,
          backgroundColor: "#e2e2e2",
          foregroundColor: "#fafafa",
          foregroundFluidLayer: {
            fillStyle: "#393e46", //chnage this
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
          },
          backgroundFluidLayer: {
            fillStyle: "#929aab", //change this
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
          }
        }
      });
      fm3.init({
        targetContainer: document.getElementById("card-3"),
        fillPercentage: 55,
        options: {
          fontSize: "45px",
          fontFamily: "Questrial",
          fontFillStyle: "white",
          drawShadow: true,
          drawText: true,
          drawPercentageSign: true,
          drawBubbles: true,
          size: 270,
          borderWidth: 10,
          backgroundColor: "#e2e2e2",
          foregroundColor: "#fafafa",
          foregroundFluidLayer: {
            fillStyle: "#393e46", //chnage this
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
          },
          backgroundFluidLayer: {
            fillStyle: "#929aab", //change this
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
          }
        }
      });
      
      

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
      } else {
        document.getElementById("movetop").style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Production Engineer"];
    const typingDelay = 200;
    const erasingDelay = 10;
    const newTextDelay = 100; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        // add class 'typing' if there's none
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay);
      }
    }

    document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
      if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
    $(document).ready(function () {
      $('.owl-two').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          480: {
            items: 1,
            nav: false
          },
          700: {
            items: 1,
            nav: false
          },
          1090: {
            items: 3,
            nav: false
          }
        }
      })
    })

    $(document).ready(function () {
      $("#owl-demo1").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          736: {
            items: 1,
            nav: false
          },
          1000: {
            items: 2,
            nav: false,
            loop: false
          }
        }
      })
    })

    $(document).ready(function () {
      $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

      $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
      });
    });

    $('.counter').countUp();

    $(function () {
      $('.navbar-toggler').click(function () {
        $('body').toggleClass('noscroll');
      })
    });

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
      } else {
        $("#site-header").removeClass("nav-fixed");
      }
    });

    //Main navigation Active Class Add Remove
    $(".navbar-toggler").on("click", function () {
      $("header").toggleClass("active");
    });
    $(document).on("ready", function () {
      if ($(window).width() > 991) {
        $("header").removeClass("active");
      }
      $(window).on("resize", function () {
        if ($(window).width() > 991) {
          $("header").removeClass("active");
        }
      });
    });