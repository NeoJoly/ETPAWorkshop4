var start = 1;
var gl;

var joueur1;
var scoreJoueur1 = 0;
var scoreTexteJoueur1;
var textj1gagnant;
 
var joueur2;
var J2up;
var J2down;
var scoreJoueur2 = 0;
var scoreTexteJoueur2;
var textj2gagnant;

var pointj1 = 0;
var pointj2 = 0;

var balle;
var ballevelocityX = Phaser.Math.Between(200, 600);
var ballevelocityY = 100;

var cursors;

var bandeau;

var timer = 1;
var textpressenter;
var pressenter;

var pongMusic;

class Pong extends Phaser.Scene {
  constructor() {
    super('Pong');

  }

  
  
  init(){}


  preload(){

    this.load.image('fond', 'assets/pong/Fond.png');
    this.load.image('bandeau', 'assets/pong/bandeau.png');
    this.load.image('joueur1', 'assets/pong/joueur1.png');
    this.load.image('joueur2', 'assets/pong/joueur2.png');
    this.load.image('balle', 'assets/pong/balle.png');

  }


  create(){

    // fondu entrée
    this.cameras.main.fadeIn(1000);

    // bandeau + fond
    this.add.image(640, 410, 'fond');
    bandeau = this.physics.add.staticGroup();
    bandeau.create(640, 50, 'bandeau');

    // joueur 1
    joueur1 = this.physics.add.image(1230, 380, 'joueur1').setScale(0.5).setSize(50,400).setOffset(43,0);
    cursors = this.input.keyboard.createCursorKeys();
    joueur1.setCollideWorldBounds(true);
    this.physics.add.collider(joueur1,bandeau);

    // joueur 2
    joueur2 = this.physics.add.image(50, 380, 'joueur2').setScale(0.5).setSize(50,400).setOffset(94,0);
    J2up = this.input.keyboard.addKey('Z');
    J2down = this.input.keyboard.addKey('S');
    joueur2.setCollideWorldBounds(true);
    this.physics.add.collider(joueur2,bandeau);

    // balle
    balle = this.physics.add.image(640, 380, 'balle').setScale(0.5).setSize(40,40).setOffset(5,5).setOrigin(0.5,0.5);
    balle.setCollideWorldBounds(true);
    this.physics.add.collider(balle, joueur1, hitJoueur1, null, this);
    this.physics.add.collider(balle, joueur2, hitJoueur2, null, this);
    this.physics.add.collider(bandeau,balle);
    balle.setBounce(1,1);
    balle.setVelocityY(ballevelocityY);
    balle.setVelocityX(ballevelocityX);
    

    // titre
    this.add.text(640, 30, 'PONG (1972)', {fontFamily: 'Title Pixel Font', fontSize: 40}).setOrigin(0.5,0.5);

    // score
    scoreTexteJoueur2 = this.add.text(10, 70, 'Score: 0', {fontFamily: 'Pixel Font', fontSize: 20, fill: '#f00' });
    scoreTexteJoueur1 = this.add.text(1270, 70, 'Score: 0', {fontFamily: 'Pixel Font', fontSize: 20, fill: '#0f0' }).setOrigin(1,0);

    // end
    pressenter = this.input.keyboard.addKey('ENTER');
    textpressenter = this.add.text(640, 650, 'PRESS  ENTER', {fontFamily: 'Pixel Font', fontSize: 35}).setOrigin(0.5,0.5).setVisible(false);

    // start
    gl = this.add.text(640, 380, 'GOOD LUCK', {fontFamily: 'Pixel Font', fontSize: 100, fill: '#000' }).setOrigin(0.5,0.5);

    // audio
    pongMusic = this.sound.add('PongMusic');
    pongMusic.play({volume: 0.3, loop: true});


  }


