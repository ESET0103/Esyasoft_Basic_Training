#include<stdio.h>
#include<stdbool.h>

// bool flag = false;      // global variable for checking if led is ON or OFF;

// function is turning the LED ON or OFF
void on_off(bool *flag){
    if(*flag == false){
        *flag = true;        // if flag is true, led glows;
        printf("Led is Turn ON \n");
    }
    else{
        *flag = false;       // if flag is flase, led turns off;
        printf("Led is turn OFF \n");
    }
}



// main function ....
int main(){
    bool flag = false;      // global variable for checking if led is ON or OFF;

    while(true){
        char button;
        printf("Press the button: ");
        scanf(" %c",&button);
        if((button == 'a' || button == 'A') ){         // if pressed button is 'a' or 'A' to turn led ON or OFF ;
            on_off(&flag);
        }
       
        else{                                         // if any other button is pressed , then the loop should terminate
            break;
        }
    }
    return 0;
}