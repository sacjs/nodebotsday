/**
 * NodeBots Day - Sacramento
 *
 * Lesson 1: Blink an LED
 */

// Pull in the Johnny Five Robotics & IoT library
var five = require('johnny-five');

// Initialize an object that provides a base interface to the physical Arduino Uno
var board = new five.Board();

// All device objects depend on an initialized and "ready" board object.
// This creates an "event listener" whose function is called once the board says
// that it is "ready" to receive input from our code.
board.on('ready', function() {
  // The Arduino Uno includes an on-board LED hard-wired to "pin 13". Since it
  // is built-in, we do not need to plug anything into the board itself. We will
  // use this LED to test our local development environment.

  // Create an object that represents a single LED attached to our Arduino Uno
  // on pin 13
  var led = new five.Led(13);

  // Strobe the pin on/off, defaults to 100ms phases
  led.on();

  // At this point, you should see a small amber-colored LED glowing. The LED
  // is located by the pin headers just below the GND and 13 pins, labelled with
  // an "L"
  //
  // Once satisfied that your LED is on, press `Ctrl-C` twice to exit your
  // program.
  //
  // If you look at your board, the LED is still on! 😲
  //
  // To stop it immediately, press the "Reset" button located above the USB port
  //
  // In order to prevent left-over code from continuing to execute, we need to
  // listen for an "exit" event from our Arduino Uno that will clean up the
  // state of the board by telling the LED to turn itself off.
  //
  // Based on the code in this first step, see if you are able to figure out
  // how to accomplish that task!
  //
  // Once you have your clean up code working, feel free to play around a bit
  // more with your LED by learning more about the LED interface can be found at
  // http://johnny-five.io/api/led/#api
});
