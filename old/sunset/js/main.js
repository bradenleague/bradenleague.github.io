	function init() {

	var canX;
	var canY;	
	var stage = new createjs.Stage("demoCanvas");
	var canvas = document.getElementById('demoCanvas'),
	context = canvas.getContext('2d');

	resizeCanvas();
	window.addEventListener('resize', resizeCanvas, false);



	for (var i = 1; i <= 100; i++) {

		var circle = new createjs.Shape();
		circle.graphics.beginFill("DeepSkyBlue").drawRect(0, 25, canX , 100);
		// circle.x = ;
		circle.y = -50;
		stage.addChild(circle);

		createjs.Tween.get(circle, {loop: true})
		  .to({alpha: 0, y: canY}, (1000 * (i*10)), createjs.Ease.getPowInOut(2))
		  .to({alpha: 1, y: 500}, (1000 * (i*30)), createjs.Ease.getPowInOut(2))
		  .to({alpha: 0, y: 0}, (1000 * (i*50)), createjs.Ease.getPowInOut(2))
		  //.to({alpha: 0, y: 500}, 500)
		  // .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
		  // .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", stage);

		stage.update();
		console.log(i);
	};

	for (var j = 100; j >= 1; j--) {

		var box = new createjs.Shape();
		box.graphics.beginFill("Red").drawRect(0, 25, canX , 100);
		// box.x = -100;
		box.y = canY;
		stage.addChild(box);

		createjs.Tween.get(box, {loop: true})
		  .to({alpha: 0, y: 0}, (1000 * (j*10)), createjs.Ease.getPowInOut(2))
		  .to({alpha: 1, y: 500}, (1000 * (j*30)), createjs.Ease.getPowInOut(2))
		  .to({alpha: 0, y: canY}, (1000 * (j*50)), createjs.Ease.getPowInOut(2))
		  //.to({alpha: 0, y: 500}, 500)
		  // .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
		  // .to({x: 100}, 800, createjs.Ease.getPowInOut(2));
		createjs.Ticker.setFPS(30);
		createjs.Ticker.addEventListener("tick", stage);

		stage.update();
		console.log(i);
	};

	function resizeCanvas() {
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;

	    canX = canvas.width;
	    canY = canvas.height;
	}

  }