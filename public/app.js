const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    const mainNav = document.querySelectorAll('.main-nav li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
		mainNav.forEach((link, index) => {
			link.style.animation = `mainNavFade 0.5s ease forwards ${(index/6)+0.5}s`;
		});
		burger.classList.toggle('toggle');
    });
}

navSlide();

$(document).ready(function() {    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});

document.getElementById("btn-contact").onclick = function () {
    $('html, body').animate({scrollTop: $('.contact').offset().top}, 1000);
};

document.getElementById("btn-explore").onclick = function () {
     console.log(100);
   $('html, body').animate({scrollTop: $('.product').offset().top}, 1000); 
};
    