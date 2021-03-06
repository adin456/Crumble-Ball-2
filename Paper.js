class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate (pos.x,pos.y);
      rotate (this.body.angle);
      imageMode(CENTER);
      fill("red");
      image( this.image,0,0, this.radius*2, this.radius*2);
      pop();
    }
  };
  