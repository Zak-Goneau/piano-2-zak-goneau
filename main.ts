input.onButtonPressed(Button.A, function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        music.playTone(131, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        music.playTone(147, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.playTone(165, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        music.playTone(175, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        music.playTone(196, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        music.playTone(220, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        music.playTone(247, music.beat(BeatFraction.Half))
    }
})
input.onButtonPressed(Button.B, function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 1) {
        music.playTone(523, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P7) == 1) {
        music.playTone(587, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.playTone(659, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {
        music.playTone(698, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        music.playTone(784, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        music.playTone(880, music.beat(BeatFraction.Half))
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        music.playTone(988, music.beat(BeatFraction.Half))
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
if (pins.digitalReadPin(DigitalPin.P6) == 1) {
    music.playTone(262, music.beat(BeatFraction.Half))
}
if (pins.digitalReadPin(DigitalPin.P7) == 1) {
    music.playTone(294, music.beat(BeatFraction.Half))
}
if (pins.digitalReadPin(DigitalPin.P8) == 1) {
    music.playTone(330, music.beat(BeatFraction.Half))
}
if (pins.digitalReadPin(DigitalPin.P12) == 1) {
    music.playTone(349, music.beat(BeatFraction.Half))
}
if (pins.digitalReadPin(DigitalPin.P13) == 1) {
    music.playTone(392, music.beat(BeatFraction.Half))
}
if (pins.digitalReadPin(DigitalPin.P14) == 1) {
    music.playTone(440, music.beat(BeatFraction.Half))
}
if (pins.digitalReadPin(DigitalPin.P15) == 1) {
    music.playTone(494, music.beat(BeatFraction.Half))
}
