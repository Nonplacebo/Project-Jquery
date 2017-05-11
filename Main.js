$(document).ready(function(){

var num = prompt('Change Pixels', 'Enter a number between 1-64');
var numRatio = num/16;

$('.change').on('click', function(){

});


// take width of container, divide into square pixels, 16x16, 64x64, 4x4
for (var i=0; i < Math.pow(num, 2); i++) {
  $(".container").append('<span class="block"></span>');
}

$('.block').hover( function(){
  $(this).css('background-color', 'red');
});

$('.clear').on('click', function(){
  $('.block').css('background-color', 'white');
});

//set size of "pixel"
$('.block').css('height', 50/numRatio);
$('.block').css('width', 50/numRatio)




});
