#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

const char* ssid = "your_wifi_network_name";
const char* pass = "correct-horse-battery-staple";

/* Uncomment this and line 20 for static IP Address settings
IPAddress local_IP(192,168,1,123);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);
IPAddress primaryDNS(8,8,8,8);
IPAddress secondaryDNS(8,8,4,4);
*/

int pinbtn = 5;

void setup() {
  Serial.begin(115200);
  //WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS);
  WiFi.begin(ssid, pass);
  Serial.print("WiFi connection is starting...");

  while(WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("Connected");

  pinMode(pinbtn, INPUT_PULLUP);
  
}

void loop() {
  delay(112); //Delay set to 112ms for best sensibility in my button, YMMV
  if(digitalRead(pinbtn) == LOW) {
    Serial.println("Button pressed");
    HTTPClient http;
    WiFiClient client;
    http.begin(client, "http://192.168.1.123:5700/push"); //Replace with your RPi address
    http.GET();
    http.end();
  }
}
