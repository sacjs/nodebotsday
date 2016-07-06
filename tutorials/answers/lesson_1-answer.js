/**
 * NodeBots Day - Sacramento
 *
 * Lesson 1: Blink an LED
 *
 * NOTE: These answers are only one of many ways to accomplish each challenge.
 * If your code gets the job done but doesn't look exactly like this, THAT IS
 * 100% OK!
 */

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(13);
  led.on();

  this.on('exit', function() {
    led.off();
  });
});
