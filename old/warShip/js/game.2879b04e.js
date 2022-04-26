(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cube = function () {
    function Cube() {
        _classCallCheck(this, Cube);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x000000 });

        this.mesh = new THREE.Mesh(geometry, material);
        this.wireframe = new THREE.WireframeHelper(this.mesh, 0x00ff00);
    }

    _createClass(Cube, [{
        key: "place",
        value: function place(scene) {
            scene.add(this.mesh);
            scene.add(this.wireframe);
        }
    }, {
        key: "render",
        value: function render() {
            // this.mesh.rotation.x += 0.01;
            // this.mesh.rotation.y += 0.01;
        }
    }]);

    return Cube;
}();

exports.default = Cube;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextButton = function (_Phaser$Button) {
    _inherits(TextButton, _Phaser$Button);

    function TextButton(_ref) {
        var game = _ref.game;
        var x = _ref.x;
        var y = _ref.y;
        var asset = _ref.asset;
        var callback = _ref.callback;
        var callbackContext = _ref.callbackContext;
        var overFrame = _ref.overFrame;
        var outFrame = _ref.outFrame;
        var downFrame = _ref.downFrame;
        var upFrame = _ref.upFrame;
        var label = _ref.label;
        var style = _ref.style;

        _classCallCheck(this, TextButton);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextButton).call(this, game, x, y, asset, callback, callbackContext, overFrame, outFrame, downFrame, upFrame));

        _this.anchor.setTo(0.5);

        _this.label = label;
        _this.style = style;
        _this.text = new Phaser.Text(_this.game, 0, 0, _this.label, _this.style);
        _this.text.anchor.setTo(0.5);

        _this.addChild(_this.text);

        return _this;
    }

    return TextButton;
}(Phaser.Button);

exports.default = TextButton;

},{}],3:[function(require,module,exports){
'use strict';

var _states = require('./states');

var states = _interopRequireWildcard(_states);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GAME = new Phaser.Game(800, 600, Phaser.AUTO);

Object.keys(states).forEach(function (state) {
  return GAME.state.add(state, states[state]);
});

GAME.state.start('Boot');

},{"./states":9}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_Phaser$Sprite) {
    _inherits(Bullet, _Phaser$Sprite);

    function Bullet(_ref) {
        var game = _ref.game;
        var x = _ref.x;
        var y = _ref.y;
        var asset = _ref.asset;
        var health = _ref.health;
        var _ref$tint = _ref.tint;
        var tint = _ref$tint === undefined ? 0xff0000 : _ref$tint;

        _classCallCheck(this, Bullet);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bullet).call(this, game, x, y, asset));

        _this.anchor.setTo(0.5);
        _this.scale.setTo(0.8);
        _this.health = health;
        _this.tint = tint;
        _this.checkWorldBounds = true;
        _this.outOfBoundsKill = true;
        return _this;
    }

    return Bullet;
}(Phaser.Sprite);

// DIFFERENT BULLET STYLES PLEASE?


exports.default = Bullet;

var Bullet2 = function (_Phaser$Sprite2) {
    _inherits(Bullet2, _Phaser$Sprite2);

    function Bullet2(_ref2) {
        var game = _ref2.game;
        var x = _ref2.x;
        var y = _ref2.y;
        var asset = _ref2.asset;
        var health = _ref2.health;
        var _ref2$tint = _ref2.tint;
        var tint = _ref2$tint === undefined ? 0xff0000 : _ref2$tint;

        _classCallCheck(this, Bullet2);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Bullet2).call(this, game, x, y, asset));

        _this2.anchor.setTo(0.5);
        _this2.scale.setTo(0.8);
        _this2.health = health;
        _this2.tint = tint;
        _this2.checkWorldBounds = true;
        _this2.outOfBoundsKill = true;
        _this2.enableBody = true;
        // this.allowGravity = true;
        // this.body.rotation = this.game.physics.arcade.moveToPointer(this, this.bulletSpeed, this.game.input.activePointer, 500);
        return _this2;
    }

    return Bullet2;
}(Phaser.Sprite);

exports.default = Bullet2;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('./bullet');

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = function (_Phaser$Sprite) {
    _inherits(Enemy, _Phaser$Sprite);

    function Enemy(_ref) {
        var game = _ref.game;
        var x = _ref.x;
        var y = _ref.y;
        var asset = _ref.asset;
        var frame = _ref.frame;
        var health = _ref.health;
        var bulletSpeed = _ref.bulletSpeed;

        _classCallCheck(this, Enemy);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).call(this, game, x, y, asset, frame));

        _this.game = game;

        _this.anchor.setTo(0.5);
        _this.scale.setTo(0.8);
        _this.health = health;
        _this.maxHealth = health;
        _this.game.physics.arcade.enable(_this);

        _this.animations.add('spinning', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 30, true);
        _this.play('spinning');

        _this.bullets = _this.game.add.group();
        _this.bullets.enableBody = true;
        _this.bulletSpeed = bulletSpeed;

        // this.shotSound = this.game.add.sound('enemyShot');

        return _this;
    }

    _createClass(Enemy, [{
        key: 'update',
        value: function update() {

            // AI!!!!

            if (this.position.y < 0.04 * this.game.world.height) {
                this.position.y = 0.04 * this.game.world.height + 2;
                this.body.velocity.y *= -1;
            } else if (this.position.y > 0.96 * this.game.world.height) {
                this.position.y = 0.96 * this.game.world.height - 2;
                this.body.velocity.y *= -1;
            }

            if (this.position.x < 0) {
                this.kill();
            }

            // if (this.position.y < 0) {
            //     this.kill();
            // }
        }
    }, {
        key: 'shoot',
        value: function shoot() {

            // this.shotSound.play("",0,0.5);

            var bullet = this.bullets.getFirstExists(false);

            if (!bullet) {
                bullet = new _bullet2.default({
                    game: this.game,
                    x: this.x,
                    y: this.bottom,
                    health: 5,
                    asset: 'bullet',
                    tint: 0xff0000
                });
                this.bullets.add(bullet);
            } else {
                bullet.reset(this.x, this.bottom, 2);
            }

            bullet.body.velocity.x = this.bulletSpeed * -1;
        } //end shoot

    }, {
        key: 'damage',
        value: function damage(amount) {
            _get(Object.getPrototypeOf(Enemy.prototype), 'damage', this).call(this, amount);
        }
    }, {
        key: 'reset',
        value: function reset(_ref2) {
            var x = _ref2.x;
            var y = _ref2.y;
            var health = _ref2.health;
            var bulletSpeed = _ref2.bulletSpeed;
            var speed = _ref2.speed;

            _get(Object.getPrototypeOf(Enemy.prototype), 'reset', this).call(this, x, y, health);
            this.bulletSpeed = bulletSpeed;
            this.body.velocity.x = speed.x;
            this.body.velocity.y = speed.y;
        }
    }]);

    return Enemy;
}(Phaser.Sprite);

exports.default = Enemy;

},{"./bullet":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hud = function (_Phaser$Group) {
    _inherits(Hud, _Phaser$Group);

    function Hud(_ref) {
        var game = _ref.game;
        var player = _ref.player;

        _classCallCheck(this, Hud);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hud).call(this, game));

        _this.game = game;
        _this.player = player;
        _this.bg = new Phaser.Image(_this.game, 0, 0, 'hudBg');
        _this.width = 800;
        _this.healthbar = new Phaser.Sprite(_this.game, 2, 2, 'healthbar');
        _this.healthbar.scale.setTo(0.995, 11);

        _this.score = 0;
        _this.scoreLabel = 'Score: ';
        _this.scoreText = new Phaser.Text(_this.game, 20, 14, _this.scoreLabel + _this.score, {
            font: '13px Verdana',
            fill: 'white',
            align: 'center'

        });

        _this.add(_this.bg);
        _this.add(_this.healthbar);
        _this.add(_this.scoreText);
        return _this;
    }

    _createClass(Hud, [{
        key: 'updateHealth',
        value: function updateHealth() {
            this.healthbar.crop(new Phaser.Rectangle(0, 0, this.player.health / this.player.maxHealth * this.width, 10));
            this.healthbar.updateCrop();
        }
    }, {
        key: 'updateScore',
        value: function updateScore(amount) {
            this.score += amount;
            this.scoreText.text = this.scoreLabel + this.score * 10;

            var highScore = localStorage.getItem("high-score");

            if (highScore < this.score) {
                localStorage.setItem("high-score", this.score);
            }
        }
    }]);

    return Hud;
}(Phaser.Group);

