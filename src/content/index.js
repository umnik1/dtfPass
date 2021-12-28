// init jQuery
var content = chrome.extension.getURL("js/jquery.min.js");
var script = document.createElement("script");
// script.setAttribute("type", "text/javascript");
// script.setAttribute("src", content);
// document.body.appendChild(script);

injectScript(content, function() {
  // When HD - on
  chrome.storage.local.get(["hd"], result => {
    if (result.hd) {
      content = chrome.extension.getURL("js/hd.js");
      script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", content);
      document.body.appendChild(script);
    }
  });

  // When Download - on
  chrome.storage.local.get(["download"], result => {
    if (result.download) {
      // init fileSaver
      content = chrome.extension.getURL("js/FileSaver.min.js");
      script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", content);
      document.body.appendChild(script);

      content = chrome.extension.getURL("js/download.js");
      script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", content);
      document.body.appendChild(script);
    }
  });

  // When Splitter - on
  chrome.storage.local.get(["splitter"], result => {
    if (result.splitter) {
      content = chrome.extension.getURL("js/splitter.js");
      script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", content);
      document.body.appendChild(script);
    }
  });

  // When Bookmarks - on
  chrome.storage.local.get(["bookmarks"], result => {
    if (result.bookmarks) {
      content = chrome.extension.getURL("js/bookmarks.js");
      script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", content);
      document.body.appendChild(script);
    }
  });

  //Backlist
  content = chrome.extension.getURL("js/backlist.js");
  script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", content);
  document.body.appendChild(script);
});

function injectScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    callback();
  };
  document.head.appendChild(script);
}
