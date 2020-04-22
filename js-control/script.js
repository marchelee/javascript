/*
$(document).mousemove(function (e) {
  $(".box").css({
    left: e.pageX,
    top: e.pageY
  });
});
*/

$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      $(".box").animate({
        left: '-=50'
      });
      console.log("LEFT")
      break;
    case 38: // up
      $(".box").animate({
        top: '-=50'
      });
      console.log("UP")
      break;
    case 39: // right
      $(".box").animate({
        left: '+=50'
      });
      console.log("RIGHT")
      break;
    case 40: // down
      $(".box").animate({
        top: '+=50'
      });
      console.log("DOWN")
      break;
  }
});