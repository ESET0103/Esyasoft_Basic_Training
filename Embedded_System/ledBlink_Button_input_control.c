#include<stdio.h>
#include<stdbool.h>


// function is turning the LED ON or OFF
void on_off(bool flag){
    if(!flag){
        flag = true;        // if flag is true, led glows;
        printf("Led is Turn ON \n");
    }
    else{
        flag = false;       // if flag is flase, led turns off;
        printf("Led is turn OFF \n");
    }
}

bool flag = false;      // global variable for checking if led is ON or OFF;


// main function ....
int main(){

    while(true){
        char button;
        printf("Press the button: ");
        scanf(" %c",&button);
        if((button == 'a' || button == 'A') && flag == false ){         // if pressed button is 'a' or 'A' and flag is false , then led glows;
            on_off(flag);
        }
        else if((button == 'a' || button == 'A') && flag == true){      // if pressed button is 'a' or 'A' and flag is true , then led is off;
           on_off(flag);
        }
        else{                                                           // if any other button is pressed , then the loop should terminate
            break;
        }
    }
    return 0;
}