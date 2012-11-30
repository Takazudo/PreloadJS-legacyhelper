$(function() {

  var $loading = $('#loading');
  var $results = $('#results');
  var imgs = []

  var loader = new createjs.PreloadJS();

  var manifest = [
    { src: '../media/1.jpg' },
    { src: '../media/2.jpg' },
    { src: '../media/3.jpg' },
    { src: '../media/4.jpg' },
    { src: '../media/5.jpg' },
    { src: '../media/6.jpg' },
    { src: '../media/7.jpg' }
  ];

  loader.onFileLoad = function(item) {
    imgs.push(item.result);
  };

  loader.onComplete = function() {
    $loading.text('done!');
    $.each(imgs, function(i, img) {
      $results.append(img);
    });
  };

  loader.loadManifest(manifest); // start it

});
