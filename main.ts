input.onButtonPressed(Button.A, function () {
    num1 = randint(0, 10)
    num2 = randint(0, 10)
    basic.showNumber(num1)
    basic.showString("x")
    basic.showNumber(num2)
    nrjogadores += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(pontuacao)
    basic.showString("de")
    basic.showNumber(nrjogadores)
    basic.pause(2000)
    basic.clearScreen()
    nrjogadores = 0
    pontuacao = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num1 * num2)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    pontuacao += 1
    basic.showString("Boa!!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let pontuacao = 0
let nrjogadores = 0
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
nrjogadores = 0
pontuacao = 0
