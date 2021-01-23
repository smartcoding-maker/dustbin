
class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,restitution:0.3,friction:0.3,density:3

        } 
        this.x=x
        this.y=y
        this.radius=radius
        this.body=Bodies.circle(x,y,radius/2,options)
        
        World.add(world,this.body)
    }
    display(){
        push()
        ellipseMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        strokeWeight(5)
        fill("blue")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}
