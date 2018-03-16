export default class StartScreen extends Phaser.State {
    create() {
    }

    update() {
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            this.game.state.start('game');
        }
    }
}
