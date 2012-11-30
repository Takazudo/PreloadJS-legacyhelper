$(function() {

  var $loading = $('#loading');
  var imgs = []

  var loader = new createjs.PreloadJS();

  var manifest = [
    { src: '../media/1.jpg', id:'img1' },
    { src: '../media/2.jpg', id:'img2' },
    { src: '../media/3.jpg', id:'img3' },
    { src: '../media/4.jpg', id:'img4' },
    { src: '../media/5.jpg', id:'img5' },
    { src: '../media/6.jpg', id:'img6' },
    { src: '../media/7.jpg', id:'img7' }
  ];

  loader.onFileLoad = function(item) {
    imgs.push(item.result);
  };

  loader.onComplete = function() {
    $loading.text('done!');
  };
  
  $('#getresult').click(function() {
    var imgid = $('#imgid').val()
    var item = loader.getResult(imgid);
    $('#results').append(item.result);
  });

  loader.loadManifest(manifest);

});
