input.onButtonPressed(Button.A, function () {
    speed = speed - 10
    speed_input()
})
input.onButtonPressed(Button.B, function () {
    speed = speed + 10
    speed_input()
})
function speed_input () {
    basic.showNumber(speed / 10)
}
let speed = 0
speed = 0
basic.showString("G")
basic.forever(function () {
    BitCar.move(speed, speed)
    if (BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm) < 12) {
        BitCar.move(speed - speed * 2, speed - speed * 2)
        basic.pause(300)
        BitCar.move(speed - speed * 2, speed)
        basic.pause(300)
        if (BitCar.grove_ultrasonic(GrovePin.P12, DistanceUnit.cm) < 12) {
            BitCar.move(speed - speed * 2, speed - speed * 2)
            basic.pause(300)
            BitCar.move(speed, speed - speed * 2)
            basic.pause(650)
        }
    }
})