exports.default = Hud;
;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _bullet = require('./bullet');

var _bullet2 = _interopRequireDefault(_bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//nothing yet, different bullet styles please

var Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(_ref) {
        var game = _ref.game;
        var x = _ref.x;
        var y = _ref.y;
        var asset = _ref.asset;
        var frame = _ref.frame;
        var health = _ref.health;

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, game, x, y, asset, frame));

        _this.game = game;

        _this.anchor.setTo(0.5);
        _this.scale.setTo(0.8);

        _this.health = health;
        _this.maxHealth = health;

        _this.game.physics.arcade.enable(_this);
        _this.enableBody = true;

        _this.body.maxVelocity.setTo(250, 250);
        // this.body.maxAngularVelocity = 200;

        _this.body.collideWorldBounds = true;
        _this.body.allowGravity = true;

        _this.lastPos = { x: x, y: y };

        _this.diff = {
            x: 0,
            y: 0
        };

        _this.bullets = _this.game.add.group();
        _this.bullets.enableBody = true;
        _this.bulletSpeed = -400;

        // this.shotSound = this.game.add.sound('playerShot');

        // this.game.input.onUp.add(() => {
        //     if (this.alive) {
        //         this.frame = 1;
        //     }
        // });
        return _this;
    }

    _createClass(Player, [{
        key: 'update',
        value: function update() {

            var isUp = this.game.input.keyboard.isDown(Phaser.Keyboard.UP) || this.game.input.keyboard.isDown(Phaser.KeyCode.W);
            var isDown = this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || this.game.input.keyboard.isDown(Phaser.KeyCode.S);
            var isLeft = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.KeyCode.A);
            var isRight = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.KeyCode.D);

            if (isUp) {
                this.body.acceleration.y = -500;
            } else if (isDown) {
                // this.game.physics.arcade.accelerationFromRotation(this.rotation, -200, this.body.acceleration);
                this.body.acceleration.y = 500;
            } else {
                if (this.body.velocity.y > 20) {
                    this.body.acceleration.y -= 30;
                } else if (this.body.velocity.y < -20) {
                    this.body.acceleration.y += 30;
                } else {
                    this.body.velocity.y = 0;
                    this.body.acceleration.y = 0;
                }
            }

            if (isRight) {
                this.body.acceleration.x = 500;
            } else if (isLeft) {
                this.body.acceleration.x = -500;
            } else {
                if (this.body.velocity.x > 20) {
                    this.body.acceleration.x -= 30;
                } else if (this.body.velocity.x < -20) {
                    this.body.acceleration.x += 30;
                } else {
                    this.body.velocity.x = 0;
                    this.body.acceleration.x = 0;
                }
            }

            // console.log( this.body.acceleration.x);
            // console.log(this.body.velocity);
        } //end update

    }, {
        key: 'shoot',
        value: function shoot() {

            // console.log(this.game.physics.arcade);

            // this.shotSound.play("",0,0.5);

            var bullet = this.bullets.getFirstExists(false);

            var _yOffset = this.y - 3;

            if (!bullet) {
                bullet = new _bullet2.default({
                    game: this.game,
                    x: this.x,
                    y: _yOffset = this.y - 3,
                    health: 3,
                    asset: 'bullet',
                    tint: 0x04c112
                });
                this.bullets.add(bullet);
            } else {
                bullet.reset(this.x, _yOffset = this.y - 3, 3);
            }
            bullet.body.rotation = this.game.physics.arcade.moveToPointer(bullet, this.bulletSpeed, this.game.input.activePointer, 500);
            // bullet.body.velocity.x = this.bulletSpeed * -1;
        } // END shoot

    }, {
        key: 'damage',
        value: function damage(amount) {
            _get(Object.getPrototypeOf(Player.prototype), 'damage', this).call(this, amount);
        }
    }]);

    return Player;
}(Phaser.Sprite);

exports.default = Player;

},{"./bullet":4}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Boot).apply(this, arguments));
    }

    _createClass(Boot, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#000';
            this.load.image('loaderBg', 'img/loader-bg.310894d4.png');
            this.load.image('loaderBar', 'img/loader-bar.a441202a.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.state.start('Preload');
        }
    }]);

    return Boot;
}(Phaser.State);

exports.default = Boot;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boot = require('./boot');

Object.defineProperty(exports, 'Boot', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_boot).default;
  }
});

var _preload = require('./preload');

Object.defineProperty(exports, 'Preload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preload).default;
  }
});

var _menu = require('./menu');

Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _play = require('./play');

Object.defineProperty(exports, 'Play', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_play).default;
  }
});

var _over = require('./over');

Object.defineProperty(exports, 'Over', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_over).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./boot":8,"./menu":10,"./over":11,"./play":12,"./preload":13}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/textbutton');

var _textbutton2 = _interopRequireDefault(_textbutton);

var _cube = require('../cube');

var _cube2 = _interopRequireDefault(_cube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ThreeUI = undefined;

var Menu = function (_Phaser$State) {
    _inherits(Menu, _Phaser$State);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            new Main(); // creates three js menu in menu state

            // this.music = this.game.add.audio('menuMusic');

            this.title = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'warShip', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.title.anchor.setTo(0.5);

            this.intro = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 100, 'WASD + click to shoot', {
                font: '14px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.intro.anchor.setTo(0.5);

            this.start = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Start',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.loadout1 = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'loadout one',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.score = localStorage.getItem("high-score");
            this.scoreLabel = 'High Score: ';
            this.scoreText = new Phaser.Text(this.game, 20, 14, this.scoreLabel + this.score * 10, {
                font: '13px Verdana',
                fill: 'white',
                align: 'center'

            });

            // this.btnOverSound = this.add.sound('menuOver');
            // this.btnOutSound = this.add.sound('menuOut');
            // this.btnDownSound = this.add.sound('menuDown');

            // this.start.setOverSound(this.btnOverSound);
            // this.start.setOutSound(this.btnOutSound);
            // this.start.setDownSound(this.btnDownSound);

            this.start.onInputUp.add(function () {
                // this.music.stop();
                _this2.state.start('Play');
                //kill three js view
                $(_ThreeUI).remove();
            });

            this.loadout1.onInputUp.add(function () {

                localStorage.setItem("loadout", 1);
            });

            this.menuPanel = this.add.group();
            this.menuPanel.add(this.title);
            this.menuPanel.add(this.start);
            this.menuPanel.add(this.scoreText);
            this.menuPanel.add(this.intro);

            // this.music.loopFull();

            // $('#btnOne').click(this.state.start('Play'));
        }
    }]);

    return Menu;
}(Phaser.State);

exports.default = Menu;

var Main = exports.Main = function () {
    function Main() {
        _classCallCheck(this, Main);

        this.elements = [];
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({ alpha: true });
        document.body.appendChild(this.renderer.domElement);
        this.handleResize();
        window.addEventListener('resize', this.handleResize.bind(this), false);

        _ThreeUI = this.renderer.domElement;

        $(_ThreeUI).addClass("threeClass");

        this.addElement(new _cube2.default());
        this.render();
    }

    _createClass(Main, [{
        key: 'addElement',
        value: function addElement(element) {
            this.elements.push(element);
            element.place(this.scene);
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
        }
    }, {
        key: 'render',
        value: function render() {
            this.elements.forEach(function (element) {
                element.render();
            });
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(this.render.bind(this));
        }
    }]);

    return Main;
}();

},{"../cube":1,"../extensions/textbutton":2}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _textbutton = require('../extensions/textbutton');

