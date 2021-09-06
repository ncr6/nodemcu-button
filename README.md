# nodemcu-button
*A quick and dirty attempt to create a "magic button" with an ESP8266 board, a Raspberry Pi and Node.js*
Or, more precisely, a Wi-Fi button that triggers a Telegram message and a piezoelectric buzzer.

# Why?
My 96-year-old grandma recently needs help with more things. Since now more than before I find myself using my computer most of the day, with headphones on, sometimes I couldn't hear when she called me. So I decided to use some components that I had at home to receive notifications whenever my grandmother needs help. 

# Requirements
- A Raspberry Pi (I used Model 1B, GPIO pinout is a little bit different, but that's a single line change in the code).
- An ESP8266 board, like the $2 chinese "NodeMCU" thing.
- A push button.
- A breadboard, unless you have a better way to put it all together.
- A piezoelectric buzzer (I used a passive one with a PCB and 3 pins but the other ones are fine).
- Jumper wires.

# How to build it
Create a Telegram channel and bot with [BotFather](https://t.me/BotFather).
Clone the repo:
`git clone https://github.com/ncr6/nodemcu-button`
Replace your Wi-Fi settings on the Arduino-like C file (sketch_nodemcu.c) and write it to your board. If required, replace the pin numbers according to your Raspberry Pi Model.
Connect the components like this:
![ESP8266 and push button wiring](https://github.com/ncr6/nodemcu-button/blob/master/schematics/nodemcu.png?raw=true)
*I used an old Raspberry Pi 1B (to prevent e-waste) which only has 26 GPIO pins, so if you're using something less outdated with 40 pins, just change the pin numbers in the code.*
![Raspberry Pi and buzzer wiring](https://github.com/ncr6/nodemcu-button/blob/master/schematics/rpi.png?raw=true)
Copy the project files to your Raspberry Pi via SSH or your preferred method.
Install dependencies with `npm install`
Run the Express.js-based server with the following environment variables:
- **NODEMCU_IP** (Your ESP8266 board local IP address, this should prevent other devices on your network from accidentally triggering the alerts).
- **TELEGRAM_NDTOKEN** (Your Telegram bot token given by BotFather).
- **CHANNEL_ID** (Telegram channel ID where the alerts will be posted, if it's public, use the username here, if it's private, look for a number like -123456789, remember to add your bot to the channel).

Of course, this has a lot of flaws. Pull requests and issues are welcome ;)
