let item = 0
APDS9930.init()
basic.forever(() => {
    item = APDS9930.getALS()
    serial.writeValue("ALS", item)
    basic.pause(500)
})
