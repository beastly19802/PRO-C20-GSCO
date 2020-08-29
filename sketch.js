var car,wall

var speed,weight

function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50)
  wall = createSprite(1300,200,60,400)
  wall.shapeColor = color(80,80,80)
  car.velocityX = speed 
}

function draw() {
  background(0);

  if (wall.x - car.x < (wall.width + car.width)/2) {

    car.velocityX = 0

    if (0.5*weight*speed*speed/22500 <= 100) {
      car.shapeColor = color(0,255,0)
    }

    else if (0.5*weight*speed*speed/22500 >= 180) {
      car.shapeColor = color(255,0,0)
    }

    else {
      car.shapeColor = color(230,230,0)
    }

    
  }

  drawSprites();
}