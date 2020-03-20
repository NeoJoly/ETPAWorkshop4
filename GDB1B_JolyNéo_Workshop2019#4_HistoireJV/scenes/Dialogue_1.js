var timer = 1;

var textpressenter;
var pressenter;

var message1;
var message2; 
var message3;
var message4;
var message5;
var message6;
var message = 1;

var dialoguesMusic;

class Dialogue_1 extends Phaser.Scene {
  constructor() {
    super('Dialogue_1');

  }

  
  init(){}


  preload(){

    this.load.image('bulle', 'assets/dialogues/bulle.png');

  }


  create(){

    // fondu entrée
    this.cameras.main.fadeIn(3000);

    pressenter = this.input.keyboard.addKey('ENTER');
    textpressenter = this.add.text(640, 650, 'PRESS ENTER', {fontFamily: 'Pixel Font', fontSize: 35}).setOrigin(0.5,0.5).setVisible(false);

    this.add.image(0, 0, 'bulle').setOrigin(0,0);

    message1 = this.add.text(100, 100, '- Et voilà le premier jeu vidéo de l\'histoire, celui auquel je jouais quand j\'avais 8 ans,\n\n\n  ma puce.', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0);
    message2 = this.add.text(100, 200, '- Waouh, ça n\'a vraiment rien à voir avec maintenant !', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message3 = this.add.text(100, 250, '- Et non haha, mais c\'était déjà fou pour l\'époque.', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message4 = this.add.text(100, 300, '- Oui j\'imagine.', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message5 = this.add.text(100, 350, '- Et si on jouait maintenant au jeu que je jouais 2 ans plus tard ?', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message6 = this.add.text(100, 400, '- Oh oui, avec plaisir ! C\'était quoi ?', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);

    // audio
    dialoguesMusic = this.sound.add('DialoguesMusic');
    dialoguesMusic.play({volume: 0.1, loop: true});


  }


  update(){

    if (pressenter.isDown && message == 1) {
      message2.setVisible(true);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('Confirmation',{volume: 0.3});
      },
        loop: false
    });
      this.time.addEvent({
        delay: 500,
        callback: ()=>{
          message = 2;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message == 2) {
      message3.setVisible(true);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('Confirmation',{volume: 0.3});
      },
        loop: false
    });
      this.time.addEvent({
        delay: 500,
        callback: ()=>{
          message = 3;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message == 3) {
      message4.setVisible(true);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('Confirmation',{volume: 0.3});
      },
        loop: false
    });
      this.time.addEvent({
        delay: 500,
        callback: ()=>{
          message = 4;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message == 4) {
      message5.setVisible(true);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('Confirmation',{volume: 0.3});
      },
        loop: false
    });
      this.time.addEvent({
        delay: 500,
        callback: ()=>{
          message = 5;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message == 5) {
      message6.setVisible(true);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('Confirmation',{volume: 0.3});
      },
        loop: false
    });
      this.time.addEvent({
        delay: 500,
        callback: ()=>{
          message = 6;
      },
        loop: false
    });
    }

    if (message == 6 || message == 7) {
      // texte "Press Enter" qui clignote
      if (timer == 0) {
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            textpressenter.setVisible(true);
            timer = 1;
            message = 7;
        },
          loop: false
      });
      } else if (timer == 1) {
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            textpressenter.setVisible(false);
            timer = 0;
            message = 7;
        },
          loop: false
      });
      }
      
    }

    // démarrage de Breakout
    if (pressenter.isDown && message == 7) {
      this.cameras.main.fadeOut(3000);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('GameStart',{volume: 0.3});
      },
        loop: false
    });
      this.time.addEvent({
        delay: 5000,
        callback: ()=>{
          dialoguesMusic.mute = true;
          this.scene.start("Breakout");
      },
        loop: false
    });
    }
    

  
  }


}
