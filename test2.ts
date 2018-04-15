let item = 0
APDS9930.init()
APDS9930.ProximityEnable(true)
basic.forever(() => {
    item = APDS9930.getProximity()
    serial.writeValue("Prox", item)
    basic.pause(500)
})
