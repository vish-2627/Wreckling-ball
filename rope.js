class rope{
	constructor(body1,body2)
	{
		// this.offsetX=offsetX
		// this.offsetY=offsetY
		var options={
			bodyA:body1,
			bodyB:body2,
			// pointB:{x:this.offsetX, y:this.offsetY}
			stiffness:1,
			length:550
		}
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		// var Anchor1X=pointA.x
		// var Anchor1Y=pointA.y

		// var Anchor2X=pointB.x+this.offsetX
		// var Anchor2Y=pointB.y+this.offsetY

		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}