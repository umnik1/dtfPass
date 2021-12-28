$(document).ready(function(){

  setInterval(function() {
    $(".content-feed").each(function() {
      var blacklist = ['365101', '139634'];

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
  }, 1000);
});