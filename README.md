
# FA205_Workshop_7

Website link: https://mremily9.github.io/workshop-task-7/

This workshop task was done by forking from this repo: https://github.com/whosaidthat-3636/Workshop-0?tab=readme-ov-file

The original website link: https://whosaidthat-3636.github.io/Workshop-0/

# Overview
- Looked into learning about objects and classes
- Created a simulation/environment based on using a class
- experiment with walks and particle systems wihtin the sketch
- Learnt how to fork a GitHub repo and add to it 

  
# Notes

![image](https://github.com/user-attachments/assets/6cb28e6e-28f9-4e0d-ba7e-6c1e7f4d4931)

![image](https://github.com/user-attachments/assets/adbaf7f8-b862-4708-abe5-58c5ea629090)

![image](https://github.com/user-attachments/assets/1ec6c14e-5ae2-47ec-af89-0fca2f1953df)

![image](https://github.com/user-attachments/assets/911ad4c7-e977-4fe8-894f-3031e1a0cf7f)

![image](https://github.com/user-attachments/assets/e8a6543e-883e-4dc1-888b-c6eef7f4a8f9)


Comments while following the workshop video. 



# Progress (Problem Solving/Code)
**Forking another person's repo**
I had thought that now would be a good time to try implementing code based on another work - using something they created to be made into a class and to then try and simulate it to do something. 

![image](https://github.com/user-attachments/assets/0c0c6bc1-e685-48ae-847e-f61161717ba5)

I chose this project as it uses many shapes, and it looks visually nice. I could also take a shape and play around with it. 

Here I was coming up with some ideas on what to do.

![image](https://github.com/user-attachments/assets/c9c3b02b-7f74-47f5-b014-e919c2d3b1e6)


**Examples**
Here were some examples of simulations that I found interesting/similar to what I wanted to do. 

![image](https://github.com/user-attachments/assets/a8ce4512-ea31-4338-b73f-2440c3629949)

https://editor.p5js.org/vamsi.pasumarthi/sketches/hILN44Tpu

![image](https://github.com/user-attachments/assets/40ce0e8c-8ea3-4b65-8d9c-06f071bbad3e)

https://p5js.org/examples/classes-and-objects-snowflakes/ 

**Adding in snowflake simulation**
I mainly wanted to try the snowflake simulation, as it felt more particle-like than the walk shown in the workshop video. 

![image](https://github.com/user-attachments/assets/567b66ae-8391-48ef-a68e-c577ac6b4ebf)

I implemented it and played around with the variables to change the rate at which it fell and the look of it. 

Adding in the snowflake class, an update() function that looked into changing its angles and its movement. 

![image](https://github.com/user-attachments/assets/21e8064a-a0f4-4efd-94e9-e28412cf9880)

Somewhat making it look more like confetti than snowflakes. 


**Creating my own class and simulation from the start**
I then wanted to try to add to the existing code. To do this I looked into changing the code from the draw() of the original

```
stroke(255);
  fill(255, 255, 153);
  rect(z, 100, 100, 200);

  z += move;
 
  if (z > width - 100) {
  move = -1;
  }

  if (z < 0) {
    move = 1;
  }
```

of the yellow rectangle moving left to right into a class - so that I could generate many of them and have them move at different speeds. 

This led into the following code for the class and implementations of the class

```
yr = new yellowRectangle(0, 1);
```

```
  yr.step();
  yr.display();
```
```
class yellowRectangle {
  constructor(x){
    this.x = x;
    this.move = 1;
  }

  step(){
    this.x += this.move;
 
    if (this.x > 300 - 100) {
      this.move = -1;
    }

    if (this.x < 0) {
      this.move = 1;
    }
  }

  display(){
    stroke(255);
    fill(255, 255, 153);
    rect(this.x, 100, 100, 200);
  }

}
```

By adding in a for loop to generate many of them I was able to get multiple yellow rectangles moving left to right

![image](https://github.com/user-attachments/assets/cea3bf7b-2c88-4d09-a8e1-de83db2c653c)

![image](https://github.com/user-attachments/assets/fc655b2b-4a14-43c2-8c12-f57946aa8d3b)

I also updated the class function for the movement so that the speed can be set randomly when creating a new yellowRectangle object 

```
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
```


**Final coding comments**
- I found creating classes to be fun and I could see how it would make coding elements much easier - especially if its something that you want to repeat


# Future development 
- I would love to develop this more by playing around in making classes for the other shapes in this canvas - each doing different things
- I want to also experiment with simulations in general - perhaps with different things like birds or physics related simulations.


# Reflection
- Reflecting back I think I could do more had I given myself the time for it - however I am happy with the things I experimented with and the outcomes
- Having code working in the way I want makes it enjoyable - as I'm problem solving - however also stressful








---



# Workshop-0

Link: [https://whosaidthat-3636.github.io/Workshop-0/]

In this workshop, the idea is the experiment with different variables, conditions and increments through 2D primitives

## Tasks
* Create a p5.js editorLinks to an external site. login and sign up to the Processing Foundation's forumLinks to an external site
* Make a p5.js sketch using 2D primitive shapes, variables, and conditionals. Make sure to save your work.
* Experiment with at least one of the following 2D primitive shapes from the p5.js documentation: line, triangle, quad, arc.
* Keep notes to clearly document your process and learning.

### 1. Setting up the canvas and 2D shapes
- Background
  * setting the scale of the Canvas to be 300 in width, 400 in height
  * background selected from a [RGB color picker](https://www.rapidtables.com/web/color/RGB_Color.html) to be a lighter shade closer to white
  ```
  function setup() {
  createCanvas(300, 400);}
  function draw() {
  background(250, 249, 249);
- Lines
  * straight line
  * lines at an angle
  * heavier strokes 
  ```
  stroke(0);
  strokeWeight(5);
  line(250, 15, 400, 15);
  line(150, 90, 400, 20);
  line(180, 150, 400, 60);
  ```
- Arc
  * placed in the middle of the canvas
  * with no fill
  ```
  noStroke();
  fill(204, 204, 255);
  arc(155, 280, 100, 100, 0, PI + HALF_PI);
  ```
- Triangle
  * placed at the top left of the canvas
  ```
  noStroke(0);
  fill(153, 204, 244);
  triangle(15, 25, 155, 10, 30, 250);
  ```
- Rectangle
  * placed on the right of the canvas
  * half of the shape is out of the canvas view
  * with a white stroke
  ```
  stroke(255);
  fill(255, 255, 153);
  rect(250, 100, 100, 200);
  ```

### 2. Arc
- I started with the color through a [RGB color picker](https://www.rapidtables.com/web/color/RGB_Color.html)
- The arc has a parameter that allows for a specific mode to fill the arc. For this instance a quarter has been taken off a full circle through the parameters of "PI + HALF_PI"
- The idea is to have the arc go in a loop using assignment by using a variable, expression and condition followed by the workshop video
   <img width="572" alt="image" src="https://github.com/user-attachments/assets/3d520f14-20ea-4958-94b9-628583862305" />

- However the code does not work because the shape moves in the _left direction_ but is _set to reset on the left side_ of the canvas 
 ```
  x = x - 6; 

  if (x > width) { 

    x = 100;}
```
- Correction through trial and error, learning to take the width of the arc into account
<img width="71" alt="image" src="https://github.com/user-attachments/assets/9f26e924-57df-4385-9a7e-1845b4f256de" />
 * arc now resets from the right
- To further expand I want to set it so that every time the arc reappears on the screen it decreases in transparency as viewed by the Coding Train on YT (Lesson 1.4)
  






  
  




