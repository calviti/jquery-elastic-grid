$(document).ready(function() {
  var items = [];
  $.ajax({
    type: 'GET',
    url: 'json/gallery.json',
    dataType: 'json',
    success: function(json) {
      items = json;
      $("#elastic_grid_demo").elastic_grid({
        'showAllText': 'All',
        'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        'hoverDirection': true,
        'hoverDelay': 0,
        'hoverInverse': false,
        'expandingSpeed': 500,
        'expandingHeight': 500,
        'items': items

      });
    }
  });
});
