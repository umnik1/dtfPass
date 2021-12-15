
module.exports = {
  name: 'DTFpass',
  version: '1.0.0',
  description: 'DTFpass Extension',
  author: 'Maksim Chingin',
  manifest_version: 2,
  icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
  permissions: [
    'https://dtf.ru/*',
    'unlimitedStorage',
    'storage',
  ],
  browser_action: {
    default_title: 'title',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  devtools_page: 'pages/devtools.html',
  options_page: 'pages/options.html',
  content_scripts: [
  {
    js: [ 'js/jquery-3.6.0.min.js', 'js/inject.js' ],
    // css: ["css/pass.css"],
    run_at: 'document_end',
    matches: ["https://dtf.ru/*"],
  }],
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  web_accessible_resources: [ 'panel.html', 'js/content.js' ]
}
