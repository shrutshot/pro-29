class Ball{
    constructor(x,y,r){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
       this.body=Bodies.circle(x,y,r,options);
       this.r=r;

       World.add(world, this.body);
    }
    display(){
        circle(this.body.position.x, this.body.position.y, this.r);
    }
}