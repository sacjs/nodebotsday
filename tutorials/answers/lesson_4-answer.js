/**
 * NodeBots Day - Sacramento
 *
 * Lesson 4: Use keyboard input to drive two motors
 *
 * NOTE: These answers are only one of many ways to accomplish each challenge.
 * If your code gets the job done but doesn't look exactly like this, THAT IS
 * 100% OK!
 */

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var config = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;
  var wheels = new five.Motors([config.M1, config.M2]);
  var servo = new five.Servo(10);
  var stdin = process.openStdin();
  process.stdin.setRawMode(true);

  var MOVE_TTL = 125;
  var POSITION = 0;
  var POSITIONS = {
    0: 180,
    180: 0
  };

  function autoStop() {
    var timestamp = Date.now();
    this._lastMovment = timestamp;
    board.wait(MOVE_TTL, function() {
      if(this._lastMovment === timestamp) {
        this.stop();
      }
    }.bind(this));
  }

  wheels[0].on('start', autoStop);
  wheels[1].on('start', autoStop);

  stdin.on('keypress', function(chunk, key) {
    switch(key.name) {
      case 'up':
        wheels.fwd(255);
        break;
      case 'down':
        wheels.rev(255);
        break;
      case 'left':
        wheels[0].fwd(255);
        wheels[1].rev(255);
        break;
      case 'right':
        wheels[0].rev(255);
        wheels[1].fwd(255);
        break;
      case 'space':
        servo.to(POSITION);
        POSITION = POSITIONS[POSITION];
        break;
      default:
        console.info('Pressed %s', key.name);
    }
  });

  this.on('exit', function() {
    wheels.stop();
  });
});
