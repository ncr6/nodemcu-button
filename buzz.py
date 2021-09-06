import sys
import RPi.GPIO as GPIO
import time

# Replace with the proper pin number on your RPi model
trigger = 25

GPIO.setmode(GPIO.BCM)
GPIO.setup(trigger, GPIO.OUT)

# Buzzing frequency and length is up to you
buzzer = GPIO.PWM(trigger, 1100)
buzzer.start(10)
time.sleep(5)
GPIO.cleanup()
sys.exit()

