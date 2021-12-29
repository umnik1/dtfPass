$(document).ready(function(){
  setInterval(function() {
    $(".content-feed").each(function() {
      var blacklist = $(".postBlacklist").val();
      blacklist = "[" + blacklist + "]";

      if ($(this).hasClass("content-feed--unknown")) {
        var url = $(this).find('.content-header-author--subsite').attr("href");
      } else {
        var url = $(this).find('.content-header-author--user').attr("href");
      }
      
      if (url) {
        var userid = url.split("/u/").pop();
        userid = userid.split("-")[0];
        var check = blacklist.includes(userid);
        if (check) {
          $(this).css('display', 'none');
        }
      }
    });
    $(".comment").each(function() {
      var blacklist = $(".commentBlacklist").val();
      blacklist = "[" + blacklist + "]";

      var userid = $(this).attr("data-user_id");
      var check = blacklist.includes(userid);
      if (check) {
        $(this).find('.comment__content').html("<p style='margin: 20px;font-style: italic;'>Комментарий скрыт. Вы добавили данного пользователя в Чёрный список.</p>");
        // $(this).css('display', 'none');
      }
    });
  }, 1000);
});