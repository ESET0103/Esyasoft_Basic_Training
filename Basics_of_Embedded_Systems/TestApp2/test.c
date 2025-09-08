
// // #include <avr/io.h>
// // #include <util/delay.h>

// // #define LED_PIN PD2     // port D pin set to 5
// // #define BUTTON_PIN PD4

// // int main(void){

// //     DDRB |= (1 << LED_PIN);    // SET OUTPUT
// //     DDRD &= ~(1 << BUTTON_PIN);
// //     PORTD |= (1 << BUTTON_PIN);

// //     while(1){
        
// //         // delay 1000s
// //         if(!(PIND & (1 << BUTTON_PIN))){

// //           PORTD |= (1 << LED_PIN);
// //           _delay_ms(1000);

// //           PORTD &= ~(0 << LED_PIN);
// //           _delay_ms(1000);

// //         }
// //         else{
// //           PORTD &= ~(0 << LED_PIN);
// //         }

// //     }
        
// // }


// #include<avr/io.h>
// #include<util/delay.h>

// // PD4 -> BUTTON
// // PD2 -> LED_PIN

// int main(){

//   DDRD &= ~(1 << PD4);
//   DDRD |= (1 << PD2);
//   PORTD |= (1 << PD4);

//   while(1){
//     if(!(PIND & (1 << PD4))){
//       PORTD |= (1 << PD2);
//     }
//     else{
//       PORTD &= ~(1 << PD2);
//     }
//   }

// }




// 02,05,07

// 02,05,07

#include<avr/io.h>
#include<util/delay.h>

int main(){

  DDRD |= (1 << PD2);
  DDRD |= (1 << PD5);
  DDRD |= (1 << PD7);
  // DDRD &= (1 << PD6);

  PORTD |= (1 << PD7);
  PORTD &= ~(1 << PD5);
  // PORTD |= (1 << PD6);
    _delay_ms(1000);
  // if(!(PIND & (1 << PD6))){
    PORTD &= ~(1 << PD7);
   PORTD |= (1 << PD5);
    // PORTD &= ~(1 << PD7);
    // PORTD |= (1 << PD5);
    while(1){
        PORTD ^= (1 << PD2);
        _delay_ms(300);
    }
  // }
  // else{
  //   PORTD |= (1 << PD7);
  //   PORTD &= ~(1 << PD5)
  // }
}

