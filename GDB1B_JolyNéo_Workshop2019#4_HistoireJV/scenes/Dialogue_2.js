var timer = 1;

var textpressenter;
var pressenter;

var message21; 
var message22;
var message23;
var message24;
var message25;
var message26;
var message27;
var message2 = 1;

var dialoguesMusic;

class Dialogue_2 extends Phaser.Scene {
  constructor() {
    super('Dialogue_2');

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

    message21 = this.add.text(100, 100, '- Alors, ça t\'a plu ?', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0);
    message22 = this.add.text(100, 150, '- C\'était déjà plus avancé que Pong.', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message23 = this.add.text(100, 200, '- Eh oui, les jeux vidéos ont évolué très rapidement, et aujourd\'hui plus que jamais !', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message24 = this.add.text(100, 250, '- Tu m\'étonnes, j\'ai trop hâte que Mario Kart sorte en fin d\'année !', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message25 = this.add.text(100, 300, '- Double Dash, c\'est ça ?', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message26 = this.add.text(100, 350, '- Oui voilà. Tu te rends compte, on pourra y jouer à deux, sur la même voiture !\n\n\n  Dis, tu joueras avec moi ?', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);
    message27 = this.add.text(100, 450, '- Bien sûr, ma puce.', {fontFamily: 'Pixel Font', fontSize: 20}).setOrigin(0,0).setVisible(false);

    // audio
    dialoguesMusic = this.sound.add('DialoguesMusic');
    dialoguesMusic.play({volume: 0.3, loop: true});

  }


  update(){

    if (pressenter.isDown && message2 == 1) {
      message22.setVisible(true);
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
          message2 = 2;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message2 == 2) {
      message23.setVisible(true);
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
          message2 = 3;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message2 == 3) {
      message24.setVisible(true);
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
          message2 = 4;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message2 == 4) {
      message25.setVisible(true);
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
          message2 = 5;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message2 == 5) {
      message26.setVisible(true);
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
          message2 = 6;
      },
        loop: false
    });
    }
    else if (pressenter.isDown && message2 == 6) {
      message27.setVisible(true);
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
          message2 = 7;
      },
        loop: false
    });
    }

    if (message2 == 7 || message2 == 8) {
      // texte "Press Enter" qui clignote
      if (timer == 0) {
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            textpressenter.setVisible(true);
            timer = 1;
            message2 = 8;
        },
          loop: false
      });
      } else if (timer == 1) {
        this.time.addEvent({
          delay: 1000,
          callback: ()=>{
            textpressenter.setVisible(false);
            timer = 0;
            message2 = 8;
        },
          loop: false
      });
      }
      
    }

    // démarrage de la Fin
    if (pressenter.isDown && message2 == 8) {
      this.cameras.main.fadeOut(3000);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('Confirmation',{volume: 0.3});
      },
        loop: false
    });
    this.time.addEvent({
      delay: 5000,
      callback: ()=>{
        dialoguesMusic.mute = true;
        this.scene.start("Fin");
    },
      loop: false
  });
    }
    

  
  }


}
