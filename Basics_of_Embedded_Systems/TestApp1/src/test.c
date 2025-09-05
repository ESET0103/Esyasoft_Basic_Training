
#include <avr/io.h>
#include <util/delay.h>

#define LED_PIN PD2     // port D pin set to 5
#define BUTTON_PIN PD4

int main(void){

    DDRB |= (1 << LED_PIN);    // SET OUTPUT
    DDRD &= ~(1 << BUTTON_PIN);
    PORTD |= (1 << BUTTON_PIN);

    while(1){
        
        // delay 1000s
        if(!(PIND & (1 << BUTTON_PIN))){

          PORTD |= (1 << LED_PIN);
          _delay_ms(1000);

          PORTD &= ~(0 << LED_PIN);
          _delay_ms(1000);

        }
        else{
          PORTD &= ~(0 << LED_PIN);
        }

    }
        
}


