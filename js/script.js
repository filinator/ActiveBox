$(document).ready(function() {
    
    $('.slider').slick({
            arrows:false,
            dots: true,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 4000,
        });
        
        
        
        $('.header__burger').click(function(event) {
          $('.header__burger,.about__navigation_link,.about__content').toggleClass('active');
        });
        });