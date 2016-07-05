/**
 * NodeBots Day 2016 - Sacramento
 *
 * STEP 4: Control components from the keyboard
 */

// Pull in the Johnny Five Robotics & IoT library
var five = require('johnny-five');

// Initialize an object that provides a base interface to the physical Arduino Uno
var board = new five.Board();

// All device objects depend on an initialized and "ready" board object.
// This creates an "event listener" whose function is called once the board says
// that it is "ready" to receive input from our code.
board.on('ready', function() {
  // Pull in the Adafruit-manufactured Motor Shield configuration
  var config = five.Motor.SHIELD_CONFIGS.ADAFRUIT_V1;

  // Connect your second motor to the Motor Shield, just like you did with the
  // first motor, to the terminal labeled "M2"
  // Once connection, tell our Arduino about our two motors (or wheels)
  var wheels = new five.Motors([config.M1, config.M2]);

  // Running Johnny Five puts us in a "REPL", an environment that allows you to
  // type code and have it immediately execute on the Arduino Uno. As you type
  // in your keyboard, those keypresses are sent to the REPL through a stream
  // called STDIN (standard in). In Node, we can open a connection to STDIN and
  // react to those keypress as they happen.
  //
  // This lets us use the keyboard to directly control our motors and thus
  // control our SumoBot.
  var stdin = process.openStdin();
  process.stdin.setRawMode(true);

  // Listen for the "keypress" event and do something with the input
  stdin.on('keypress', function(chunk, key) {
    switch(key.name) {
      case 'up':
        wheels.forward(255);
        break;
      default:
        console.info('Pressed %s', key.name);
    }
  });

  // Finally, clean up after ourselves when we exit
  this.on('exit', function() {
    wheels.stop();
  });

  // At this point, you should have a motor that runs as soon as you press the
  // "UP" arrow key on your keyboard.
  //
  // * Stop movement once a command has finished
  // * Press the "DOWN" arrow key to go backwards
  // * Turn left and right
  // * Activate a "special move" with a servo
  //
  // NOTE: Some solutions may require a slightly more advanced knowledge of
  // our Wheels and Board objects, so be sure to read the Johnny Five
  // documentation!
});
