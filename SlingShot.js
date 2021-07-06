class SlingShot{
    constructor(BodyA,PointB) {
        var options = {
            bodyA:BodyA,pointB:PointB,
            'stiffness':0.04,
            'length':10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = PointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
      }
      display(){
        if(this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        stroke(48,22,8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        pop();
        
      }
      image(this.sling1,200,50);
      image(this.sling2,175,50);
      }

      fly() {
        this.chain.bodyA = null;
      }

      attach(body) {
        this.chain.bodyA = body;
      }

    }
