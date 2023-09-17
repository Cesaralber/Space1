var player,bg;
var fondo,cohete,meteorito,cohete_2;
var edge;
var obstaculo;
var meteorito1;
var puntaje = 0 ;
var fondoInvisible;


function preload(){
fondo = loadImage("ESPACIO.jpg");
cohete = loadImage("111.png");
meteorito = loadImage("OIP1.jpg");
cohete_2 = loadImage("descarga1.png");
obstaculo2 = loadImage("OIP2.jpg");
moneda = loadImage("moneda.jpg");
}


function setup(){
//Se crea el fondo
createCanvas(windowWidth,windowHeight);
//Se le da una imagen al fondo y se crea un borde
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage("Imagen",fondo);
bg.scale = 1.1
edge = createEdgeSprites();

//Creamos el primer meteorito, su velocidad, la colision y su imagen
meteorito1 = createSprite(600,250,70,70);
meteorito1.addImage("obstaculo",obstaculo2);
meteorito1.scale = 0.4;
//meteorito1.debug = true;
meteorito1.setCollider("rectangle",-75,80,100,100)
meteorito1.setVelocity(30,-10);

//Esta aqui el jugador, su colision y su imagen
player = createSprite(100, 400, 70, 70);
player.addImage(cohete)
player.scale = 0.5
//player.debug = true;
player.setCollider("rectangle",0,0,50,210);

//Creamos el primer meteorito, su velocidad, la colision y su imagen
obstaculo = createSprite(500,250,70,70);
obstaculo.addImage("meteoro",meteorito);
obstaculo.scale = 0.4;
obstaculo.setVelocity(10,20);
obstaculo.setCollider("rectangle",-65,10,150,150);
obstaculo.debug = true;

fondoInvisible = createSprite(displayWidth/2-20,displayHeight/2-40,1500,1500)
fondoInvisible.scale = 1.1
fondoInvisible.visible = false;


}


function draw() {
    background(0); 
     
  //If para el puntaje
  if(player.isTouching(fondoInvisible)){
      puntaje = puntaje+1;
    }
  //Colisiones de los objetos
  if(player.isTouching(edge)){
    player.bounceOff(edge);
   }
  if(obstaculo.isTouching(edge)){
    obstaculo.bounceOff(edge);
   }
  if(meteorito1.isTouching(edge)){
    meteorito1.bounceOff(edge);
   }
  if(player.isTouching(obstaculo)|| player.isTouching(meteorito1)){
    player.visible = false
    gameover();
   }
 
   //Movimiento del juagdor
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
   }

  if(keyDown("DOWN_ARROW")||touches. length>0){
    player.y = player.y+30
   }

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  
}

//Cambio de imagen del jugador con la tecla de espacio y su vuelta al original
if(keyWentDown("space")){
 
  player.addImage(cohete_2)
   
}
else if(keyWentUp("space")){
  player.addImage(cohete)
}

//Dibujamos los sprites 
drawSprites();
fill("white");
textSize(30);
text("Puntaje = "+puntaje,50,50);
  
  }
//funcion que desaparace todo y muestra el puntaje
function gameover(){
  fill("white");
  textSize(70);
  text("GAMEOVER puntaje = "+puntaje,displayWidth-1150, displayHeight/2);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(fondo);
  bg.scale = 1.1;
  edge = createEdgeSprites();
  //Ni idea
  pop();
  hide();
  if(player.isTouching(edge)){
    player.bounceOff(edge);
   }
   if(obstaculo.isTouching(edge)){
    obstaculo.bounceOff(edge);
   }
   if(meteorito1.isTouching(edge)){
    meteorito1.bounceOff(edge);
   }
   if(player.isTouching(obstaculo)|| player.isTouching(meteorito1)){
    player.visible = false
    gameover();
   }
 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}

if(keyDown("DOWN_ARROW")||touches. length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  
}


if(keyWentDown("space")){
 
  player.addImage(cohete_2)
   
}


else if(keyWentUp("space")){
  player.addImage(cohete)
}
push();
  }