  update(){

    
    // début
    if (start == 1) {
      this.time.addEvent({
        delay: 500,
        callback: ()=>{
          gl.setVisible(false);
          start = 0;
      },
        loop: false
    });

    }


    if (start == 0) {


        // contrôles joueur 1
      if (cursors.up.isDown) {
        joueur1.setVelocityY(-300);
      } else if (cursors.down.isDown) {
        joueur1.setVelocityY(300);
      } else {
        joueur1.setVelocityY(0);
      }

      // contrôles joueur 2
      if (J2up.isDown) {
        joueur2.setVelocityY(-300);
      } else if (J2down.isDown) {
        joueur2.setVelocityY(300);
      } else {
        joueur2.setVelocityY(0);
      }

      // score joueur 1
      if (balle.x < 15) {
        scoreJoueur1 += 1;
        pointj1 = 1;
        pointj2 = 0;
        scoreTexteJoueur1.setText('Score: ' + scoreJoueur1);
        reset(); 
      }

      // score joueur 2
      if (balle.x > 1265) {
        scoreJoueur2 += 1;
        pointj1 = 0;
        pointj2 = 1;
        scoreTexteJoueur2.setText('Score: ' + scoreJoueur2);
        reset(); 
      }


      // fin du jeu

      // joueur 1 gagne
      if (scoreJoueur1 == 10) {
        this.physics.pause();
        joueur2.setVisible(false);
        balle.setVisible(false);
        textj1gagnant = this.add.text(640, 380, 'PLAYER  1 WON !', {fontFamily: 'Pixel Font', fontSize: 75, fill: '#0f0' }).setOrigin(0.5,0.5);
      }

      // joueur 2 gagne
      if (scoreJoueur2 == 10) {
        this.physics.pause();
        joueur1.setVisible(false);
        balle.setVisible(false);
        textj2gagnant = this.add.text(640, 380, 'PLAYER  2 WON !', {fontFamily: 'Pixel Font', fontSize: 75, fill: '#c00' }).setOrigin(0.5,0.5);
      }

      if (scoreJoueur1 == 10 || scoreJoueur2 == 10) {
        if (timer == 0) {
          this.time.addEvent({
            delay: 1000,
            callback: ()=>{
              textpressenter.setVisible(false);
              timer = 1;
          },
            loop: false
        });
        } else if (timer == 1) {
          this.time.addEvent({
            delay: 1000,
            callback: ()=>{
              textpressenter.setVisible(true);
              timer = 0;
          },
            loop: false
        });
        }
        // démarrage du dialogue 1
        if (pressenter.isDown) {
          this.cameras.main.fadeOut(3000);
          this.sound.play('Confirmation',{volume: 0.3});
          this.time.addEvent({
            delay: 5000,
            callback: ()=>{
              pongMusic.mute = true;
              this.scene.start("Dialogue_1");
          },
            loop: false
        });
        }
      }


    }

    


  }


}


// fonctions annexes

function hitJoueur1(balle,joueur1) {
  this.sound.play('BalleRaquette1');
  ballevelocityX = ballevelocityX+25;
  ballevelocityX = ballevelocityX*-1;

  joueur1.x = 1230;
  
  balle.setVelocityX(ballevelocityX);

  if (ballevelocityY<0) {
    ballevelocityY = ballevelocityY*-1;
    balle.setVelocityY(ballevelocityY);
  }

  joueur1.setVelocityX(0);
}

function hitJoueur2(balle,joueur2) {
  this.sound.play('BalleRaquette2');
  ballevelocityX = ballevelocityX-25;
  ballevelocityX = ballevelocityX*-1;

  joueur2.x = 50;
  
  balle.setVelocityX(ballevelocityX);

  if (ballevelocityY<0) {
    ballevelocityY = ballevelocityY*-1;
    balle.setVelocityY(ballevelocityY);
  }

  joueur2.setVelocityX(0);
}

function reset() {
  if (pointj1 == 1) {
    ballevelocityX = Phaser.Math.Between(-100, -200);
  }
  if (pointj2 == 1) {
    ballevelocityX = Phaser.Math.Between(100, 200);
  }
  ballevelocityY = Phaser.Math.Between(-50, 50);
  balle.x = 640;
  balle.y = 380;
  joueur1.y = 380;
  joueur2.y = 380;
  balle.setVelocityX(ballevelocityX);
  balle.setVelocityY(ballevelocityY);
}