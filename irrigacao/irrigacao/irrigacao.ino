#define rele D7
#define bot D6

int NoiDia;
int LDR = analogRead(A0);
int estBot = LOW;
int gatilho = 50;
int molhando = 180000;
unsigned long int tempAnt = 0;
unsigned long int milli = 0;

void (*funcReset)() = 0;

void setup() {
    pinMode(rele, OUTPUT);
    pinMode(bot, INPUT);
    Serial.begin(115200);

    digitalWrite(rele, LOW);
    LDR = analogRead(A0);
    if (LDR > gatilho){
      NoiDia = 1;
    }else{
      NoiDia = 0;
    }
  }

void loop() {
    if(millis() > 2000000000){    
      funcReset();
    }
  
    LDR = analogRead(A0);
    estBot = digitalRead(bot);

    if(estBot == HIGH){
      digitalWrite(rele, HIGH);
      Serial.println("Irrigação acionada pelo botão");
      delay(molhando);
      digitalWrite(rele, LOW);
      delay(12000);
    }

    milli = millis();
    if(milli > (tempAnt + 500)){
      tempAnt = millis();
      LDR = analogRead(A0);
      
      if(NoiDia == 1){
        Serial.println("--DIA--");
      }else{
        Serial.println("--NOITE--");
      }
      Serial.println(LDR);

      if(NoiDia == 1 && LDR < gatilho){
        for(int i = 1; i < 11; i++){
          LDR = analogRead(A0);
          Serial.println("verificação de anoitecimento número:  " + String(i) + "");
          delay(12000);
          if(LDR > gatilho){
            Serial.println("Alerme falso número: " + String(i) + "");
            break;
          }
          if(i == 10){
            digitalWrite(rele, HIGH);
            Serial.println("Irrigação acionada pela noite");
            delay(molhando);
            digitalWrite(rele, LOW);
            delay(12000);
          }
        }
      }
      if(NoiDia == 0 && LDR > gatilho){
        for(int i = 1; i < 11; i++){
          Serial.println("verificação de amanhecimento número:  " + String(i) + "");
          delay(12000);
          LDR = analogRead(A0);
          if(LDR < gatilho){
            Serial.println("Alerme falso número:  " + String(i) + "");
            break;
          }
          if(i == 10){
            digitalWrite(rele, HIGH);
            Serial.println("Irrigação acionada pela manhã");
            delay(molhando);
            digitalWrite(rele, LOW);
            delay(12000);
          }
        }
      }
    }
  }
