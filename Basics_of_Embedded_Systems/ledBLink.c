#include <stdio.h> // Standard input/output library (for printf)

// Assuming a microcontroller environment where GPIO is configured for LED
// For a real embedded system, these would be register accesses
#define LED_PIN 5 	// Example LED pin number

// Function to simulate a delay (blocking delay)
void delay_ms(int counter) {
    volatile long i = 0, j; 	// Use volatile to prevent optimization
    if(counter <= 3){
        while(i < 100000){
            // printf("%d",i);
            i++;

        }
        i = 0;
    }
    else{
        while(j < 200000){
            j++;
        }
         j = 0;
    }
    
	
// Adjust this value for desired delay
               // Do nothing, just waste time
   
   
}

int main() {
    int counter = 0; 	// Initialize counter variable
    int max_blinks = 5; 	// Maximum number of blinks
    int threshold = 3; 	// Threshold for conditional check

    // Loop to blink the LED
    // The for loop iterates a known number of times (max_blinks)
    for(int k=0;k<max_blinks;k++){
        // printf("blink \n");
        
        // Conditional statement (if-else)
        // Checks if the current counter value is less than the threshold
        if(counter < threshold){
            
            // Simulate turning LED ON (e.g., set pin high)
            printf("LED ON (Counter: %d)\n", counter + 1); 	// For simulation
             			// Delay for 200 milliseconds
                        delay_ms( counter);
            counter++;
            // Simulate turning LED OFF (e.g., set pin low)
            printf("LED OFF (Counter: %d)\n", counter); 	// For simulation
             		// Delay for 200 milliseconds
                    delay_ms(counter );
        //else 
        }
        else{
            // If the counter is at or above the threshold
            counter++;
            printf("Counter reached threshold or above: %d\n", counter);
            
            		 // Longer delay
                     delay_ms(counter);
        }
        // Increment operator (++) used in the for loop condition
        // counter++ is equivalent to counter = counter + 1;
    
    }
    // Another conditional statement demonstrating logical operator
    
       // Logical AND operator (&&)
        printf("Blinking sequence completed.\n");
    
    
    // Example of a while loop
    int countdown = 3;
    //while loop for countdown
        printf("Countdown: %d\n", countdown);
         		// Decrement operator (--)
         //delay timer
    
    printf("Liftoff!\n");

    return 0; 	// Indicate successful execution
} 