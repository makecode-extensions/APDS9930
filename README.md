# APDS9930
APDS9930 Digital Proximity and Ambient Light Sensor package  

Author: shaoziyang  
Date:   2018.Apr  

![](https://raw.githubusercontent.com/microbit-makecode-packages/APDS9930/master/icon.png)

## Usage

open your microbit makecode project, in Add Package, paste  

https://github.com/microbit-makecode-packages/APDS9930  

to search box then search.



## API

- **init**()  
Initialize APDS9930, enable ALS and power.  

- **getALS**()  
get Ambient Light Sensor

- **getProximity**()  
get Proximity data.

- **ALSEnable**(en: boolean = true)  
Enable/Disable ALS feature.

- **ProximityEnable**(en: boolean = true)  
Enable/Disable Proximity feature. Please note that VL must link to VCC when using proximity feature.

- **PowerOn**()  
Set PON bit, enable all feature.

- **PowerOff**()   
Clear PON bit, disable all feature.

- **AGAIN**(gain: APDS9930_AGAIN)  
set ALS Gain.  
gain is:
  - AGAIN_1, 1
  - AGAIN_8, 8
  - AGAIN_16, 16
  - AGAIN_120, 120 

- **PGAIN**(gain: APDS9930_PGAIN)  
set Proximity Gain.  
gain is:
  - PGAIN_1, 1
  - PGAIN_2, 2
  - PGAIN_4, 4
  - PGAIN_8, 8 



## Demo

demo1  
![](https://raw.githubusercontent.com/microbit-makecode-packages/APDS9930/master/demo1.jpg)

demo2  
![](https://raw.githubusercontent.com/microbit-makecode-packages/APDS9930/master/demo2.jpg)

## License  

MIT

Copyright (c) 2018, microbit/micropython Chinese community  

## Supported targets  

* for PXT/microbit


[From microbit/micropython Chinese community](http://www.micropython.org.cn