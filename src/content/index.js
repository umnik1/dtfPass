import $ from '../../build/js/jquery-3.6.0.min.js'
console.log('content-script!2')

$('<style>').text(`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
  #manabrain-block { opacity: 0; position: fixed;top: 100px;z-index: 9999999;width: 700px;height: 250px;background: linear-gradient(90deg, rgb(148, 86, 255) 0%, rgb(200, 154, 255) 100%);box-shadow: rgb(34 60 80 / 20%) 0px 5px 10px 2px;padding: 20px;color: rgb(0, 0, 0);border-radius: 11px;left: 514.5px;animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s alternate, showBlock 0s ease 3s forwards; }
  @keyframes showBlock {0% {opacity: 0;}100% {opacity: 1;}}
  @keyframes anime {
    0% {
      opacity: 0.5;
      width: 60px;
      height: 60px;
      background: linear-gradient(90deg, rgb(148, 86, 255) 0%, rgb(200, 154, 255) 100%);
      box-shadow:  rgb(34 60 80 / 20%) 0px 5px 10px 2px;
    }
    25% {
      opacity: 1;
      width: 60px;
      height: 60px;
      background: linear-gradient(90deg, rgb(148, 86, 255) 0%, rgb(200, 154, 255) 100%);
      box-shadow:  rgb(34 60 80 / 20%) 0px 5px 10px 2px;
    }
    50% {
      opacity: 1;
      width: 60px;
      height: 250px;
      background: linear-gradient(90deg, rgb(148, 86, 255) 0%, rgb(200, 154, 255) 100%);
      box-shadow:  rgb(34 60 80 / 20%) 0px 5px 10px 2px;
    }
    100% {
      opacity: 1;
      width: 700px;
      height: 250px;
      background: linear-gradient(90deg, rgb(148, 86, 255) 0%, rgb(200, 154, 255) 100%);
      box-shadow:  rgb(34 60 80 / 20%) 0px 5px 10px 2px;
    }
  }
  #umnindy-header { position: absolute;top: 0;left: 0;width: auto;height: 27px;background: #FFF;text-align: center;font-size: 17px;padding-top: 4px;color: #9456FF;font-family: 'Raleway', sans-serif;border-bottom-right-radius: 11px;border-top-left-radius: 11px;padding-left: 10px;padding-right: 10px; }
  #umnindy-question { max-width: 400px;position:absolute;top: 65px;font-size: 28px;color: #FFF;text-align: center;line-height: 35px;font-family: 'Raleway', sans-serif;border-bottom: 1px #FFF solid;padding-bottom: 10px;}
  #umnindy-answer { position: absolute;top: 169px;left: 140px;color: #9456FF;background: #FFF;padding: 9px;border-radius: 13px;padding-left: 15px;padding-right: 15px;cursor: pointer;font-size: 15px;}
  .manabrain-button:hover { background: #21b573 !important; color: #FFF !important; }
  .manabrain-question-button { color: #9456FF;background: #FFF;padding: 9px;border-radius: 13px;padding-left: 15px;padding-right: 15px;cursor: pointer; margin-bottom: 13px;text-align: center; font-size: 15px;}
  #manabrain-questions { position: absolute;right: 20px;width: 200px;top: 50px; }
  #mana-close { position: absolute; right: 10px; top: 0;}
  #mana-close:hover { cursor: pointer; }
  #mana-close:after{content: 'x';color: #fff;font-weight: bold;font-family: 'Raleway'; font-size: 22px;}
  #manabrian-inside { opacity: 0; animation: showBlock 1s ease 4s forwards;}
  #myOverlay{position:absolute;top:0;left:0;height:100%;width:100%;}
  #myOverlay{display:none;backdrop-filter:blur(4px);background:black;opacity:.4;z-index:9999;position: fixed;}
`).appendTo(document.head)

$(document).ready(function () {
  $('body').append(`
  <div id="myOverlay"></div>
  <div id="manabrain-block">
    <div id="manabrian-inside">
      <div id="mana-close"></div>
      <div id="umnindy-header">
        Математика
      </div>
      <div id="umnindy-question">
        Какое название у знака бесконечности?
      </div>
      <p id="umnindy-answer" class="manabrain-button">Посмотреть ответ</p>

      <div id="manabrain-questions">
        <p id="umnindy-question-one" class="manabrain-button manabrain-question-button">Мебиус</p>
        <p id="umnindy-question-two" class="manabrain-button manabrain-question-button">Уроборос</p>
        <p id="umnindy-question-three" class="manabrain-button manabrain-question-button">Бесконечность</p>
      </div>
    </div>
`)

  setPosition()

  $(window).resize(() => { setPosition() })
  $('#mana-close').click(function () {
    $('#manabrain-block').hide()
    $('#myOverlay').hide()
  })
  $('.manabrain-question-button').click(function () {
    // fullAnimation.init()
  })
})

function setPosition () {
  var login = $('#manabrain-block')
  login.css('left', $(document).width() / 2 - login.width() / 2)
  $('#myOverlay').show()
}

// var back = document.createElement('div')
// back.setAttribute('style', 'position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;background-color: #ebebebe6;opacity: 1;transition: all 0.5 linear;-webkit-transition: same!;z-index: 9999;')
// back.innerHTML = ''
// document.body.appendChild(back)

// var iframe = document.createElement('iframe')
// iframe.setAttribute('style', 'position:absolute;top:50%;left:50%;background-color:white;z-index: 99999;')
// iframe.src = 'http://manabrain.com/'
// document.body.appendChild(iframe)
