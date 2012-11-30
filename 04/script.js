$(function() {

  var $loading = $('#loading');
  var $results = $('#results');
  var items = [];

  var loader = new createjs.PreloadJS();

  var manifest = [
    { src: '../media/1.jpg', id: 'img' },
    { src: '../media/sample.css', id: 'css' },
    { src: '../media/sample.js', id: 'js' },
    { src: '../media/sample.json', id: 'json' },
    { src: '../media/sample.txt', id: 'txt' },
    { src: '../media/sample.mp3', id: 'mp3' },
    { src: '../media/sample.ogg', id: 'ogg' }
  ];

  loader.onFileLoad = function(item) {
    items.push(item);
  };

  loader.onComplete = function() {
    $loading.text('done!');

    // JSON test
    var data = loader.getResult('json').result;
    var json = (new Function("return " + data))();
    console.log(json); // Object { hoge: "hogeval" }

    // css test
    var cssEl = loader.getResult('css').result;
    $('head')[0].appendChild(cssEl); // style will be applied

    // js test
    var jsEl = loader.getResult('js').result;
    $('head')[0].appendChild(jsEl); // alert('sample.js!')

    // img test
    var imgEl = loader.getResult('img').result;
    $results.append(imgEl); // <img ...>

    // txt test
    var txt = loader.getResult('txt').result;
    $results.append(txt); // THIS IS SAMPLE TEXT

    // mp3 test
    var audioMp3El = loader.getResult('mp3').result;
    audioMp3El.controls = true;
    $results.append(audioMp3El); // <audio ...>

    // ogg test
    var audioOggEl = loader.getResult('ogg').result;
    audioOggEl.controls = true;
    $results.append(audioOggEl); // <audio ...>

  };

  loader.loadManifest(manifest);

});
