import sys
import RPi.GPIO as GPIO
import time

# Replace with the proper pin number on your RPi
trigger = 25

GPIO.setmode(GPIO.BCM)
GPIO.setup(trigger, GPIO.OUT)

# Buzzing frequency and length is up to you
buzzer = GPIO.PWM(trigger, 3000)
buzzer.start(1)
time.sleep(15)
GPIO.cleanup()
sys.exit()

