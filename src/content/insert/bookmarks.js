$(document).ready(function(){

  setInterval(function() {
    if ($('.content-info--full').length !== 0) {
      if ($('.bookmarks_return').length == 0) {
        var parse = $('.entry_data').attr("data-article-info");
        parse = JSON.parse(parse);
        $('.bookmark--type-content').append('<div class="v-repost__counter bookmarks_return">' + parse.favorites + '</div>');
      }
    }
  }, 1000);
});