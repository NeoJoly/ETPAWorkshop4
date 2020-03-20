var titre;
var multicolor = 0;
var timer = 1;
var texttfp;
var pressenter; 

var finMusic;

class Fin extends Phaser.Scene {
constructor() {
  super('Fin');

}


init(){}


preload(){


}


create(){
  
  // fondue entrée
  this.cameras.main.fadeIn(3000);

  titre = this.add.text(640, 20, ' A Journey through\nVideo Games History', {fontFamily: 'Title Pixel Font', fontSize: 70}).setOrigin(0.5,0);
  texttfp = this.add.text(640, 650, 'THANKS FOR PLAYING', {fontFamily: 'Pixel Font', fontSize: 50}).setOrigin(0.5,0.5).setVisible(false);
  pressenter = this.input.keyboard.addKey('ENTER');

  // audio
  finMusic = this.sound.add('FinMusic');
  finMusic.play({volume: 0.3, loop: true});



}


update(){

  // texte "Press Enter" qui clignote
  if (timer == 0) {
    this.time.addEvent({
      delay: 1000,
      callback: ()=>{
        texttfp.setVisible(false);
        timer = 1;
    },
      loop: false
  });
  } else if (timer == 1) {
    this.time.addEvent({
      delay: 1000,
      callback: ()=>{
        texttfp.setVisible(true);
        timer = 0;
    },
      loop: false
  });
  }



  // titre multicolore

  if (multicolor == 0) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#f00');
        multicolor = 1;
    },
      loop: false
  });
  } else if (multicolor == 1) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#f60');
        multicolor = 2;
    },
      loop: false
  });
  } else if (multicolor == 2) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#ff0');
        multicolor = 3;
    },
      loop: false
  });
  } else if (multicolor == 3) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#0f0');
        multicolor = 4;
    },
      loop: false
  });
  } else if (multicolor == 4) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#0fa');
        multicolor = 5;
    },
      loop: false
  });
  } else if (multicolor == 5) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#0ff');
        multicolor = 6;
    },
      loop: false
  });
  } else if (multicolor == 6) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#08f');
        multicolor = 7;
    },
      loop: false
  });
  } else if (multicolor == 7) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#00f');
        multicolor = 8;
    },
      loop: false
  });
  } else if (multicolor == 8) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#90f');
        multicolor = 9;
    },
      loop: false
  });
  } else if (multicolor == 9) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#f0f');
        multicolor = 10;
    },
      loop: false
  });
  } else if (multicolor == 10) {
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        titre.setColor('#fff');
        multicolor = 0;
    },
      loop: false
  });
  } 






  
  // fin du jeu
  if (pressenter.isDown) {
  this.cameras.main.fadeOut(3000);
  this.time.addEvent({
    delay: 5000,
    callback: ()=>{
      finMusic.mute = true;
      this.scene.stop();
  },
    loop: false
});
    
  }
  

  
}


}