var _textbutton2 = _interopRequireDefault(_textbutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Over = function (_Phaser$State) {
    _inherits(Over, _Phaser$State);

    function Over() {
        _classCallCheck(this, Over);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Over).apply(this, arguments));
    }

    _createClass(Over, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.gameOverTitle = new Phaser.Text(this.game, this.game.world.centerX, this.game.world.centerY - 200, 'Game over', {
                font: '36px Tahoma',
                fill: 'white',
                align: 'center'
            });
            this.gameOverTitle.anchor.setTo(0.5);

            this.start = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY - 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Try again',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            this.menu = new _textbutton2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: this.game.world.centerY + 30,
                asset: 'button',
                overFrame: 2,
                outFrame: 1,
                downFrame: 0,
                upFrame: 1,
                label: 'Menu',
                style: {
                    font: '16px Verdana',
                    fill: 'white',
                    align: 'center'
                }
            });

            // this.btnOverSound = this.add.sound('menuOver');
            // this.btnOutSound = this.add.sound('menuOut');
            // this.btnDownSound = this.add.sound('menuDown');

            // this.start.setOverSound(this.btnOverSound);
            // this.start.setOutSound(this.btnOutSound);
            // this.start.setDownSound(this.btnDownSound);
            // this.menu.setOverSound(this.btnOverSound);
            // this.menu.setOutSound(this.btnOutSound);
            // this.menu.setDownSound(this.btnDownSound);

            this.start.onInputDown.add(function () {
                _this2.state.start('Play');
            });

            this.menu.onInputDown.add(function () {
                _this2.state.start('Menu');
            });

            this.gameOverPanel = this.add.group();
            this.gameOverPanel.add(this.gameOverTitle);
            this.gameOverPanel.add(this.start);
            this.gameOverPanel.add(this.menu);
        }
    }]);

    return Over;
}(Phaser.State);

exports.default = Over;

},{"../extensions/textbutton":2}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../prefabs/player');

var _player2 = _interopRequireDefault(_player);

var _enemy = require('../prefabs/enemy');

var _enemy2 = _interopRequireDefault(_enemy);

var _hud = require('../prefabs/hud');

var _hud2 = _interopRequireDefault(_hud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import GConstants from '../prefabs/gConstants';

var Play = function (_Phaser$State) {
    _inherits(Play, _Phaser$State);

    function Play() {
        _classCallCheck(this, Play);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Play).apply(this, arguments));
    }

    _createClass(Play, [{
        key: 'create',
        value: function create() {
            var _this2 = this;

            var gData = this.cache.getJSON('gameData');

            this.farback = this.add.tileSprite(0, 0, 800, 600, 'farback'); //the map bg

            this.game.time.slowMotion = 1;

            this.enemies = this.add.group();
            this.enemies.enableBody = true;

            this.player = new _player2.default({
                game: this.game,
                x: this.game.world.centerX,
                y: 0.92 * this.game.world.height,
                health: gData[0].hp,
                asset: 'newfigther',
                frame: 1
            });
            this.game.stage.addChild(this.player);

            this.hud = new _hud2.default({
                game: this.game,
                player: this.player
            });

            //inputs only takes mouse to slow down
            this.game.input.onDown.add(function () {
                // this.game.time.slowMotion = 1;
                _this2.playerShooting = true;
            });

            this.game.input.onUp.add(function () {
                // this.game.time.slowMotion = 3;
                _this2.playerShooting = false;
            });

            this.enemyTime = 0;
            this.enemyInterval = .5;
            this.enemyShootTime = 0;
            this.enemyShootInterval = 3;

            this.playerShootTime = 0;
            this.playerShootInterval = .001;
            this.playerShooting = false;

            //enemy interval spawner this should be smarter
            this.game.time.events.loop(Phaser.Timer.SECOND * 10, function () {
                if (_this2.enemyInterval > 0.2) {
                    _this2.enemyInterval -= 0.1;
                }
            });

            this.overlayBitmap = this.add.bitmapData(this.game.width, this.game.height);
            this.overlayBitmap.ctx.fillStyle = '#000';
            this.overlayBitmap.ctx.fillRect(0, 0, this.game.width, this.game.height);

            this.overlay = this.add.sprite(0, 0, this.overlayBitmap);
            this.overlay.visible = false;
            this.overlay.alpha = 0.75;

            // this.music = this.game.add.audio('playMusic');
            // this.bulletHitSound = this.add.sound('bulletHit');
            // this.enemyExplosionSound = this.add.sound('enemyExplosion');
            // this.playerExplosionSound = this.add.sound('playerExplosion');
            // this.gameOverSound = this.add.sound('gameOver');

            // this.music.loopFull();
        } //END CREATE

    }, {
        key: 'update',
        value: function update() {
            var _this3 = this;

            this.enemyTime += this.game.time.physicsElapsed;
            this.enemyShootTime += this.game.time.physicsElapsed;
            this.playerShootTime += this.game.time.physicsElapsed;

            if (this.enemyTime > this.enemyInterval) {
                this.enemyTime = 0;

                this.createEnemy({
                    game: this.game,
                    x: this.game.width,
                    y: this.game.rnd.integerInRange(6, 76) * 10,
                    speed: {
                        x: this.game.rnd.integerInRange(5, 10) * -10, //times -10 so it moves to the left
                        y: this.game.rnd.integerInRange(5, 10) * 10
                    },
                    health: 9,
                    bulletSpeed: this.game.rnd.integerInRange(10, 20) * 10,
                    asset: 'alien'
                });
            }

            if (this.enemyShootTime > this.enemyShootInterval) {
                this.enemyShootTime = 0;
                this.enemies.forEachAlive(function (enemy) {
                    return enemy.shoot();
                });
                if (!this.player.alive) {
                    this.game.world.bringToTop(this.overlay);
                }
            }

            if (this.playerShooting) {
                if (this.playerShootTime > this.playerShootInterval) {
                    this.playerShootTime = 0;
                    if (this.player.alive) {
                        this.player.shoot();
                    }
                }
            }

            this.game.physics.arcade.overlap(this.player.bullets, this.enemies, this.hitEnemy, null, this);

            this.game.physics.arcade.overlap(this.player, this.enemies, this.crashEnemy, null, this);

            this.enemies.forEach(function (enemy) {
                return _this3.game.physics.arcade.overlap(_this3.player, enemy.bullets, _this3.hitPlayer, null, _this3);
            });

            this.farback.tilePosition.x -= 3;
        } //END UPDATE

    }, {
        key: 'createEnemy',
        value: function createEnemy(data) {

            var enemy = this.enemies.getFirstExists(false);

            if (!enemy) {
                enemy = new _enemy2.default(data);
                this.enemies.add(enemy);
            }
            enemy.reset(data);
        }
    }, {
        key: 'hitEffect',
        value: function hitEffect(obj, color) {
            var _this4 = this;

            var tween = this.game.add.tween(obj);
            var emitter = this.game.add.emitter();
            var emitterPhysicsTime = 0;
            var particleSpeed = 100;
            var maxParticles = 10;

            tween.to({ tint: 0xff0000 }, 100);
            tween.onComplete.add(function () {
                obj.tint = 0xffffff;
            });
            tween.start();

            emitter.x = obj.x;
            emitter.y = obj.y;
            emitter.gravity = 0;
            emitter.makeParticles('particle');

            if (obj.health <= 0) {
                particleSpeed = 200;
                maxParticles = 40;
                color = 0xff0000;
            }

            emitter.minParticleSpeed.setTo(-particleSpeed, -particleSpeed);
            emitter.maxParticleSpeed.setTo(particleSpeed, particleSpeed);
            emitter.start(true, 500, null, maxParticles);
            emitter.update = function () {
                emitterPhysicsTime += _this4.game.time.physicsElapsed;
                if (emitterPhysicsTime >= 0.6) {
                    emitterPhysicsTime = 0;
                    emitter.destroy();
                }
            };
            emitter.forEach(function (particle) {
                return particle.tint = color;
            });
            if (!this.player.alive) {
                this.game.world.bringToTop(this.overlay);
            }
        }

        //collision

    }, {
        key: 'hitEnemy',
        value: function hitEnemy(bullet, enemy) {
            // this.bulletHitSound.play("",0,0.5);
            enemy.damage(bullet.health);
            this.hitEffect(enemy, bullet.tint);
            if (!enemy.alive) {
                // this.enemyExplosionSound.play("",0,0.5);
                this.hud.updateScore(enemy.maxHealth);
            }
            bullet.kill();
        }
    }, {
        key: 'hitPlayer',
        value: function hitPlayer(player, bullet) {
            // this.bulletHitSound.play("",0,0.5);
            player.damage(bullet.health);
            this.hud.updateHealth();
            this.hitEffect(player, bullet.tint);
            if (!player.alive) {
                // this.playerExplosionSound.play();
                this.gameOver();
            }
            bullet.kill();
        }
    }, {
        key: 'crashEnemy',
        value: function crashEnemy(player, enemy) {
            enemy.damage(enemy.health);
            player.damage(enemy.health);
            this.hitEffect(player);
            this.hitEffect(enemy);
            if (!enemy.alive) {
                // this.enemyExplosionSound.play("",0,0.5);
                this.hud.updateScore(enemy.maxHealth);
            }
            this.hud.updateHealth();
            if (!player.alive) {
                // this.playerExplosionSound.play();
                this.gameOver();
            }
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            var _this5 = this;

            this.game.time.slowMotion = 3;
            this.overlay.visible = true;
            this.game.world.bringToTop(this.overlay);
            var timer = this.game.time.create(this.game, true);
            timer.add(3000, function () {
                // this.music.stop();
                // this.gameOverSound.play();
                _this5.game.state.start('Over');
            });
            timer.start();
        }
    }]);

    return Play;
}(Phaser.State);

