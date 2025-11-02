let textSprite: TextSprite = null
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Kanna.", 0, 3)
    movement()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Leon.", 0, 2)
    movement()
})
function movement () {
    music.play(music.createSong(hex`0078000408020200001c00010a006400f401640000040000000000000000000000000005000004240000000400011e04000800012210001400012518001c0001221c002000012220002400011e07001c00020a006400f4016400000400000000000000000000000000000000031e0008000c0001220c00100001251400180001221c002000011e20002400011e`), music.PlaybackMode.InBackground)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 120)
    textSprite.setBounceOnWall(true)
    textSprite.setVelocity(0, randint(-30, -50))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Juki.", 0, 8)
    movement()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Kiko.", 0, 7)
    movement()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    textSprite = textsprite.create("Hello, Runa.", 0, 5)
    movement()
})
