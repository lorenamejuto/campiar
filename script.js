//Smooth scroll
function smoothScroll() {
    $('.scrollTo').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });
}

function toggleMenuElements() {
  $('header .menu').toggle();
  $('.navbar-toggler').toggleClass('menu-animation');
  $('body').toggleClass('fixed-body');
}

//Despliega el menú mobile
function mobileMenu() {
  $('.navbar-toggler').click(function(){
    toggleMenuElements();
  });
}

//Cierra el menu en el click del boton en mobile
function closeMenuOnAnchor() {
  if ($(window).width() < 769){
    $('header nav li a').each(function() {
      $(this).click(function(){
        toggleMenuElements();
      });
    });
  }
}

//Funciones que se llaman en el document ready
$(document).ready(function() {
    smoothScroll();
    mobileMenu();
    closeMenuOnAnchor();
    sectionHeight();
});

//Funciones que se llaman en el windows resize
$(window).on('resize', function(){
  closeMenuOnAnchor();
});

//Fija el header en el scroll
window.onscroll = function() {fixHeaderOnScroll()};
var header = document.querySelector('header');
var sticky = header.offsetTop;

function fixHeaderOnScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stickyHeader");
  } else {
    header.classList.remove("stickyHeader");
  }
}

//Función Instagram
$(function()
{
  var token = '9620084259.2cdbfb5.ea130618b23e46a492047b10793a703e',
      container = document.getElementById('instaWidgetMedia'),
      scrElement2 = document.createElement( 'script' ),
      num_photos = 5, // maximum 20
      scrElement = document.createElement( 'script' );
   
  scrElement2.setAttribute( 'src', 'https://api.instagram.com/v1/users/self?access_token=' + token + '&callback=instagramPutProfile' );
  document.body.appendChild( scrElement2 );

  window.instagramPutMedia = function( data ) {
    for( x in data.data ){
      container.innerHTML += '<li><a href="'+data.data[x].link+'" target="_BLANK"><div class="img-background" style="background-image: url(' + data.data[x].images.low_resolution.url + ');"></div></a></li>';
    }
  }
   
  scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=instagramPutMedia' );
  document.body.appendChild( scrElement );
});

