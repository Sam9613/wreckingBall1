class Box{
    constructor(x,y,w,h){
    var options = {
       //isStatic:true
    //restitution:0.1,

   
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
  
    this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    World.add(myworld,this.body)
    
    }
    show(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(4)
    stroke(Math.round(random(150,255)))
    fill("pink")
    rect(0,0,this.w,this.h)
    pop()
    
    
    }
    }

