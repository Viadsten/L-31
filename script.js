var navToggle = document.querySelector(".header__toggle");
var mainNav = document.querySelector(".header__site-list");

navToggle.addEventListener('click', function(){
  if (navToggle.classList.contains('toggle_active'))
  {
    $("#navigation").slideUp('300');
    navToggle.classList.remove('toggle_active');
  }
  else{
    $("#navigation").slideDown('300');
    navToggle.classList.add('toggle_active');
    mainNav.style.display = "flex";

  }
});

var cachedWidth = $(window).width();
$(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
      $(window).resize(function() {
        if(document.documentElement.clientWidth > 767) {
          mainNav.style.display = "flex";
        }
      });

      $(window).resize(function() {
        if(document.documentElement.clientWidth < 767) {
          mainNav.style.display = "none";
          navToggle.classList.remove('toggle_active');
        }
      });
        cachedWidth = newWidth;
    }
});
