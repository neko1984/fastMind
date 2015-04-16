/*
* js principal de la aplicación.
*/

var mainState ={
  preload:function(){
      
  },
  create:function(){
      
  },
  update:function(){
      
  }
  
};

var game = new Phaser.game(500,340,Phaser.AUTO,'gameDiv');
game.state.add('main',mainState);
game.state.start('main');
game.stage.backgroundColor = '#3498db';
game.physics.startSystem(Phaser.Physics.ARCADE);
