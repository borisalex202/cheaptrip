(function($) {

  $('.sidebar li.active a').on('click', function(){
    return false;
  });

  $('.sort-toggle').on('click', function(){
    $(this).toggleClass('active');
  });

  $('.icon-menu').on('click', function(){
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('active');
  });

  $('.icon-cross').on('click', function(){
    $(this).closest('.request-block, .bookmark').slideUp();
  });

  $('select').styler();
  $('[type="file"]').styler();
  $('.select-search').on('click', function(){
    $(this).find('.jq-selectbox__search input').focus();
  });

  $('.show-link').on('click', function(e){
    e.preventDefault();
    $(this).closest('.reserve-block').find('.reserve-request').slideToggle();
    $(this).text(function(i, text){
        return text === "Показать запрос" ? "Скрыть запрос" : "Показать запрос";
    })
  });
  $('.bookmark-comment-toggle').on('click', function(e){
    e.preventDefault();
    $(this).closest('.bookmark-comment').find('.bookmark-comment-block').slideToggle();
  });
  $('.switcher .icn, .switcher .text').on('click', function(){
    var textOn = $(this).closest('.switcher').data('text-on'),
        textOff = $(this).closest('.switcher').data('text-off');

    $(this).closest('.switcher').find('.text').text(function(i, text){
        return text === textOn ? textOff : textOn;
    });
  });

})(jQuery);
