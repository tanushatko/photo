/*new AnimOnScroll( document.getElementById( 'grid' ), {
  minDuration : 0.4,
  maxDuration : 0.7,
  viewportFactor : 0.2
} );
*/

$(document).ready(function(){
  $('.myslider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// When the window has finished loading create our google map below
function initMap() {
  // The location of Uluru
  var markerImage = 'https://img.icons8.com/dusk/60/000000/marker.png';
  var uluru = {lat: 48.918024, lng: 24.703827};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map-box'), {zoom: 16, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map, icon: markerImage, title: 'We are there! (c)Andrey Guchok'});
}
