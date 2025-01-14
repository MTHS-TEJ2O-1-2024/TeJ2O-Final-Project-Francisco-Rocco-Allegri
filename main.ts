/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri and Gavin Gallant
 * Created on: January 2025
 * This program creates a sequencive password that can only be "unlocked" with a specific order
*/
let passwordInput = 0        // Current password input value
let attempts = 0             // Track number of attempts
let maxAttempts = 4          // Maximum allowed attempts
const correctPassword = 3    // Correct password value

// Clear NeoPixel strip setup if needed (Optional)
let myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
myStrip.clear()

// Show startup locking symbol
basic.showLeds(`
. . . . .
. # . # .
. . . . .
# # # # #
. . . . .
`)

// Reset password input and attempt counter at start
passwordInput = 0
attempts = 0

// Increment password input with A button
input.onButtonPressed(Button.A, function () {
    if (attempts < maxAttempts) {
        passwordInput += 1
        basic.showNumber(passwordInput)
    }
})

// Decrement password input with B button
input.onButtonPressed(Button.B, function () {
    if (attempts < maxAttempts) {
        passwordInput -= 1
        basic.showNumber(passwordInput)
    }
})

// Verify password when A+B buttons are pressed
input.onButtonPressed(Button.AB, function () {
    attempts += 1

    if (passwordInput == correctPassword) {
        basic.showIcon(IconNames.Yes) // Show success icon if correct
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (attempts >= maxAttempts) {
        basic.showIcon(IconNames.No) // Show failure icon if out of attempts
        music.playMelody("C D E F G A B C5 ", 120)
    } else {
        basic.showNumber(maxAttempts - attempts) // Show remaining attempts
    }
})
