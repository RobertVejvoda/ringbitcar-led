RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    if (input.lightLevel() <= 120) {
        RingbitCar.back()
    } else {
        RingbitCar.turnleft()
    }
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
