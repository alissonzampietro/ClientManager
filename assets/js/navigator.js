var position = 0;
var lengthTr = $("tbody tr").length / 2

function move(position) {
    $('tr').removeClass('hover');
    $('*[data-position="'+position+'"]').addClass('hover');
}

$(document).keydown(function(e){
    switch(e.keyCode){
      case 27:
          position = 0;
          $('tr').removeClass('hover');
        break;
      case 38:
          if(position > 0){
            position--;
            move(position);
          }
        break;
      case 40:
          if(position < lengthTr) {
            position++;
            move(position);
          }
        break;
    }
});

$('tr').hover(function() {
    position = 0;
    $('tr').removeClass('hover');
});
