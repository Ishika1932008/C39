var database;
var canvas,playerCount,gameState = 0,form,player,game, allPlayers, distance = 0;
var car1,car2,car3,car4,cars;

function preload(){
track = loadImage("images/track.jpg")
car1_img = loadImage("images/car1.png")
car2_img = loadImage("images/car2.png")
car3_img = loadImage("images/car3.png")
car4_img = loadImage("images/car4.png")
ground = loadImage("images/ground.png")
}



function setup(){
    database = firebase.database()
canvas=  createCanvas (displayWidth-20, displayHeight-30)  
  game = new Game ()
  game.getState()
  game.start()

 
}



function draw(){
  //  background("lightgreen")
if(playerCount === 4){
  game.update(1)
}

if(gameState === 1){
  clear ()
  game.play()
}
    

}


