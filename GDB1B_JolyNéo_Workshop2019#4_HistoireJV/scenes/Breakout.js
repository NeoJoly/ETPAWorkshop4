var joueur;
var fondbreakout;

var timer = 1;
var textpressenter;

var briques;
var briquesincassables; 

var nbbrique = 60;
var nbbriqueText;

var nbvie = 4;
var nbvieText;
var heart4;
var heart3;
var heart2;
var heart1;
var heart0;

var textgagne;
var textperdu;

var ballebreakout;
var ballebreakoutvelocityY = -200;
var ballebreakoutvelocityX = Phaser.Math.Between(-100, 100);

var breakoutMusic;

class Breakout extends Phaser.Scene {
  constructor() {
    super('Breakout');

  }

  
  init(){}


  preload(){

    this.load.image('fondbreakout', 'assets/breakout/fondbreakout.png');
    this.load.image('bandeau', 'assets/breakout/bandeau.png');
    this.load.image('brique', 'assets/breakout/brique.png');
    this.load.image('briqueincassable', 'assets/breakout/briqueincassable.png');
    this.load.image('joueur', 'assets/breakout/barre.png');
    this.load.image('ballebreakout', 'assets/breakout/ballebreakout.png');

    this.load.image('heart4','assets/breakout/heart/heart4.png');
    this.load.image('heart3','assets/breakout/heart/heart3.png');
    this.load.image('heart2','assets/breakout/heart/heart2.png');
    this.load.image('heart1','assets/breakout/heart/heart1.png');
    this.load.image('heart0','assets/breakout/heart/heart0.png');


  }


  create(){

    // fondu entrée
    this.cameras.main.fadeIn(1000);

    // bandeau + fond
    fondbreakout = this.add.image(0,100,'fondbreakout').setOrigin(0,0);
    bandeau = this.physics.add.staticGroup();
    bandeau.create(640, 50, 'bandeau');

    // titre
    this.add.text(640, 30, 'BREAKOUT (1976)', {fontFamily: 'Title Pixel Font', fontSize: 40}).setOrigin(0.5,0.5);
    
    // briques
    briques = this.physics.add.staticGroup();
    briquesincassables = this.physics.add.staticGroup();

    // ligne 1
    briques.create(190,150,'brique');
    briquesincassables.create(290,150,'briqueincassable');
    briques.create(390,150,'brique');
    briques.create(490,150,'brique');
    briques.create(590,150,'brique');
    briques.create(690,150,'brique');
    briques.create(790,150,'brique');
    briques.create(890,150,'brique');
    briquesincassables.create(990,150,'briqueincassable');
    briques.create(1090,150,'brique');

    // ligne 2
    briques.create(190,250,'brique');
    briques.create(290,250,'brique');
    briques.create(390,250,'brique');
    briquesincassables.create(490,250,'briqueincassable');
    briques.create(590,250,'brique');
    briques.create(690,250,'brique');
    briquesincassables.create(790,250,'briqueincassable');
    briques.create(890,250,'brique');
    briques.create(990,250,'brique');
    briques.create(1090,250,'brique');

    // ligne 3
    briques.create(190,300,'brique');
    briquesincassables.create(290,300,'briqueincassable');
    briques.create(390,300,'brique');
    briques.create(490,300,'brique');
    briques.create(590,300,'brique');
    briques.create(690,300,'brique');
    briques.create(790,300,'brique');
    briques.create(890,300,'brique');
    briquesincassables.create(990,300,'briqueincassable');
    briques.create(1090,300,'brique');

    // ligne 4
    briques.create(190,350,'brique');
    briques.create(290,350,'brique');
    briques.create(390,350,'brique');
    briques.create(490,350,'brique');
    briques.create(590,350,'brique');
    briques.create(690,350,'brique');
    briques.create(790,350,'brique');
    briques.create(890,350,'brique');
    briques.create(990,350,'brique');
    briques.create(1090,350,'brique');

    // ligne 5
    briques.create(190,400,'brique');
    briques.create(290,400,'brique');
    briquesincassables.create(390,400,'briqueincassable');
    briques.create(490,400,'brique');
    briques.create(590,400,'brique');
    briques.create(690,400,'brique');
    briques.create(790,400,'brique');
    briquesincassables.create(890,400,'briqueincassable');
    briques.create(990,400,'brique');
    briques.create(1090,400,'brique');

    // ligne 6
    briquesincassables.create(190,450,'briqueincassable');
    briques.create(290,450,'brique');
    briques.create(390,450,'brique');
    briques.create(490,450,'brique');
    briques.create(590,450,'brique');
    briques.create(690,450,'brique');
    briques.create(790,450,'brique');
    briques.create(890,450,'brique');
    briques.create(990,450,'brique');
    briquesincassables.create(1090,450,'briqueincassable');

    // ligne 7
    briques.create(190,550,'brique');
    briques.create(290,550,'brique');
    briques.create(390,550,'brique');
    briques.create(490,550,'brique');
    briques.create(590,550,'brique');
    briques.create(690,550,'brique');
    briques.create(790,550,'brique');
    briques.create(890,550,'brique');
    briques.create(990,550,'brique');
    briques.create(1090,550,'brique');

    // joueur
    joueur = this.physics.add.image(640, 685, 'joueur').setOrigin(0.5,0);
    cursors = this.input.keyboard.createCursorKeys();
    joueur.setCollideWorldBounds(true);

    // balle
    ballebreakout = this.physics.add.image(640, 684, 'ballebreakout').setOrigin(0.5,1).setScale(0.5);
    ballebreakout.setCollideWorldBounds(true);
    this.physics.add.collider(bandeau,ballebreakout);
    this.physics.add.collider(ballebreakout,briquesincassables);
    ballebreakout.setBounce(1,1);
    ballebreakout.setVelocityY(ballebreakoutvelocityY);
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
    this.physics.add.overlap(ballebreakout, briques, hitBrique, null, this);
    this.physics.add.overlap(ballebreakout, joueur, hitJoueur, null, this);

    // score
    nbbriqueText = this.add.text(100, 70, '60', {fontFamily: 'Pixel Font', fontSize: 30, fill: '#f60' }).setOrigin(0,0.5);
    this.add.image(20,70,'brique').setScale(0.7).setOrigin(0,0.5);

    // vie
    //nbvieText = this.add.text(1180, 70, '3', {fontFamily: 'Pixel Font', fontSize: 30, fill: '#f00' }).setOrigin(1,0.5);
	  heart4 = this.add.image(1260,70,'heart4').setScale(2).setOrigin(1,0.5);

    // fin
    pressenter = this.input.keyboard.addKey('ENTER');
    textpressenter = this.add.text(640, 650, 'PRESS  ENTER', {fontFamily: 'Pixel Font', fontSize: 35}).setOrigin(0.5,0.5).setVisible(false);

    // audio
    breakoutMusic = this.sound.add('BreakoutMusic');
    breakoutMusic.play({volume: 0.3, loop: true});


  }


