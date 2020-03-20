class audio extends Phaser.Scene {
    constructor() {
        super('audio');
    
    }

    init(){}

    preload(){ 

        // chargement des musiques
        this.load.audio('MenuMusic','sounds/MenuMusic.mp3');
        this.load.audio('DialoguesMusic','sounds/DialoguesMusic.mp3');
        this.load.audio('PongMusic','sounds/PongMusic.mp3');
        this.load.audio('BreakoutMusic','sounds/BreakoutMusic.mp3');
        this.load.audio('FinMusic','sounds/FinMusic.mp3');

        // chargement des sons
        this.load.audio('GameStart','sounds/GameStart.ogg');
        this.load.audio('Confirmation','sounds/Confirmation.wav');
        this.load.audio('BalleRaquette1','sounds/ping.wav');
        this.load.audio('BalleRaquette2','sounds/pong.mp3');
        this.load.audio('Brick','sounds/brick.mp3');

    
    
    }

    create(){}

    update(){
        this.scene.start("Menu");
    }

}