document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      // specify options here
    });
    var elems_carousel = document.querySelectorAll('.carousel');
    var instances_carousel = M.Carousel.init(elems_carousel, {
      fullWidth: true,
      indicators: true,
  });
});