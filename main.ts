// When button A is pressed notes will change to low.
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # . .
        `)
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
// When A + B is pressed volume goes up by 10.
input.onButtonPressed(Button.AB, function () {
    music.setVolume(music.volume() + 10)
})
// When button B is pressed notes change to high.
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
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
// When shaken volume goes down by 10.
input.onGesture(Gesture.Shake, function () {
    music.setVolume(music.volume() - 10)
})
// Sets pins to notes on medium, sets volume too.
music.setVolume(100)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
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
