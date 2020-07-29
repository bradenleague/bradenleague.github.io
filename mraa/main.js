var isChrome = !!window.chrome && !!window.chrome.webstore;

console.log(isChrome);


if(!isChrome) {
  $(".cta h1").text('Works Best In Chrome');
}

  var videoObj = $("video");
  var explode = $(".explode");
  var birds = $('#birds');
  var cta = $('.cta');
  var punchDom = $(".punchCounter");
  var punchH2 = $(".punchCounter h2");
  var punchH3 = $(".punchCounter h3");
  var video = videoObj[0];
  var audio = new Audio('Falcon-punch.mp3');
  var riff = new Audio('radriff.mp3');
  var punchCounter = 0;

  var clicked = false;


  // video.muted = true;
  video.preload = true;
  explode.css("display", "none");
  birds.css("display", "none");

videoObj.click(function(e) {
  //limit clicks
  if (!clicked){
    clicked = true;
    setTimeout(function(){ clicked = false; }, 500);
    }else{
     return;
  }

  video.currentTime = 2.3;
  audio.play();
  riff.play();
  explode.css("display", "block");
  explode.css("left", e.pageX);
  explode.css("top", e.pageY);
  cta.addClass("fadeOut");
  punchDom.addClass("fadeIn");

  punchCounter++
  punchH3.text(punchCounter);
  punchH3.addClass("bigNumber");


  if (video.paused) {
    video.play();
  }
  //.7 seconds after click do this
  setTimeout(function(){
    explode.css("display", "none");
    birds.css("display", "block");
    $('#snoop').addClass('snoopRise');
  }, 700);
});


punchH3.on(
    "webkitAnimationEnd",
    function() {
        $(this).removeClass("bigNumber");
        console.log('hi');
    }
);
