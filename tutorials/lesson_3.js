/**
 * NodeBots Day - Sacramento
 *
 * Lesson 3: Operate a Motor
 */

// Pull in the Johnny Five Robotics & IoT library
var five = require('johnny-five');

// Initialize an object that provides a base interface to the physical Arduino Uno
var board = new five.Board();

// All device objects depend on an initialized and "ready" board object.
// This creates an "event listener" whose function is called once the board says
// that it is "ready" to receive input from our code.
board.on('ready', function() {
  // In order for our SumoBot to be able to move around, we must add at least
  // one drive motor.
  //
  // Just like with a servo, we could hook up our DC motors directly to the
  // Arduino Uno's built-in 5v connector. Unfortunately, that is not enough
  // power to drive the motors at any appreciable speed.
  //
  // In order to get the right amount of power to our motors, we need to attach
  // a Motor Shield to the Arduino Uno. The Motor Shield mounts the Uno using
  // all of the pin headers available.
  //
  // Go ahead and insert the Motor Shield now.
  //
  // Once mounted, its time to add our motor. The Motor Shield can support up
  // to four motors and two servos. For this excercise, we will start by
  // attaching a single motor. Take one of your motors and attach the red wire
  // to one of the terminals labeled "M1" and the black wire to the other "M1"
  // terminal. It doesn't matter which one goes where, the order only affects
  // which way the motor will spin.
  //
  // Motor Shields from different manufacturers have different configurations.
  // Thankfully, Johnny Five provides a set of pre-defined configuration options
  // for the most popular Motor Shields.
  //
  // Our Motor Shield is compatible with Adafruit-manufactured shields, so we
  // our going to use that pre-defined configuration with our SumoBot.
  var config = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;

  // Let's tell Johnny Five about our motor
  var motor = new five.Motor(config.M1);

  // Now make the motor go forward at max speed
  motor.forward(255);

  // Finally, clean up after ourselves when we exit
  this.on('exit', function() {
    motor.stop();
  });

  // At this point, you should have a motor that runs infintely
  //
  // Using the documentation available on http://johnny-five.io/api/motor/#api,
  // see if you can program the motor to do the following:
  //
  // * Run backwards
  // * Run at 50% speed
  // * Control a servo attached to the Motor Shield
});
