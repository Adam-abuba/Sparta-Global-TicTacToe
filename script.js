var cross = true;
var naughts = false;
// var gamw = {
//   use
// }

var boxes = $(".box")




//
for (var i = 0; i < boxes.length; i++) {
  $(boxes[i]).click(function (event) {
    if(cross === true){

      cross = false;
      var box = $(this);
      $(box).html("X");
      $(box).off('click');
      naughts = true;

    }
    else if (naughts==true){
      var box = $(this);
      $(box).html("O");
      $(box).off('click');
      naughts = false;
      cross = true;

    }
  })
}

$('#reset').click(function () {
  // for (var i = 0; i < boxes.length; i++) {
        // var box = $(this);
        $(".box").html("");
        cross = true;
        naughts = false;

      // }
   });
// });
