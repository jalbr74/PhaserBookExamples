export default class Boot extends Phaser.State {
    preload() {
        this.load.image('preloader', 'assets/images/loading_bar.png');
    }

    create() {
        this.game.input.maxPointers = 1;
        this.game.state.start('preload');
    }
}
