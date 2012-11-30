$(function() {

  var $load = $('#load');
  var $loading = $('#loading');
  var $results = $('#results');
  var imgs = []

  var loader = new createjs.PreloadJS();

  // 2nd arg: not now
  loader.loadFile('../media/1.jpg', false);
  loader.loadFile('../media/2.jpg', false);
  loader.loadFile('../media/3.jpg', false);
  loader.loadFile('../media/4.jpg', false);

  loader.onFileLoad = function(item) {
    imgs.push(item.result);
  };

  loader.onComplete = function() {
    $loading.text('done!');
    $.each(imgs, function(i, img) {
      $results.append(img);
    });
  };

  $load.click(function() {
    $loading.text('loading...');
    loader.load(); // start it
  });

});
