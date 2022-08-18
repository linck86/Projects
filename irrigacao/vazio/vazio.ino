#define rele D7
#define bot D6


void setup() {
    pinMode(rele, OUTPUT);
    pinMode(bot, INPUT);
    Serial.begin(115200);

    digitalWrite(rele, LOW);

    }

void loop() {
      Serial.println("irrigação LIGADA pelo botão");
      delay(2000);
}
