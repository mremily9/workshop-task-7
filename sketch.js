let x = 300;
let y = 400;
let z = 0;
let move = 1;
let ArcTransparency = 255;
let snowflakes = [];
let yr = [];

function setup() {
  createCanvas(300, 400);

  angleMode(DEGREES);

  for (let i = 0; i < 300; i++) {
    // Add a new snowflake object to the array
    snowflakes.push(new Snowflake());
  }

  for (let u = 0; u < 5; u++){
    yr[u] = new yellowRectangle(0, random(1, 5));
  }
  

}

function draw() {
  background(250, 249, 249);

  if (y > height) {
    y = 0;
  } else if (y > height / 2) {
    fill(255, 0, 0);  
  } else {
    fill(153, 204, 244);  
  }
  
  noStroke();
  triangle(15, y, 155, y - 15, 30, y + 225);
  
  y = y + 3;

  stroke(0);
  strokeWeight(5);
  line(250, 15, 400, 15);
  line(150, 90, 400, 20);
  line(180, 150, 400, 60);

  

  x = x - 6;
  if (x < -100) {
    x = width;

    ArcTransparency = ArcTransparency - 30;
    if (ArcTransparency < 0) {
      ArcTransparency = 255;
    }
  }
  
  for (let u = 0; u < 5; u++){
    yr[u].step();
    yr[u].display();
  }
  
  


 // Update and display each snowflake in the array
 let currentTime = frameCount / 60;

 for (let flake of snowflakes) {
   // Update each snowflake position and display
   flake.update(currentTime);
   flake.display();
 }

 
}

class Snowflake {
  constructor() {
    this.posX = 0;
    this.posY = random(-height, 0);
    this.initialAngle = random(0, 360);
    this.size = random(5, 10);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(200, 256), random(200, 256), random(200, 256));
  }

  update(time) {
    // Define angular speed (degrees / second)
    let angularSpeed = 65;

    // Calculate the current angle
    let angle = this.initialAngle + angularSpeed * time;

    // x position follows a sine wave
    this.posX = width / 2 + this.radius * sin(angle);

    // Different size snowflakes fall at different y speeds
    let ySpeed = 8 / this.size;
    this.posY += ySpeed;

    // When snowflake reaches the bottom, move it to the top
    if (this.posY > height) {
      this.posY = -50;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.posX, this.posY, this.size, this.size);
  }
}

class yellowRectangle {
  constructor(x, move){
    this.x = x;
    this.speed = move;
    this.move = move;
  }

  step(){
    this.x += this.move;
  
    if (this.x > 200) {
      this.move = -this.speed; 
    }

    if (this.x < 0) {
      this.move = this.speed; 
    }
  }

  display(){
    stroke(255);
    fill(255, 255, 153);
    rect(this.x, 100, 100, 200);
  }

}