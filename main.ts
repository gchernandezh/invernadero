let HUMEDAD = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 8) {
        basic.showString("T. BAJA")
        music.playTone(988, music.beat(BeatFraction.Breve))
    }
    while (input.temperature() > 30) {
        basic.showString("T. ALTA")
        music.playTone(131, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.B, function () {
    HUMEDAD = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showString("H. BAJA")
        music.playTone(247, music.beat(BeatFraction.Breve))
    }
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showString("H. ALTA")
        music.playTone(494, music.beat(BeatFraction.Breve))
    }
})
