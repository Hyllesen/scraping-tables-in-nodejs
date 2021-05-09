/**
 * @desc Inject jQuery via console to the site (I found this snippet)
 * @author Misha M.-Kupriyanov https://plus.google.com/104512463398531242371/
 * @link https://gist.github.com/4141199
 */
Scripts = new function () {
  this.adapters = new Array()
};

Scripts.injectScript = function (src, callback) {
  // If it's already loaded, don't load it again
  if (Scripts.adapters[src]) {
    callback();
    return;
  }

  var head = document.querySelector('head');
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;

  script.addEventListener('load', function () {
    callback();
  });
  head.appendChild(script);

};


Scripts.injectScript('//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function () { console.log('jquery injected') });