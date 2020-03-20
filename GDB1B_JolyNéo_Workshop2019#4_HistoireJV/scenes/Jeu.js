var config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
        default: 'arcade', 
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
  scene: [
    audio,
    Menu,
    Pong,
    Dialogue_1,
    Breakout,
    Dialogue_2,
    Fin
  ]
}

var game = new Phaser.Game(config);
