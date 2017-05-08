$(document).ready(function(){

for (var i = 0; i < 256; i++) {
  $('.container').append('<div class="block"></div>');
}

$('.block').hover( function(){
  $(this).css("background-color", "red");
});

$('button').on('click', function(){

  $('.block').css("background-color", "lavender");

});

});
