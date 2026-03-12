/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Evan
 * Created on: Feb 2026
 * This program will play rock, paper, scissors.
*/

// variables
let randomNumber: number = -1
let score: number = 0

// clear screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// if rock
 if (randomNumber == 0) {
  basic.showIcon(IconNames.SmallSquare)
 }
// if paper
if (randomNumber == 1) {
    basic.showIcon(IconNames.Square)
}
// if scissors
if (randomNumber == 2) {
    basic.showIcon(IconNames.Scissors)
}

basic.pause(5000)
basic.clearScreen()

//button a
input.onButtonPressed(Button.A, function() {
  score = score + 1
  basic.showIcon(IconNames.Yes)
  basic.pause(500)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})

//button b
input.onButtonPressed(Button.B, function() {
  basic.showString("Score")
  basic.showNumber(score)
  basic.pause(500)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
