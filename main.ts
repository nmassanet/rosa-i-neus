input.onGesture(Gesture.Shake, function () {
    aleatori = randint(0, 2)
    if (aleatori == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (aleatori == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let aleatori = 0
basic.showIcon(IconNames.Scissors)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
music.playMelody("C D E F G A B C5 ", 120)
basic.forever(function () {
	
})
