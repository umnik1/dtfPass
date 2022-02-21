$(document).ready(function(){
    var activeSide = '';
    var refreshIntervalId = setInterval(function() {
      if(window.location.href.indexOf("/popular") != -1 || window.location.href.indexOf("/all") != -1
      || window.location.href.indexOf("/new") != -1) {
        var tabs = `
          <div class="pass-dropdown">
            <span id="pass-splitter">Все посты</span>
            <div id="tabs" class="pass-dropdown-content">
              <a id="tab1">Все посты</a>
              <a id="tab2">Блог</a>
              <a id="tab3">Подсайты</a>
            </div>
          </div>
          <div class="tab-box" id="tab1C"></div>
          <div class="tab-box" id="tab2C"></div>
          <div class="tab-box" id="tab3C"></div>
        `;
        if ($('#tabs').length == 0) {
          $('.ui-filters').css('float', 'left');
          $(tabs).insertAfter( $( ".ui-filters" ) );
          $('#tabs li a:not(:first)').addClass('inactive');
          $('.tab-box').hide();
          $('.tab-box:first').show();
              
          $('#tabs a').click(function(){
            $('#pass-splitter').text($(this).text());
            $(".content-feed").removeClass("moved");
            var t = $(this).attr('id');
            activeSide = t;
            if($(this).hasClass('inactive')){ //this is the start of our condition 
                $('#tabs a').addClass('inactive');           
                $(this).removeClass('inactive');
                
                $('.tab-box').hide();
                $('#'+ t + 'C').fadeIn('slow');
            }
          });
        }
        
        setInterval(function() {
          if (activeSide == 'tab1' || activeSide == 'tab2' ||activeSide == 'tab3') {
            $(".content-feed").each(function() {
              if (!$(this).hasClass("moved")) {
                $(this).addClass("moved");
                if ($(this).hasClass("content-feed--unknown")) {
                  if (activeSide == 'tab1' || activeSide == 'tab2') {
                    $(this).css('display', 'block');
                  } else {
                    $(this).css('display', 'none');
                  }
                } else {
                  if (activeSide == 'tab1' || activeSide == 'tab3') {
                    $(this).css('display', 'block');
                  } else {
                    $(this).css('display', 'none');
                  }
                }
              }
            });
          }
        }, 1000);

      }
    }, 1000);
});