exports.default = Play;

},{"../prefabs/enemy":5,"../prefabs/hud":6,"../prefabs/player":7}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Preload).apply(this, arguments));
    }

    _createClass(Preload, [{
        key: 'preload',
        value: function preload() {

            this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
            this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
            this.loaderBg.anchor.setTo(0.5);
            this.loaderBar.anchor.setTo(0.5);

            this.load.setPreloadSprite(this.loaderBar);

            // this.load.atlasJSONArray('smallfighter', 'img/spritesheet/smallfighter.fde38ee6.png', 'data/spritesheet/smallfighter.cbe14dd3.json');
            this.load.atlasJSONArray('newfigther', 'img/spritesheet/newfigther.ceb2e71f.png', 'data/spritesheet/newfigther.e4354c65.json');

            this.load.atlasJSONArray('alien', 'img/spritesheet/alien.0cf7c7a5.png', 'data/spritesheet/alien.78bc238d.json');
            this.load.atlasJSONArray('button', 'img/spritesheet/button.13a26c21.png', 'data/spritesheet/button.2e5a8520.json');
            this.load.image('farback', 'img/night_sky.d8b9ed5c.png');
            this.load.image('bullet', 'img/bullet.841b4ea4.png');
            this.load.image('particle', 'img/particle.1d47c67e.gif');
            this.load.image('healthbar', 'img/healthbar.d9567897.png');
            this.load.image('hudBg', 'img/hud-bg.c0034354.png');

            this.load.audio('playMusic', ['audio/music/play.461c27fe.mp3']);
            this.load.audio('menuMusic', ['audio/music/menu.4340d25a.mp3']);

            this.load.audio('menuOver', ['audio/sound/menu-over.adf7e1ff.mp3']);
            this.load.audio('menuOut', ['audio/sound/menu-out.b4fb68f8.mp3']);
            this.load.audio('menuDown', ['audio/sound/menu-click.76947bdf.mp3']);

            this.load.audio('bulletHit', ['audio/sound/bullet-hit.b5d75795.mp3']);
            this.load.audio('enemyShot', ['audio/sound/enemy-shot.b33bb7cb.mp3']);
            this.load.audio('enemyExplosion', ['audio/sound/enemy-explosion.f648d3c1.mp3']);
            this.load.audio('playerShot', ['audio/sound/player-shot.bb42bb0f.mp3']);
            this.load.audio('playerExplosion', ['audio/sound/player-explosion.cdf713b1.mp3']);

            this.load.audio('gameOver', ['audio/sound/game-over.96e076dd.mp3']);

            this.load.json('gameData', 'data/gameData.a0349def.json');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('Menu');
        }
    }]);

    return Preload;
}(Phaser.State);

