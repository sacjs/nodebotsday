/**
 * NodeBots Day - Sacramento
 *
 * Lesson 2: Operate a Servo
 *
 * NOTE: These answers are only one of many ways to accomplish each challenge.
 * If your code gets the job done but doesn't look exactly like this, THAT IS
 * 100% OK!
 */

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var servo = new five.Servo({
    pin: 9,
    startAt: 0
  });

  // Sweep between 45- and 135-degrees
  servo.sweep([45, 135]);

  this.wait(3000, function() {
    servo.stop();
    servo.home();
    board.wait(3000, function() {
      servo.stop();
      servo.to(170, 500);
      board.wait(1000, function() {
        servo.to(25);
      });
    });
  });

  // Finally, clean up after ourselves when we exit
  this.on('exit', function() {
    servo.stop();
  });
});
