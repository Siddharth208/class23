class Box{
    constructor(x,y,width,height){
        var op={
            restitution:1
        }
    this.body=Bodies.rectangle(x,y,width,height,op);
    World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height);
        pop();
    }
}