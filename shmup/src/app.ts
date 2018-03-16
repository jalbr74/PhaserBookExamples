import 'phaser-ce/build/custom/pixi';
import 'phaser-ce/build/custom/p2';
import * as Phaser from 'phaser-ce';

import Boot from './states/Boot';
import Preload from './states/Preload';
import Game from './states/Game';
import StartScreen from './states/StartScreen';
import GameOver from './states/GameOver';

window.onload = () => {
    const game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game');

    game.state.add('boot', Boot);
    game.state.add('preload', Preload);
    game.state.add('game', Game);
    game.state.add('gameOver', GameOver);
    game.state.add('startScreen', StartScreen);

    game.state.start('boot');
};
