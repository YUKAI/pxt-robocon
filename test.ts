input.onButtonPressed(Button.A, function () {
    robocon.move(robocon.Motors.One, robocon.Direction.Forward, 100)
    robocon.move(robocon.Motors.Two, robocon.Direction.Forward, 100)
    robocon.move(robocon.Motors.Three, robocon.Direction.Forward, 100)
    robocon.move(robocon.Motors.Four, robocon.Direction.Forward, 100)
})

input.onButtonPressed(Button.B, function () {
    robocon.move(robocon.Motors.One, robocon.Direction.Backward, 100)
    robocon.move(robocon.Motors.Two, robocon.Direction.Backward, 100)
    robocon.move(robocon.Motors.Three, robocon.Direction.Backward, 100)
    robocon.move(robocon.Motors.Four, robocon.Direction.Backward, 100)
})

input.onButtonPressed(Button.AB, function () {
    robocon.stop(robocon.Motors.One)
    robocon.stop(robocon.Motors.Two)
    robocon.stop(robocon.Motors.Three)
    robocon.stop(robocon.Motors.Four)
})

let dis1 = robocon.createDisplay(DigitalPin.P5, DigitalPin.P6)
let dis2 = robocon.createDisplay(DigitalPin.P12, DigitalPin.P2)
let dis3 = robocon.createDisplay(DigitalPin.P10, DigitalPin.P11)
let dis4 = robocon.createDisplay(DigitalPin.P8, DigitalPin.P9)

dis1.set(7)
dis2.set(7)
dis3.set(7)
dis4.set(7)

basic.forever(function () {
    dis1.show(pins.digitalReadPin(DigitalPin.P16))
    dis2.show(pins.digitalReadPin(DigitalPin.P13))
    dis3.show(Math.round(robocon.measure(DigitalPin.P15)))
    dis4.show(Math.round(robocon.measure(DigitalPin.P14)))
})
