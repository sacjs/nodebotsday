/**
 * NodeBots Day - Sacramento
 *
 * Lesson 2: Operate a Motor
 *
 * NOTE: These answers are only one of many ways to accomplish each challenge.
 * If your code gets the job done but doesn't look exactly like this, THAT IS
 * 100% OK!
 */

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var config = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;
  var motor = new five.Motor(config.M1);
  var servo = new five.Servo({
    pin: 10,
    startAt: 0
  });

  motor.forward(255);

  this.wait(1000, function() {
    motor.reverse(255);
  });
  this.wait(2000, function() {
    motor.reverse(125);
  });
  this.wait(3000, function() {
    motor.stop();
    servo.sweep();
  })

  this.on('exit', function() {
    motor.stop();
    servo.stop();
  });
});
