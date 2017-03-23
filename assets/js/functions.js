$( document ).ready(function() {

  $('.menuclick').click(function(){
    $('.overlay').css( "display", "block" );
    $('.menubox').css( "display", "block" );
  });


  $('#say').click(function(){
    $('.overlay').css( "display", "block" );
    $('.say').css( "display", "block" );
  });




  $('.x').click(function(){
    $('.overlay').css( "display", "none" );
    $('.say').css( "display", "none" );
    $('.menubox').css( "display", "none" );
  });


  $('.happinesst').click(function(){
    $('.happiness').css('display', 'block');
    $('.innovation').css('display', 'none');
    $('.caring').css('display', 'none');
    $('.over').css('display', 'none');
    $('.tracendence').css('display', 'none');

    $('.happinesst').css('color', '#dce442');
    $('.innovationt').css('color', '#00556f');
    $('.caringt').css('color', '#00556f');
    $('.overt').css('color', '#00556f');
    $('.tracendencet').css('color', '#00556f');
  });

  $('.innovationt').click(function(){
    $('.happiness').css('display', 'none');
    $('.innovation').css('display', 'block');
    $('.caring').css('display', 'none');
    $('.over').css('display', 'none');
    $('.tracendence').css('display', 'none');


    $('.happinesst').css('color', '#00556f');
    $('.innovationt').css('color', '#dce442');
    $('.caringt').css('color', '#00556f');
    $('.overt').css('color', '#00556f');
    $('.tracendencet').css('color', '#00556f');
  });

  $('.caringt').click(function(){
    $('.happiness').css('display', 'none');
    $('.innovation').css('display', 'none');
    $('.caring').css('display', 'block');
    $('.over').css('display', 'none');
    $('.tracendence').css('display', 'none');

    $('.happinesst').css('color', '#00556f');
    $('.innovationt').css('color', '#00556f');
    $('.caringt').css('color', '#dce442');
    $('.overt').css('color', '#00556f');
    $('.tracendencet').css('color', '#00556f');
  });

  $('.overt').click(function(){
    $('.happiness').css('display', 'none');
    $('.innovation').css('display', 'none');
    $('.caring').css('display', 'none');
    $('.over').css('display', 'block');
    $('.tracendence').css('display', 'none');

    $('.happinesst').css('color', '#00556f');
    $('.innovationt').css('color', '#00556f');
    $('.caringt').css('color', '#00556f');
    $('.overt').css('color', '#dce442');
    $('.tracendencet').css('color', '#00556f');
  });

  $('.tracendencet').click(function(){
    $('.happiness').css('display', 'none');
    $('.innovation').css('display', 'none');
    $('.caring').css('display', 'none');
    $('.over').css('display', 'none');
    $('.tracendence').css('display', 'block');

    $('.happinesst').css('color', '#00556f');
    $('.innovationt').css('color', '#00556f');
    $('.caringt').css('color', '#00556f');
    $('.overt').css('color', '#00556f');
    $('.tracendencet').css('color', '#dce442');
  });








});
