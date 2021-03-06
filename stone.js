class Rock {
  constructor(x, y, r){
      var options={
          isStatic:false,
          restitution:0,
          friction:0.2,
          density:1
      }
      this.body = Matter.Bodies.circle(x, y, r, options);
      this.r = r;

      this.image = loadImage("Plucking mangoes/stone.png");

      World.add(world, this.body);
  }

  display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r*2, this.r*2);
      pop();
  }
}