$(function() {
  $('.btn button').click(function(){
    var get_id = this.id;
    var get_current = $('.fotos .' + get_id);

    $('.foto').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#showall').click(function(){
    $('.foto').show(500);
  })
})