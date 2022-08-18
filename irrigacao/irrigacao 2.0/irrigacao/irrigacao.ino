#define rele D7
#define bot D6

unsigned long int milli = 0;
int NoiDia;
int estBot = LOW;
int molhando = 240000;

void setup() {
    pinMode(rele, OUTPUT);
    pinMode(bot, INPUT);
    Serial.begin(115200);

    digitalWrite(rele, LOW);
  }

void loop() {
    //delay(120000); //2 mintos pra ver se é noite ou queda de luz

    estBot = digitalRead(bot);
    if(estBot == HIGH){
      digitalWrite(rele, HIGH);
      Serial.println("Irrigação acionada pelo botão");
      delay(molhando);
      digitalWrite(rele, LOW);
      delay(120000);
    }

    milli = millis();
    Serial.println(milli);
    if(milli > (120000)){
      if(milli < (130000)){
        digitalWrite(rele, HIGH);
        Serial.println("Irrigação acionada pelo sensor externo");
        delay(molhando);
        digitalWrite(rele, LOW);
        delay(180000);  
      }
    }
  }
