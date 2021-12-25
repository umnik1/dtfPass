$(document).ready(function() {
  setInterval(function() {
    // Images
    $("img").each(function() {
      if (!$(this).hasClass("hd")) {
        if (this.src.includes("preview")) {
          var link = this.src.replace("/-/preview", "");
          // link = link.replace("/webp/", "/jpg/");
          $(this).addClass("hd");
          $(this).attr("src", link);
        }
      }
    });

    // Обложка
    if (window.location.href.indexOf("/u/") != -1) {
      if (!$(".v-header-cover").hasClass("hd")) {
        if ($(".v-header-cover").length) {
          $(".v-header-cover").addClass("hd");
          var bg = $(".v-header-cover")
            .css("background-image")
            .replace(/^url\(['"](.+)['"]\)/, "$1");
          if (bg.includes("scale_crop")) {
            bg = bg.replace("-/scale_crop/960/-/format/webp/", "format/png/");
            $(".v-header-cover").css("background-image", "url(" + bg + ")");
          }
        }
      }
    }
  }, 1000);
});
