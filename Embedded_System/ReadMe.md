Introduction to the basic Embedded C Programming : <br>
File Names : <br>
    1. ledBlink.c - 
        Contains basic programming to blink an led light for maxm 5 times. It has blink threshold of 3 times. For this a counter is maintained. When led is on , there is delay of t sec and when it off there is delay of t second for the  second blink and so on. But if the blinks/counter is more than threshold delays increase by k times means delay will of (t + k) seconds;

    2. ledBlink_Button_input_control.c - 
        Contains programming code to blink an led light from a button. if (let say button/switch is 'A' or 'a') led it off and pressing the button led should turn on and pressing again led should turn off. To make is function properly, a flag variable is maintained that has the on/off status of the led. 
    