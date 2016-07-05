/**
 * NodeBots Day - Sacramento
 *
 * Lesson 2: Operate a Servo
 */

// Pull in the Johnny Five Robotics & IoT library
var five = require('johnny-five');

// Initialize an object that provides a base interface to the physical Arduino Uno
var board = new five.Board();

// All device objects depend on an initialized and "ready" board object.
// This creates an "event listener" whose function is called once the board says
// that it is "ready" to receive input from our code.
board.on('ready', function() {
  // Most devices that connect to the Arduino Uno need three different
  // connections to the board:
  //
  // * Power (3.3v or 5v)
  // * Ground (GND)
  // * Data
  //
  // The Arduino Uno provides three different types of data connections:
  //
  // * Digital (pins 2 - 13)
  // * Digital Pulse-Width Modulation (or PWM, denoted by a "~", pins 3, 5,6, 9, 10, and 11)
  // * Analog (pins A0 - A5)
  //
  // We won't get into the differences between the 3 right now, but servo
  // conncetions require a digital connection. Using the provided lead wires, go
  // ahead and connect the servo to the Arduino Uno:
  //
  // * Connect the black wire to any GND on the Arduino
  // * Connect the red wire to the 3.3v or 5v connection on the Arduino
  // * Connect the orange wire to Digital Pin 9
  //
  // Let's tell Johnny Five about our servo and connection details:
  var servo = new five.Servo(9);

  // Now "sweep" the servo from 0 degrees to 180 degress and repeat.
  servo.sweep([45, 135]);

  // Finally, clean up after ourselves when we exit
  this.on('exit', function() {
    servo.stop();
  });

  // At this point, you should have a servo that is turning back and forth
  // infinitely.
  //
  // Using the documentation available on http://johnny-five.io/api/servo/#api,
  // see if you can program the servo to do the following this:
  //
  // * Initialize the servo at a specific position
  // * Sweep between 45 and 135 degrees
  // * Step through specific angles of your choosing
  //
  // NOTE: Some solutions may require a slightly more advanced configuration of
  // our Servo object, so be sure to read the Johnny Five documentation!
});
