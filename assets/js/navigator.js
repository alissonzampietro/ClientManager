var position = -1;

function move(position) {
    $('tr').removeClass('hover');
    $('*[data-position="'+position+'"]').addClass('hover');
}

$(document).keydown(function(e){
    var lengthTr = $(".all").length;
    switch(e.keyCode){
      case 13:
          if($(".hover").length == 1){
            $(".hover > .editar").trigger("click");
          }
      case 27:
          position = -1;
          $('tr').removeClass('hover');
        break;
      case 38:
          if(position > 0){
            position--;
            move(position);
          }
        break;
      case 40:
          if((position+1) < lengthTr) {
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
