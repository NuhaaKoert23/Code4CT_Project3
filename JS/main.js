$(document).ready(function(){
  $slides = $('.slides');
  $slides.bind('contentchanged', function(){
    animate($slides);
  });
  animate($slides);
});

function animate($slides){
  var slidesLength = $slides.find('li').length;
  if(slidesLength>4){
    $slides.find('li:nth-last-child(-n+4)').clone().prependTo($slides);
    $slides.addClass('.animate');
    $slides.css('animation-duration', slidesLength*3+'s');
  }
}