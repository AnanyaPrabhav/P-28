class Ground {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0.1,
          'friction':1,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      // this.image = loadImage("Plucking mangoes/boy.png");

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      // translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };