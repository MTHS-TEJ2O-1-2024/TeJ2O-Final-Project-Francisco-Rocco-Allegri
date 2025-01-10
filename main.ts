/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri and Gavin Gallant
 * Created on: January 2025
 * This program creates a sequencive password that can only be "unlocked" with a specific order
*/
let correctPassword: number // - Correct password (the number value total)
let passwordInput: number // - Number value that is added (subtract or add per button)
let passwordSequence: number // - Determined amount of times a button is pressed (max 4)

let myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
myStrip.clear()

//Startup locking code

basic.clearScreen()
basic.showLeds(`
. . . . .
. # . # .
. . . . .
# # # # #
. . . . .
`)
correctPassword = 0

//Password sequences
input.onButtonPressed(Button.A, function () {
    passwordSequence += 1
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    myStrip.show()
    passwordInput += 1
})

input.onButtonPressed(Button.B, function () {
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    myStrip.show()
})

input.onButtonPressed(Button.AB, function () {
    if (passwordInput = 3) {
        
    }
})

//basic.showIcon(IconNames.Yes)
//basic.showIcon(IconNames.No)