$(document).ready(function() {
  // Скачивание
  setInterval(function() {
    // Изображения
    $("img").each(function() {
      if (!$(this).hasClass("downloadbl")) {
        var link = this.src;
        link = link.split("/");
        link.splice(4);
        var fixed_link = "";
        for (var i = 0; i < link.length; i++) {
          fixed_link += link[i] + "/";
        }
        $(this)
          .parent()
          .parent()
          .after(
            "<a href='" +
              fixed_link +
              "' class='downloadbl_link'><p class='download_image' tagret='_blank'><svg class='icon icon--ui_download' width='20' height='20'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#ui_download'></use></svg></p></a>"
          );
        $(this).addClass("downloadbl");
      }
    });
    if ($(".content--full").length) {
      if ($(".content-footer__item--share").length) {
        if (!$(".item_download").length) {
          $(".content-footer__item--share").after(
            "<div class='content-footer__item item_download lm-hidden'><div title='Скачать все изображения' class='v-download'><div class='v-download__button'><svg height='21' width='19' class='icon icon--ui_download'><use xlink:href='#ui_download'></use></svg></div></div></div>"
          );
          $(document).on("click", ".v-download", function() {
            $(".downloadbl_link").each(function() {
              if (
                $(this)
                  .parent()
                  .hasClass("content-image")
              ) {
                var href = $(this).attr("href");
                console.log(href);
                window.open(href, "_blank");
              }
            });
          });
        }
      }
    }
  }, 1000);

  if (
    window.location.href.indexOf("leonardo.osnova.io") > -1 &&
    window.location.href.indexOf("format") === -1
  ) {
    var time = new Date().getTime() / 1000;
    saveAs(window.location.href, time + ".png");
    window.close();
  }
});
