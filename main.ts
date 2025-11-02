let textSprite: TextSprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Kanna.")
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 42)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Leon.")
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 42)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Juki.")
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 42)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Kiko.")
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 42)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Runa.")
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 42)
})
