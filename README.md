# NodeBots Day: Sacramento

## Prerequisites

*   An available USB port on your computer

*   [Git](https://git-scm.com/download)

*   [Node 4.2.1 LTS](https://nodejs.org/en/)

    If need multiple versions of Node installed, consider [installing nvm](https://www.npmjs.com/package/nvm).

### Windows Users

If you are on a Windows computer, you will also need to [install the Arduino software](https://www.arduino.cc/en/Main/Software) in order to install some required serial port drivers.

## Installation

1.  Checkout this repo:

    `git clone https://github.com/sacjs/nodebotsday.git`

2.  Install the Node dependencies:

    `npm install`

3.  Plug in your Arduino UNO to your computer's USB port

4.  Flash your Arduino UNO with the Standard Firmata:

    `npm run uno:flash`

Now your ready to start programming your Arduino!

## Parts List

Your NodeBots Day SumoBot Kit should include the following components:

*   1 SainSmart Arduino Uno

*   1 SainSmart Motor Shield

*   A SumoBot Chassis

    *   2 side panels
    *   1 top panel
    *   1 bottom panel
    *   1 front plate

*   2 motors

*   2 plastic wheels

*   1 9v battery

*   1 9v battery clip

*   1 6ft. USB Cable

*   6 3/8" screws

*   4 1" bolts

*   4 3/8" nuts

*   1 5/8" ball bearing

*   1 plastic ball bearing holder

## Lesson Plan

If this is the first time you've ever played with hardware or are new to [Johnny Five](http://johnny-five.io/), check out some of our included tutorials.

Each lesson covers one aspect of the SumoBot so that at the end, you'll have a fundamental understanding of how each piece works and how to control them.

*   [Lesson #1](tutorials/lesson_1.js) - Using Johnny Five to control an LED ([answers](tutorials/answers/lesson_1.js))
*   [Lesson #2](tutorials/lesson_2.js) - Operating a Servo  ([answers](tutorials/answers/lesson_1.js))
*   [Lesson #3](tutorials/lesson_3.js) - Operating a Motor  ([answers](tutorials/answers/lesson_1.js))
*   [Lesson #4](tutorials/lesson_4.js) - Control components from the keyboard  ([answers](tutorials/answers/lesson_1.js))

These lessons are available to edit and run locally on your machine:

    node tutorials/lesson_1.js

Combining these skills will give you the knowledge build out your SumoBot!

## Chassis Construction

Now that you have a basic understanding of how to attach and program the various bot components, its time to build your SumoBot!

> _**NOTE:** The chassis is made from 3mm wood. Be mindful when mounting or unmounting things to the chassis as the wood can splinter or break!_

1.  Mount the ball bearing holder to the bottom plate using two of the included 3/8" screws

    > _**NOTE:** Be mindful of your work surface! The screws tips extend beyond the wood and could damage the surface!_

2.  Mount the Arduino Uno to the top plate using four of the included 3/8" screws

3.  Mount the Motor Shield to the Arduino

4.  Mount a motor to each side panel using 2 1" bolts and 2 3/8" nuts

5.  Assemble the chassis by inserting the tabs of the top and bottom panel into the slots of the side panels

6.  Attach the front plate by inserting the tabs of the side plates into the slots of the front panel

7.  Carefully attach the wheels to each motor

    > _**NOTE:** Sometimes wheel mounting requires an extra bit of muscle! Be sure to apply pressure to the wheel or motor and not the chassis itself!_

8.  Insert the 5/8" ball bearing into the ball bearing holder

9.  Attach the 9v battery clip to the Uno and insert the battery into cavity of the chassis

    > _**NOTE:** Mounting the battery last helps prevent any accidental puncturing of the battery. Be aware of this if you remount or attach new items to your SumoBot!_

## Congratulations

You have a fully functional SumoBot!

Now is the time to start thinking about customization, control interfaces, defenses, and weaponization!

Have fun hacking!

## Additional Resources

*   [NodeBots.io](http://nodebots.io/)
*   [Johnny Five](http://johnny-five.io/)
*   [NodeBots NodeSchool Workshop](https://github.com/tableflip/nodebot-workshop)
*   [Arduino Experimenter's Guide for NodeJS](http://node-ardx.org/)
*   [NodeBots Interchange](https://github.com/j5js/nodebots-interchange)
*   [NodeBots Day](https://github.com/nodebots/nodebotsday)
*   [NodeBots Reddit](https://www.reddit.com/r/NodeBots/)
