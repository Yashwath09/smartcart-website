/* ══════════════════════════════════════════════════════════════════════════════
   SMARTCART 2.0 AI — ESP32 / ESP32-CAM FIRMWARE
   Department: Electronics & Communication Engineering (ECE)
   
   Hardware Components:
   1. ESP32-CAM (AI-Thinker) / ESP32-WROOM-32 Microcontroller
   2. OV2640 2-Megapixel Camera Module
   3. HX711 24-bit ADC + 5kg/10kg Load Cell (Weight & Anti-Theft Sensor)
   4. Active Piezo Buzzer (Theft / Scan Alert)
   5. SSD1306 0.96" I2C OLED Display (Optional local cart UI)
   ══════════════════════════════════════════════════════════════════════════════ */

#include <WiFi.h>
#include <WebServer.h>
#include <esp_camera.h>
#include "HX711.h"

// ─────────────────────────────────────────────
// 1. WI-FI CREDENTIALS
// ─────────────────────────────────────────────
// The ESP32 can connect to a hotspot or create its own Access Point:
const char* ssid     = "SmartCart_AP";    // AP SSID (Cart Hotspot)
const char* password = "smartcart123";    // AP Password

// ─────────────────────────────────────────────
// 2. PIN CONFIGURATION (ESP32-CAM & Sensors)
// ─────────────────────────────────────────────
// HX711 Load Cell Pins
const int LOADCELL_DOUT_PIN = 12;
const int LOADCELL_SCK_PIN  = 13;

// Active Buzzer Pin
const int BUZZER_PIN        = 14;

// On-board Flashlight / Status LED
const int LED_STATUS_PIN    = 4;

// ─────────────────────────────────────────────
// 3. HARDWARE OBJECTS
// ─────────────────────────────────────────────
HX711 scale;
WebServer server(80);

float currentWeight = 0.0;
float calibration_factor = -420.0; // Adjust based on your load cell calibration

// Camera Pin mapping for AI-Thinker ESP32-CAM
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

// ─────────────────────────────────────────────
// 4. CAMERA INITIALIZATION
// ─────────────────────────────────────────────
void initCamera() {
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  
  if(psramFound()){
    config.frame_size = FRAMESIZE_VGA; // 640x480 for fast AI vision
    config.jpeg_quality = 10;
    config.fb_count = 2;
  } else {
    config.frame_size = FRAMESIZE_SVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }

  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("❌ Camera init failed with error 0x%x\n", err);
    return;
  }
  Serial.println("✅ OV2640 Camera Initialized!");
}

// ─────────────────────────────────────────────
// 5. REST API ENDPOINTS FOR WEB APP INTEGRATION
// ─────────────────────────────────────────────

// Send Single JPEG Snapshot to Web App for AI Vision
void handleCapture() {
  camera_fb_t * fb = esp_camera_fb_get();
  if (!fb) {
    server.send(500, "text/plain", "Camera Capture Failed");
    return;
  }
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send_P(200, "image/jpeg", (const char *)fb->buf, fb->len);
  esp_camera_fb_return(fb);
}

// Send Current HX711 Weight Telemetry as JSON
void handleWeight() {
  if (scale.is_ready()) {
    currentWeight = scale.get_units(5); // Average 5 readings
    if (currentWeight < 0) currentWeight = 0;
  }
  
  String json = "{\"weight\":" + String(currentWeight, 1) + 
                ",\"unit\":\"grams\",\"status\":\"OK\"}";
  
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "application/json", json);
}

// Trigger Buzzer Alert from Web App
void handleBuzzer() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  int duration = 400;
  if (server.hasArg("duration")) {
    duration = server.arg("duration").toInt();
  }
  
  // Beep sequence
  digitalWrite(BUZZER_PIN, HIGH);
  digitalWrite(LED_STATUS_PIN, HIGH);
  delay(duration);
  digitalWrite(BUZZER_PIN, LOW);
  digitalWrite(LED_STATUS_PIN, LOW);
  
  server.send(200, "text/plain", "Buzzer Triggered");
}

// Tare / Zero-Calibrate Weight
void handleTare() {
  scale.tare();
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", "Scale Tared to 0g");
}

// ─────────────────────────────────────────────
// 6. SETUP & MAIN LOOP
// ─────────────────────────────────────────────
void setup() {
  Serial.begin(115200);
  Serial.println("\n⚡ SmartCart 2.0 ESP32 Firmware Starting...");

  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(LED_STATUS_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);
  digitalWrite(LED_STATUS_PIN, LOW);

  // Initialize HX711 Load Cell
  Serial.println("⚖️ Initializing HX711 Load Cell...");
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  scale.set_scale(calibration_factor);
  scale.tare(); // Reset scale to 0

  // Initialize OV2640 Camera
  initCamera();

  // Create Wi-Fi Hotspot for Cart
  Serial.println("📶 Creating SmartCart Access Point...");
  WiFi.softAP(ssid, password);
  IPAddress IP = WiFi.softAPIP();
  Serial.print("✅ Cart Wi-Fi Hotspot IP: ");
  Serial.println(IP);

  // Beep once to confirm boot
  digitalWrite(BUZZER_PIN, HIGH);
  delay(150);
  digitalWrite(BUZZER_PIN, LOW);

  // Register Web Server Endpoints
  server.on("/capture", HTTP_GET, handleCapture);
  server.on("/weight", HTTP_GET, handleWeight);
  server.on("/buzzer", HTTP_GET, handleBuzzer);
  server.on("/tare", HTTP_GET, handleTare);
  server.begin();

  Serial.println("🚀 Web Server Listening on Port 80");
  Serial.println("👉 Snapshot Endpoint: http://192.168.4.1/capture");
  Serial.println("👉 Weight Endpoint:   http://192.168.4.1/weight");
}

void loop() {
  server.handleClient();
  
  // Optional: Read weight periodically for serial plotting
  static unsigned long lastTime = 0;
  if (millis() - lastTime > 2000) {
    lastTime = millis();
    if (scale.is_ready()) {
      Serial.printf("⚖️ Current Cart Weight: %.1f grams\n", scale.get_units(2));
    }
  }
}
