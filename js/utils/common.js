


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems);
  var cursor = $("cursor");
  cursor.style.left = "0px";
});

function $(elid) {
  return document.getElementById(elid);
}



