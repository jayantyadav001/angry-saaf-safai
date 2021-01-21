class Chain
{
    constructor(x,y)
    {
 var options = 
 {
 bodyA: x,
 bodyB:y,
 length:10,
 stiffness:0.05
 }
 this.chain=Constraint.create(options);
 World.add(world,this.chain);
    }

 display()
 {
     var pointa = this.chain.bodyA.position;
     var pointb = this.chain.bodyB.position
     line(pointa.x,pointa.y,pointb.x,pointb.y)
 }




}