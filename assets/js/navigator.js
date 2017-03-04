var position = 0;
var lengthTr = $("tbody tr").length / 2

function mover(position) {
    $('tr').removeClass('hover');
    $('*[data-position="'+position+'"]').addClass('hover');
}

$(document).keydown(function(e){
    console.log(e.keyCode);
    switch(e.keyCode){
      case 27:
          position = 0;
          $('tr').removeClass('hover');
        break;
      case 38:
          if(position > 1){
            position--;
            mover(position);
          }
        break;
      case 40:
          if(position < lengthTr) {
            position++;
            mover(position);
          }
        break;
    }
});

$('tr').hover(function() {
    position = 0;
    $('tr').removeClass('hover');
});