exports.default = Preload;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxjdWJlLmpzIiwic3JjXFxqc1xcZXh0ZW5zaW9uc1xcdGV4dGJ1dHRvbi5qcyIsInNyY1xcanNcXGdhbWUuanMiLCJzcmNcXGpzXFxwcmVmYWJzXFxidWxsZXQuanMiLCJzcmNcXGpzXFxwcmVmYWJzXFxlbmVteS5qcyIsInNyY1xcanNcXHByZWZhYnNcXGh1ZC5qcyIsInNyY1xcanNcXHByZWZhYnNcXHBsYXllci5qcyIsInNyY1xcanNcXHN0YXRlc1xcYm9vdC5qcyIsInNyY1xcanNcXHN0YXRlc1xcaW5kZXguanMiLCJzcmNcXGpzXFxzdGF0ZXNcXG1lbnUuanMiLCJzcmNcXGpzXFxzdGF0ZXNcXG92ZXIuanMiLCJzcmNcXGpzXFxzdGF0ZXNcXHBsYXkuanMiLCJzcmNcXGpzXFxzdGF0ZXNcXHByZWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQXFCO0FBQ2pCLGFBRGlCLElBQ2pCLEdBQWM7OEJBREcsTUFDSDs7QUFDVixZQUFJLFdBQVcsSUFBSSxNQUFNLFdBQU4sQ0FBa0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBWCxDQURNO0FBRVYsWUFBSSxXQUFXLElBQUksTUFBTSxpQkFBTixDQUF3QixFQUFDLE9BQU8sUUFBUCxFQUE3QixDQUFYLENBRk07O0FBSVYsYUFBSyxJQUFMLEdBQVksSUFBSSxNQUFNLElBQU4sQ0FBWSxRQUFoQixFQUEwQixRQUExQixDQUFaLENBSlU7QUFLVixhQUFLLFNBQUwsR0FBaUIsSUFBSSxNQUFNLGVBQU4sQ0FBc0IsS0FBSyxJQUFMLEVBQVcsUUFBckMsQ0FBakIsQ0FMVTtLQUFkOztpQkFEaUI7OzhCQVNYLE9BQU87QUFDVCxrQkFBTSxHQUFOLENBQVUsS0FBSyxJQUFMLENBQVYsQ0FEUztBQUVULGtCQUFNLEdBQU4sQ0FBVSxL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b250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtjb2xvcjogMHgwMDAwMDB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG4gICAgICAgIHRoaXMud2lyZWZyYW1lID0gbmV3IFRIUkVFLldpcmVmcmFtZUhlbHBlcih0aGlzLm1lc2gsIDB4MDBmZjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZShzY2VuZSkge1xyXG4gICAgICAgIHNjZW5lLmFkZCh0aGlzLm1lc2gpO1xyXG4gICAgICAgIHNjZW5lLmFkZCh0aGlzLndpcmVmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDE7XHJcbiAgICAgICAgLy8gdGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkJ1dHRvbiB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUsIGxhYmVsLCBzdHlsZSB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBjYWxsYmFjaywgY2FsbGJhY2tDb250ZXh0LCBvdmVyRnJhbWUsIG91dEZyYW1lLCBkb3duRnJhbWUsIHVwRnJhbWUpO1xuXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIDAsIDAsIHRoaXMubGFiZWwsIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLnRleHQuYW5jaG9yLnNldFRvKDAuNSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQpO1xuXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgc3RhdGVzIGZyb20gJy4vc3RhdGVzJztcbmNvbnN0IEdBTUUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA2MDAsIFBoYXNlci5BVVRPKTtcblxuT2JqZWN0LmtleXMoc3RhdGVzKS5mb3JFYWNoKHN0YXRlID0+IEdBTUUuc3RhdGUuYWRkKHN0YXRlLCBzdGF0ZXNbc3RhdGVdKSk7XG5cbkdBTUUuc3RhdGUuc3RhcnQoJ0Jvb3QnKTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBoZWFsdGgsIHRpbnQgPSAweGZmMDAwMCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0KTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKDAuOCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLnRpbnQgPSB0aW50O1xuICAgICAgICB0aGlzLmNoZWNrV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICB0aGlzLm91dE9mQm91bmRzS2lsbCA9IHRydWU7XG4gICAgfVxufVxuXG4vLyBESUZGRVJFTlQgQlVMTEVUIFNUWUxFUyBQTEVBU0U/XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQyIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih7IGdhbWUsIHgsIHksIGFzc2V0LCBoZWFsdGgsIHRpbnQgPSAweGZmMDAwMCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0KTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKDAuOCk7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICB0aGlzLnRpbnQgPSB0aW50O1xuICAgICAgICB0aGlzLmNoZWNrV29ybGRCb3VuZHMgPSB0cnVlO1xuICAgICAgICB0aGlzLm91dE9mQm91bmRzS2lsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuYWxsb3dHcmF2aXR5ID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5ib2R5LnJvdGF0aW9uID0gdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1BvaW50ZXIodGhpcywgdGhpcy5idWxsZXRTcGVlZCwgdGhpcy5nYW1lLmlucHV0LmFjdGl2ZVBvaW50ZXIsIDUwMCk7XG4gICAgfVxuXG5cbn1cbiIsImltcG9ydCBCdWxsZXQgZnJvbSAnLi9idWxsZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCwgYnVsbGV0U3BlZWQgfSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUpO1xuXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgdGhpcy5zY2FsZS5zZXRUbygwLjgpO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmFkZCgnc3Bpbm5pbmcnLCBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XSwgMzAsIHRydWUpO1xuICAgICAgICB0aGlzLnBsYXkoJ3NwaW5uaW5nJyk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmJ1bGxldHMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSBidWxsZXRTcGVlZDtcblxuICAgICAgICAvLyB0aGlzLnNob3RTb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc291bmQoJ2VuZW15U2hvdCcpO1xuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgLy8gQUkhISEhIFxuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgPCAwLjA0ICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gMC4wNCAqIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKyAyO1xuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKj0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wb3NpdGlvbi55ID4gMC45NiAqIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IDAuOTYgKiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gMjtcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICo9IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMua2lsbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24ueSA8IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMua2lsbCgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNob290KCkge1xuXG4gICAgICAgIC8vIHRoaXMuc2hvdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG5cbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldCA9IG5ldyBCdWxsZXQoe1xuICAgICAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5ib3R0b20sXG4gICAgICAgICAgICAgICAgaGVhbHRoOiA1LFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYnVsbGV0JyxcbiAgICAgICAgICAgICAgICB0aW50OiAweGZmMDAwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJ1bGxldHMuYWRkKGJ1bGxldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidWxsZXQucmVzZXQodGhpcy54LCB0aGlzLmJvdHRvbSwgMik7XG4gICAgICAgIH1cblxuICAgICAgICBidWxsZXQuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5idWxsZXRTcGVlZCAgKiAtMTtcbiAgICB9IC8vZW5kIHNob290XG5cbiAgICBkYW1hZ2UoYW1vdW50KSB7XG4gICAgICAgIHN1cGVyLmRhbWFnZShhbW91bnQpO1xuICAgIH1cblxuICAgIHJlc2V0KHsgeCwgeSwgaGVhbHRoLCBidWxsZXRTcGVlZCwgc3BlZWQgfSkge1xuICAgICAgICBzdXBlci5yZXNldCh4LCB5LCBoZWFsdGgpO1xuICAgICAgICB0aGlzLmJ1bGxldFNwZWVkID0gYnVsbGV0U3BlZWQ7XG4gICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gc3BlZWQueDtcbiAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSBzcGVlZC55O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEh1ZCBleHRlbmRzIFBoYXNlci5Hcm91cCB7XG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCBwbGF5ZXIgfSkge1xuICAgICAgICBzdXBlcihnYW1lKTtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgIHRoaXMuYmcgPSBuZXcgUGhhc2VyLkltYWdlKHRoaXMuZ2FtZSwgMCwgMCwgJ2h1ZEJnJyk7XG4gICAgICAgIHRoaXMud2lkdGggPSA4MDA7XG4gICAgICAgIHRoaXMuaGVhbHRoYmFyID0gbmV3IFBoYXNlci5TcHJpdGUodGhpcy5nYW1lLCAyLCAyLCAnaGVhbHRoYmFyJyk7XG4gICAgICAgIHRoaXMuaGVhbHRoYmFyLnNjYWxlLnNldFRvKDAuOTk1LCAxMSk7XG5cbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9ICdTY29yZTogJztcbiAgICAgICAgdGhpcy5zY29yZVRleHQgPSBuZXcgUGhhc2VyLlRleHQodGhpcy5nYW1lLCAyMCwgMTQsIHRoaXMuc2NvcmVMYWJlbCArIHRoaXMuc2NvcmUsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcxM3B4IFZlcmRhbmEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYmcpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLmhlYWx0aGJhcik7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuc2NvcmVUZXh0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVIZWFsdGgoKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoYmFyLmNyb3AobmV3IFBoYXNlci5SZWN0YW5nbGUoMCwgMCwgKHRoaXMucGxheWVyLmhlYWx0aCAvIHRoaXMucGxheWVyLm1heEhlYWx0aCkgKiB0aGlzLndpZHRoLCAxMCkpO1xuICAgICAgICB0aGlzLmhlYWx0aGJhci51cGRhdGVDcm9wKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2NvcmUoYW1vdW50KSB7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gYW1vdW50O1xuICAgICAgICB0aGlzLnNjb3JlVGV4dC50ZXh0ID0gdGhpcy5zY29yZUxhYmVsICsgKHRoaXMuc2NvcmUgKiAxMCk7XG5cbiAgICAgICAgbGV0IGhpZ2hTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaC1zY29yZVwiKTtcblxuICAgICAgICBpZihoaWdoU2NvcmUgPCB0aGlzLnNjb3JlKXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaC1zY29yZVwiLCB0aGlzLnNjb3JlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuIiwiaW1wb3J0IEJ1bGxldCBmcm9tICcuL2J1bGxldCc7XG5pbXBvcnQgQnVsbGV0MiBmcm9tICcuL2J1bGxldCc7IC8vbm90aGluZyB5ZXQsIGRpZmZlcmVudCBidWxsZXQgc3R5bGVzIHBsZWFzZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuXG4gICAgY29uc3RydWN0b3IoeyBnYW1lLCB4LCB5LCBhc3NldCwgZnJhbWUsIGhlYWx0aCB9KSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksIGFzc2V0LCBmcmFtZSk7XG5cbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLnNjYWxlLnNldFRvKDAuOCk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gaGVhbHRoO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcyk7XG4gICAgICAgIHRoaXMuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5ib2R5Lm1heFZlbG9jaXR5LnNldFRvKDI1MCwgMjUwKTtcbiAgICAgICAgLy8gdGhpcy5ib2R5Lm1heEFuZ3VsYXJWZWxvY2l0eSA9IDIwMDtcblxuICAgICAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib2R5LmFsbG93R3Jhdml0eSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5sYXN0UG9zID0ge3gsIHl9O1xuXG4gICAgICAgIHRoaXMuZGlmZiA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLmJ1bGxldHMuZW5hYmxlQm9keSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVsbGV0U3BlZWQgPSAtNDAwO1xuXG4gICAgICAgIC8vIHRoaXMuc2hvdFNvdW5kID0gdGhpcy5nYW1lLmFkZC5zb3VuZCgncGxheWVyU2hvdCcpO1xuXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5pbnB1dC5vblVwLmFkZCgoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5hbGl2ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZnJhbWUgPSAxO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICAgICAgbGV0IGlzVXAgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5VUCkgfHwgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Q29kZS5XKTtcbiAgICAgICAgbGV0IGlzRG93biA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLkRPV04pIHx8IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleUNvZGUuUyk7XG4gICAgICAgIGxldCBpc0xlZnQgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5MRUZUKSB8fCB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlDb2RlLkEpO1xuICAgICAgICBsZXQgaXNSaWdodCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKSB8fCB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlDb2RlLkQpO1xuXG5cbiAgICAgICAgaWYoaXNVcCl7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnkgPSAtNTAwO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRG93bil7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuYWNjZWxlcmF0aW9uRnJvbVJvdGF0aW9uKHRoaXMucm90YXRpb24sIC0yMDAsIHRoaXMuYm9keS5hY2NlbGVyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi55ID0gNTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAyMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi55IC09IDMwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvZHkudmVsb2NpdHkueSA8IC0yMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24ueSArPSAzMDtcbiAgICAgICAgICAgIH0gZWxzZSB7ICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNSaWdodCl7XG4gICAgICAgICAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnggPSA1MDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNMZWZ0KXtcbiAgICAgICAgICAgICB0aGlzLmJvZHkuYWNjZWxlcmF0aW9uLnggPSAtNTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnggPiAyMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi54IC09IDMwO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvZHkudmVsb2NpdHkueCA8IC0yMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24ueCArPSAzMDtcblxuICAgICAgICAgICAgfSBlbHNlIHsgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5hY2NlbGVyYXRpb24ueCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5ib2R5LmFjY2VsZXJhdGlvbi54KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ib2R5LnZlbG9jaXR5KTtcblxuICAgIH0gLy9lbmQgdXBkYXRlIFxuXG4gICAgc2hvb3QoKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlKTtcblxuICAgICAgICAvLyB0aGlzLnNob3RTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0Rmlyc3RFeGlzdHMoZmFsc2UpO1xuXG4gICAgICAgIGxldCBfeU9mZnNldCA9IHRoaXMueSAtIDM7IFxuXG4gICAgICAgIGlmICghYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQgPSBuZXcgQnVsbGV0KHtcbiAgICAgICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IF95T2Zmc2V0ID0gdGhpcy55IC0gMyxcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDMsXG4gICAgICAgICAgICAgICAgYXNzZXQ6ICdidWxsZXQnLFxuICAgICAgICAgICAgICAgIHRpbnQ6IDB4MDRjMTEyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5hZGQoYnVsbGV0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1bGxldC5yZXNldCh0aGlzLngsICBfeU9mZnNldCA9IHRoaXMueSAtIDMsIDMpO1xuICAgICAgICB9XG4gICAgICAgIGJ1bGxldC5ib2R5LnJvdGF0aW9uID0gdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm1vdmVUb1BvaW50ZXIoYnVsbGV0LCB0aGlzLmJ1bGxldFNwZWVkLCB0aGlzLmdhbWUuaW5wdXQuYWN0aXZlUG9pbnRlciwgNTAwKTtcbiAgICAgICAgLy8gYnVsbGV0LmJvZHkudmVsb2NpdHkueCA9IHRoaXMuYnVsbGV0U3BlZWQgKiAtMTtcbiAgICB9IC8vIEVORCBzaG9vdFxuXG4gICAgZGFtYWdlKGFtb3VudCkge1xuICAgICAgICBzdXBlci5kYW1hZ2UoYW1vdW50KTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdsb2FkZXJCZycsICdpbWcvbG9hZGVyLWJnLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvYWRlckJhcicsICdpbWcvbG9hZGVyLWJhci5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcblxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnUHJlbG9hZCcpO1xuICAgIH1cblxufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIEJvb3R9IGZyb20gJy4vYm9vdCc7XG5leHBvcnQge2RlZmF1bHQgYXMgUHJlbG9hZH0gZnJvbSAnLi9wcmVsb2FkJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBNZW51fSBmcm9tICcuL21lbnUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFBsYXl9IGZyb20gJy4vcGxheSc7XG5leHBvcnQge2RlZmF1bHQgYXMgT3Zlcn0gZnJvbSAnLi9vdmVyJztcbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmltcG9ydCBDdWJlIGZyb20gJy4uL2N1YmUnOyBcblxubGV0IF9UaHJlZVVJO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGNyZWF0ZSgpIHtcblxuICAgICAgICBuZXcgTWFpbigpOyAvLyBjcmVhdGVzIHRocmVlIGpzIG1lbnUgaW4gbWVudSBzdGF0ZVxuXG4gICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdtZW51TXVzaWMnKTtcblxuICAgICAgICB0aGlzLnRpdGxlID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTIwMCwgJ3dhclNoaXAnLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50aXRsZS5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmludHJvID0gbmV3IFBoYXNlci5UZXh0KHRoaXMuZ2FtZSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTEwMCwgJ1dBU0QgKyBjbGljayB0byBzaG9vdCcsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcxNHB4IFRhaG9tYScsXG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmludHJvLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdTdGFydCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHRoaXMubG9hZG91dDEgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdsb2Fkb3V0IG9uZScsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIGZvbnQ6ICcxNnB4IFZlcmRhbmEnLFxuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2gtc2NvcmVcIik7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbCA9ICdIaWdoIFNjb3JlOiAnO1xuICAgICAgICB0aGlzLnNjb3JlVGV4dCA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIDIwLCAxNCwgdGhpcy5zY29yZUxhYmVsICsgKHRoaXMuc2NvcmUgKiAxMCksIHtcbiAgICAgICAgICAgIGZvbnQ6ICcxM3B4IFZlcmRhbmEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuYnRuT3ZlclNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVPdmVyJyk7XG4gICAgICAgIC8vIHRoaXMuYnRuT3V0U291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU91dCcpO1xuICAgICAgICAvLyB0aGlzLmJ0bkRvd25Tb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51RG93bicpO1xuXG4gICAgICAgIC8vIHRoaXMuc3RhcnQuc2V0T3ZlclNvdW5kKHRoaXMuYnRuT3ZlclNvdW5kKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydC5zZXRPdXRTb3VuZCh0aGlzLmJ0bk91dFNvdW5kKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydC5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dFVwLmFkZCgoKT0+e1xuICAgICAgICAgICAgLy8gdGhpcy5tdXNpYy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gICAgICAgICAgICAvL2tpbGwgdGhyZWUganMgdmlld1xuICAgICAgICAgICAgJChfVGhyZWVVSSkucmVtb3ZlKCk7IFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvYWRvdXQxLm9uSW5wdXRVcC5hZGQoKCk9PntcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2Fkb3V0XCIsIDEpOyBcblxuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgdGhpcy5tZW51UGFuZWwgPSB0aGlzLmFkZC5ncm91cCgpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbC5hZGQodGhpcy50aXRsZSk7XG4gICAgICAgIHRoaXMubWVudVBhbmVsLmFkZCh0aGlzLnN0YXJ0KTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMuc2NvcmVUZXh0KTtcbiAgICAgICAgdGhpcy5tZW51UGFuZWwuYWRkKHRoaXMuaW50cm8pO1xuXG4gICAgICAgIC8vIHRoaXMubXVzaWMubG9vcEZ1bGwoKTtcblxuXG5cbiAgICAvLyAkKCcjYnRuT25lJykuY2xpY2sodGhpcy5zdGF0ZS5zdGFydCgnUGxheScpKTtcblxuXG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCApO1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggdGhpcy5yZW5kZXJlci5kb21FbGVtZW50ICk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzaXplKClcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyksIGZhbHNlKTtcblxuXG4gICAgICAgIF9UaHJlZVVJID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xuXG4gICAgICAgICQoX1RocmVlVUkpLmFkZENsYXNzKFwidGhyZWVDbGFzc1wiKTtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnQobmV3IEN1YmUoKSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgYWRkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5wbGFjZSh0aGlzLnNjZW5lKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5cblxuXG5cbiIsImltcG9ydCBUZXh0QnV0dG9uIGZyb20gJy4uL2V4dGVuc2lvbnMvdGV4dGJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUaXRsZSA9IG5ldyBQaGFzZXIuVGV4dCh0aGlzLmdhbWUsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWS0yMDAsICdHYW1lIG92ZXInLCB7XG4gICAgICAgICAgICBmb250OiAnMzZweCBUYWhvbWEnLFxuICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclRpdGxlLmFuY2hvci5zZXRUbygwLjUpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLTMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdUcnkgYWdhaW4nLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBmb250OiAnMTZweCBWZXJkYW5hJyxcbiAgICAgICAgICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgVGV4dEJ1dHRvbih7XG4gICAgICAgICAgICBnYW1lOiB0aGlzLmdhbWUsXG4gICAgICAgICAgICB4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCxcbiAgICAgICAgICAgIHk6IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZKzMwLFxuICAgICAgICAgICAgYXNzZXQ6ICdidXR0b24nLFxuICAgICAgICAgICAgb3ZlckZyYW1lOiAyLFxuICAgICAgICAgICAgb3V0RnJhbWU6IDEsXG4gICAgICAgICAgICBkb3duRnJhbWU6IDAsXG4gICAgICAgICAgICB1cEZyYW1lOiAxLFxuICAgICAgICAgICAgbGFiZWw6ICdNZW51JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgZm9udDogJzE2cHggVmVyZGFuYScsXG4gICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5idG5PdmVyU291bmQgPSB0aGlzLmFkZC5zb3VuZCgnbWVudU92ZXInKTtcbiAgICAgICAgLy8gdGhpcy5idG5PdXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdtZW51T3V0Jyk7XG4gICAgICAgIC8vIHRoaXMuYnRuRG93blNvdW5kID0gdGhpcy5hZGQuc291bmQoJ21lbnVEb3duJyk7XG5cbiAgICAgICAgLy8gdGhpcy5zdGFydC5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0LnNldE91dFNvdW5kKHRoaXMuYnRuT3V0U291bmQpO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0LnNldERvd25Tb3VuZCh0aGlzLmJ0bkRvd25Tb3VuZCk7XG4gICAgICAgIC8vIHRoaXMubWVudS5zZXRPdmVyU291bmQodGhpcy5idG5PdmVyU291bmQpO1xuICAgICAgICAvLyB0aGlzLm1lbnUuc2V0T3V0U291bmQodGhpcy5idG5PdXRTb3VuZCk7XG4gICAgICAgIC8vIHRoaXMubWVudS5zZXREb3duU291bmQodGhpcy5idG5Eb3duU291bmQpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQub25JbnB1dERvd24uYWRkKCgpPT57XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdQbGF5Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWVudS5vbklucHV0RG93bi5hZGQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsID0gdGhpcy5hZGQuZ3JvdXAoKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlclBhbmVsLmFkZCh0aGlzLmdhbWVPdmVyVGl0bGUpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMuc3RhcnQpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyUGFuZWwuYWRkKHRoaXMubWVudSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuLi9wcmVmYWJzL3BsYXllcic7XG5pbXBvcnQgRW5lbXkgZnJvbSAnLi4vcHJlZmFicy9lbmVteSc7XG5pbXBvcnQgSFVEIGZyb20gJy4uL3ByZWZhYnMvaHVkJztcbi8vIGltcG9ydCBHQ29uc3RhbnRzIGZyb20gJy4uL3ByZWZhYnMvZ0NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXkgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG5cbiAgICBjcmVhdGUoKSB7XG5cbiAgICAgICAgdmFyIGdEYXRhID0gdGhpcy5jYWNoZS5nZXRKU09OKCdnYW1lRGF0YScpO1xuXG4gICAgICAgIHRoaXMuZmFyYmFjayA9IHRoaXMuYWRkLnRpbGVTcHJpdGUoMCwgMCwgODAwLCA2MDAsICdmYXJiYWNrJyk7IC8vdGhlIG1hcCBiZ1xuXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLnNsb3dNb3Rpb24gPSAxO1xuXG4gICAgICAgIHRoaXMuZW5lbWllcyA9IHRoaXMuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRoaXMuZW5lbWllcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoe1xuICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgeDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclgsXG4gICAgICAgICAgICB5OiAwLjkyICogdGhpcy5nYW1lLndvcmxkLmhlaWdodCxcbiAgICAgICAgICAgIGhlYWx0aDogZ0RhdGFbMF0uaHAsXG4gICAgICAgICAgICBhc3NldDogJ25ld2ZpZ3RoZXInLFxuICAgICAgICAgICAgZnJhbWU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBsYXllcik7XG5cbiAgICAgICAgdGhpcy5odWQgPSBuZXcgSFVEKHtcbiAgICAgICAgICAgIGdhbWU6IHRoaXMuZ2FtZSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXJcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvL2lucHV0cyBvbmx5IHRha2VzIG1vdXNlIHRvIHNsb3cgZG93blxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2hvb3RpbmcgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25VcC5hZGQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnRpbWUuc2xvd01vdGlvbiA9IDM7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNob290aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gLjU7XG4gICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RJbnRlcnZhbCA9IDM7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJTaG9vdFRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBsYXllclNob290SW50ZXJ2YWwgPSAuMDAxO1xuICAgICAgICB0aGlzLnBsYXllclNob290aW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy9lbmVteSBpbnRlcnZhbCBzcGF3bmVyIHRoaXMgc2hvdWxkIGJlIHNtYXJ0ZXIgXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQgKiAxMCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5lbmVteUludGVydmFsID4gMC4yICl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteUludGVydmFsIC09IDAuMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwID0gdGhpcy5hZGQuYml0bWFwRGF0YSh0aGlzLmdhbWUud2lkdGgsIHRoaXMuZ2FtZS5oZWlnaHQpO1xuICAgICAgICB0aGlzLm92ZXJsYXlCaXRtYXAuY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcbiAgICAgICAgdGhpcy5vdmVybGF5Qml0bWFwLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmdhbWUud2lkdGgsIHRoaXMuZ2FtZS5oZWlnaHQpO1xuXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMuYWRkLnNwcml0ZSgwLCAwLCB0aGlzLm92ZXJsYXlCaXRtYXApO1xuICAgICAgICB0aGlzLm92ZXJsYXkudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYWxwaGEgPSAwLjc1O1xuXG4gICAgICAgIC8vIHRoaXMubXVzaWMgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdwbGF5TXVzaWMnKTtcbiAgICAgICAgLy8gdGhpcy5idWxsZXRIaXRTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdidWxsZXRIaXQnKTtcbiAgICAgICAgLy8gdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kID0gdGhpcy5hZGQuc291bmQoJ2VuZW15RXhwbG9zaW9uJyk7XG4gICAgICAgIC8vIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQgPSB0aGlzLmFkZC5zb3VuZCgncGxheWVyRXhwbG9zaW9uJyk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IHRoaXMuYWRkLnNvdW5kKCdnYW1lT3ZlcicpO1xuXG4gICAgICAgIC8vIHRoaXMubXVzaWMubG9vcEZ1bGwoKTtcbiAgICB9IC8vRU5EIENSRUFURVxuXG4gICAgdXBkYXRlKCkge1xuXG4gICAgICAgIHRoaXMuZW5lbXlUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLmVuZW15U2hvb3RUaW1lICs9IHRoaXMuZ2FtZS50aW1lLnBoeXNpY3NFbGFwc2VkO1xuICAgICAgICB0aGlzLnBsYXllclNob290VGltZSArPSB0aGlzLmdhbWUudGltZS5waHlzaWNzRWxhcHNlZDtcblxuICAgICAgICBpZiAodGhpcy5lbmVteVRpbWUgPiB0aGlzLmVuZW15SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlUaW1lID0gMDtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteSh7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGhpcy5nYW1lLFxuICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDYsIDc2KSAqIDEwLFxuICAgICAgICAgICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoNSwgMTApICogLTEwLCAvL3RpbWVzIC0xMCBzbyBpdCBtb3ZlcyB0byB0aGUgbGVmdFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDUsIDEwKSAqIDEwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFsdGg6IDksXG4gICAgICAgICAgICAgICAgYnVsbGV0U3BlZWQ6IHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMTAsIDIwKSAqIDEwLFxuICAgICAgICAgICAgICAgIGFzc2V0OiAnYWxpZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZW15U2hvb3RUaW1lID4gdGhpcy5lbmVteVNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlTaG9vdFRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2hBbGl2ZShlbmVteSA9PiBlbmVteS5zaG9vdCgpKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5wbGF5ZXJTaG9vdGluZyl7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJTaG9vdFRpbWUgPiB0aGlzLnBsYXllclNob290SW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNob290VGltZSA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zaG9vdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMucGxheWVyLmJ1bGxldHMsIHRoaXMuZW5lbWllcywgdGhpcy5oaXRFbmVteSwgbnVsbCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5wbGF5ZXIsIHRoaXMuZW5lbWllcywgdGhpcy5jcmFzaEVuZW15LCBudWxsLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmVuZW1pZXMuZm9yRWFjaChlbmVteSA9PiB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLnBsYXllciwgZW5lbXkuYnVsbGV0cywgdGhpcy5oaXRQbGF5ZXIsIG51bGwsIHRoaXMpKTtcblxuICAgICAgICB0aGlzLmZhcmJhY2sudGlsZVBvc2l0aW9uLnggLT0gMztcbiAgICB9IC8vRU5EIFVQREFURVxuXG4gICAgY3JlYXRlRW5lbXkoZGF0YSkge1xuXG4gICAgICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllcy5nZXRGaXJzdEV4aXN0cyhmYWxzZSk7XG5cbiAgICAgICAgaWYgKCFlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkgPSBuZXcgRW5lbXkoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuYWRkKGVuZW15KTtcbiAgICAgICAgfVxuICAgICAgICBlbmVteS5yZXNldChkYXRhKTtcbiAgICB9XG5cbiAgICBoaXRFZmZlY3Qob2JqLCBjb2xvcikge1xuICAgICAgICBsZXQgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKG9iaik7XG4gICAgICAgIGxldCBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKCk7XG4gICAgICAgIGxldCBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICBsZXQgcGFydGljbGVTcGVlZCA9IDEwMDtcbiAgICAgICAgbGV0IG1heFBhcnRpY2xlcyA9IDEwO1xuXG4gICAgICAgIHR3ZWVuLnRvKHt0aW50OiAweGZmMDAwMH0sIDEwMCk7XG4gICAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKCgpID0+IHtcbiAgICAgICAgICAgIG9iai50aW50ID0gMHhmZmZmZmY7XG4gICAgICAgIH0pO1xuICAgICAgICB0d2Vlbi5zdGFydCgpO1xuXG4gICAgICAgIGVtaXR0ZXIueCA9IG9iai54O1xuICAgICAgICBlbWl0dGVyLnkgPSBvYmoueTtcbiAgICAgICAgZW1pdHRlci5ncmF2aXR5ID0gMDtcbiAgICAgICAgZW1pdHRlci5tYWtlUGFydGljbGVzKCdwYXJ0aWNsZScpO1xuXG4gICAgICAgIGlmIChvYmouaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHBhcnRpY2xlU3BlZWQgPSAyMDA7XG4gICAgICAgICAgICBtYXhQYXJ0aWNsZXMgPSA0MDtcbiAgICAgICAgICAgIGNvbG9yID0gMHhmZjAwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0VG8oLXBhcnRpY2xlU3BlZWQsIC1wYXJ0aWNsZVNwZWVkKTtcbiAgICAgICAgZW1pdHRlci5tYXhQYXJ0aWNsZVNwZWVkLnNldFRvKHBhcnRpY2xlU3BlZWQsIHBhcnRpY2xlU3BlZWQpO1xuICAgICAgICBlbWl0dGVyLnN0YXJ0KHRydWUsIDUwMCwgbnVsbCwgbWF4UGFydGljbGVzKTtcbiAgICAgICAgZW1pdHRlci51cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgKz0gdGhpcy5nYW1lLnRpbWUucGh5c2ljc0VsYXBzZWQ7XG4gICAgICAgICAgICBpZihlbWl0dGVyUGh5c2ljc1RpbWUgPj0gMC42KXtcbiAgICAgICAgICAgICAgICBlbWl0dGVyUGh5c2ljc1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIGVtaXR0ZXIuZm9yRWFjaChwYXJ0aWNsZSA9PiBwYXJ0aWNsZS50aW50ID0gY29sb3IpO1xuICAgICAgICBpZiAoIXRoaXMucGxheWVyLmFsaXZlKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9jb2xsaXNpb25cblxuICAgIGhpdEVuZW15KGJ1bGxldCwgZW5lbXkpIHtcbiAgICAgICAgLy8gdGhpcy5idWxsZXRIaXRTb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICBlbmVteS5kYW1hZ2UoYnVsbGV0LmhlYWx0aCk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KGVuZW15LCBidWxsZXQudGludCk7XG4gICAgICAgIGlmICghZW5lbXkuYWxpdmUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZW5lbXlFeHBsb3Npb25Tb3VuZC5wbGF5KFwiXCIsMCwwLjUpO1xuICAgICAgICAgICAgdGhpcy5odWQudXBkYXRlU2NvcmUoZW5lbXkubWF4SGVhbHRoKTtcbiAgICAgICAgfVxuICAgICAgICBidWxsZXQua2lsbCgpO1xuICAgIH1cblxuICAgIGhpdFBsYXllcihwbGF5ZXIsIGJ1bGxldCkge1xuICAgICAgICAvLyB0aGlzLmJ1bGxldEhpdFNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgIHBsYXllci5kYW1hZ2UoYnVsbGV0LmhlYWx0aCk7XG4gICAgICAgIHRoaXMuaHVkLnVwZGF0ZUhlYWx0aCgpO1xuICAgICAgICB0aGlzLmhpdEVmZmVjdChwbGF5ZXIsIGJ1bGxldC50aW50KTtcbiAgICAgICAgaWYgKCFwbGF5ZXIuYWxpdmUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMucGxheWVyRXhwbG9zaW9uU291bmQucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGJ1bGxldC5raWxsKCk7XG4gICAgfVxuXG4gICAgY3Jhc2hFbmVteShwbGF5ZXIsIGVuZW15KSB7XG4gICAgICAgIGVuZW15LmRhbWFnZShlbmVteS5oZWFsdGgpO1xuICAgICAgICBwbGF5ZXIuZGFtYWdlKGVuZW15LmhlYWx0aCk7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KHBsYXllcik7XG4gICAgICAgIHRoaXMuaGl0RWZmZWN0KGVuZW15KTtcbiAgICAgICAgaWYgKCFlbmVteS5hbGl2ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5lbmVteUV4cGxvc2lvblNvdW5kLnBsYXkoXCJcIiwwLDAuNSk7XG4gICAgICAgICAgICB0aGlzLmh1ZC51cGRhdGVTY29yZShlbmVteS5tYXhIZWFsdGgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHVkLnVwZGF0ZUhlYWx0aCgpO1xuICAgICAgICBpZiAoIXBsYXllci5hbGl2ZSkge1xuICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJFeHBsb3Npb25Tb3VuZC5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICB0aGlzLmdhbWUudGltZS5zbG93TW90aW9uID0gMztcbiAgICAgICAgdGhpcy5vdmVybGF5LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUud29ybGQuYnJpbmdUb1RvcCh0aGlzLm92ZXJsYXkpO1xuICAgICAgICBsZXQgdGltZXIgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUodGhpcy5nYW1lLCB0cnVlKTtcbiAgICAgICAgdGltZXIuYWRkKDMwMDAsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubXVzaWMuc3RvcCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5nYW1lT3ZlclNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnT3ZlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWQgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRlckJnID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJnJyk7XG4gICAgICAgIHRoaXMubG9hZGVyQmFyID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgJ2xvYWRlckJhcicpO1xuICAgICAgICB0aGlzLmxvYWRlckJnLmFuY2hvci5zZXRUbygwLjUpO1xuICAgICAgICB0aGlzLmxvYWRlckJhci5hbmNob3Iuc2V0VG8oMC41KTtcblxuICAgICAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmxvYWRlckJhcik7XG5cbiAgICAgICAgLy8gdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdzbWFsbGZpZ2h0ZXInLCAnaW1nL3Nwcml0ZXNoZWV0L3NtYWxsZmlnaHRlci5wbmcnLCAnZGF0YS9zcHJpdGVzaGVldC9zbWFsbGZpZ2h0ZXIuanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuYXRsYXNKU09OQXJyYXkoJ25ld2ZpZ3RoZXInLCAnaW1nL3Nwcml0ZXNoZWV0L25ld2ZpZ3RoZXIucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvbmV3ZmlndGhlci5qc29uJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF0bGFzSlNPTkFycmF5KCdhbGllbicsICdpbWcvc3ByaXRlc2hlZXQvYWxpZW4ucG5nJywgJ2RhdGEvc3ByaXRlc2hlZXQvYWxpZW4uanNvbicpO1xuICAgICAgICB0aGlzLmxvYWQuYXRsYXNKU09OQXJyYXkoJ2J1dHRvbicsICdpbWcvc3ByaXRlc2hlZXQvYnV0dG9uLnBuZycsICdkYXRhL3Nwcml0ZXNoZWV0L2J1dHRvbi5qc29uJyk7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnZmFyYmFjaycsICdpbWcvbmlnaHRfc2t5LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdpbWcvYnVsbGV0LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhcnRpY2xlJywgJ2ltZy9wYXJ0aWNsZS5naWYnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdoZWFsdGhiYXInLCAnaW1nL2hlYWx0aGJhci5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdodWRCZycsICdpbWcvaHVkLWJnLnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheU11c2ljJywgWydhdWRpby9tdXNpYy9wbGF5Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtZW51TXVzaWMnLCBbJ2F1ZGlvL211c2ljL21lbnUubXAzJ10pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU92ZXInLCBbJ2F1ZGlvL3NvdW5kL21lbnUtb3Zlci5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWVudU91dCcsIFsnYXVkaW8vc291bmQvbWVudS1vdXQubXAzJ10pO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21lbnVEb3duJywgWydhdWRpby9zb3VuZC9tZW51LWNsaWNrLm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2J1bGxldEhpdCcsIFsnYXVkaW8vc291bmQvYnVsbGV0LWhpdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnZW5lbXlTaG90JywgWydhdWRpby9zb3VuZC9lbmVteS1zaG90Lm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdlbmVteUV4cGxvc2lvbicsIFsnYXVkaW8vc291bmQvZW5lbXktZXhwbG9zaW9uLm1wMyddKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJTaG90JywgWydhdWRpby9zb3VuZC9wbGF5ZXItc2hvdC5tcDMnXSk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygncGxheWVyRXhwbG9zaW9uJywgWydhdWRpby9zb3VuZC9wbGF5ZXItZXhwbG9zaW9uLm1wMyddKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2dhbWVPdmVyJywgWydhdWRpby9zb3VuZC9nYW1lLW92ZXIubXAzJ10pO1xuXG4gICAgICAgIHRoaXMubG9hZC5qc29uKCdnYW1lRGF0YScsICdkYXRhL2dhbWVEYXRhLmpzb24nKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ01lbnUnKTtcbiAgICB9XG5cbn1cbiJdfQ==
