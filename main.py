def on_forever():
    BitCar.move(10, 10)
    if BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.CM) < 12:
        BitCar.move(-10, 10)
        basic.pause(1000)
        if BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.CM) < 12:
            BitCar.move(10, -10)
            basic.pause(2000)
basic.forever(on_forever)
