basic.showLeds(`
    # . # # .
    . # . . #
    . # # # #
    . . . # .
    . . . . .
    `)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
    	
    }
    radio.sendNumber(0)
    radio.setGroup(1)
})