  update(){

     // contrôles joueur
    if (cursors.right.isDown) {
      joueur.setVelocityX(500);
    } else if (cursors.left.isDown) {
       joueur.setVelocityX(-500);
     } else {
       joueur.setVelocityX(0);
     }


     // le joueur perd des vies
     if (ballebreakout.y > 719) {
        nbvie -= 1;
        if (nbvie == 3) {
          heart4.destroy(true);
          heart3 = this.add.image(1260,70,'heart3').setScale(2).setOrigin(1,0.5);
        }
        if (nbvie == 2) {
          heart3.destroy(true);
          heart2 = this.add.image(1260,70,'heart2').setScale(2).setOrigin(1,0.5);
        }
        if (nbvie == 1) {
          heart2.destroy(true);
          heart1 = this.add.image(1260,70,'heart1').setScale(2).setOrigin(1,0.5);
        }
        //nbvieText.setText(nbvie);
        resetbreakout(); 
    }


     // gagné
    if (nbbrique == 0 ) {
       this.physics.pause();
       fondbreakout.setTint(0x00ff00);
       ballebreakout.setVisible(false);
       textgagne = this.add.text(640, 380, 'YOU WON !', {fontFamily: 'Pixel Font', fontSize: 75, fill: '#0f0' }).setOrigin(0.5,0.5);
     }

     // perdu
     if (nbvie == 0) {
       this.physics.pause();
       fondbreakout.setTint(0xff0000);
       ballebreakout.setVisible(false);
       textperdu = this.add.text(640, 380, 'YOU LOST...', {fontFamily: 'Pixel Font', fontSize: 75, fill: '#f00' }).setOrigin(0.5,0.5);
     }

     // fin
     if (nbvie == 0 || nbbrique == 0) {
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
      // démarrage du dialogue 2
      if (pressenter.isDown) {
        this.cameras.main.fadeOut(3000);
        this.sound.play('Confirmation',{volume: 0.3});
        this.time.addEvent({
          delay: 5000,
          callback: ()=>{
            breakoutMusic.mute = true;
            this.scene.start("Dialogue_2");
        },
          loop: false
      });
      }
    }


  }


}


// fonctions annexes

function hitJoueur(ballebreakout,joueur) {

  ballebreakoutvelocityY = ballebreakoutvelocityY*-1;
  ballebreakoutvelocityY = ballebreakoutvelocityY-5;
  
  
  ballebreakout.setVelocityY(ballebreakoutvelocityY);

  if (ballebreakout.x > joueur.x-200 && ballebreakout.x < joueur.x-100) {
    ballebreakoutvelocityX = -150;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }
  if (ballebreakout.x > joueur.x-99 && ballebreakout.x < joueur.x-50) {
    ballebreakoutvelocityX = -100;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }
  if (ballebreakout.x > joueur.x-49 && ballebreakout.x < joueur.x-15) {
    ballebreakoutvelocityX = -50;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }
  if (ballebreakout.x > joueur.x-14 && ballebreakout.x < joueur.x+14) {
    ballebreakoutvelocityX = 0;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }
  if (ballebreakout.x > joueur.x+15 && ballebreakout.x < joueur.x+49) {
    ballebreakoutvelocityX = 50;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }
  if (ballebreakout.x > joueur.x+50 && ballebreakout.x < joueur.x+99) {
    ballebreakoutvelocityX = 100;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }
  if (ballebreakout.x > joueur.x+100 && ballebreakout.x < joueur.x+200) {
    ballebreakoutvelocityX = 150;
    ballebreakout.setVelocityX(ballebreakoutvelocityX);
  }

  joueur.y = 685;

}


function hitBrique(ballebreakout,briques) {

  this.sound.play('Brick');

  ballebreakoutvelocityY = ballebreakoutvelocityY+5;
  ballebreakoutvelocityY = ballebreakoutvelocityY*-1;
  ballebreakout.setVelocityY(ballebreakoutvelocityY);
  briques.disableBody(true, true);
  nbbrique = nbbrique-1;
  nbbriqueText.setText(nbbrique);

}

function resetbreakout() {

  ballebreakoutvelocityX = Phaser.Math.Between(-100, 100);

  ballebreakoutvelocityY = -200;
  ballebreakout.x = 640;
  ballebreakout.y = 684;
  joueur.x = 640;
  ballebreakout.setVelocityX(ballebreakoutvelocityX);
  ballebreakout.setVelocityY(ballebreakoutvelocityY);
}