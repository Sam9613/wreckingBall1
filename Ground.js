class Ground{
    constructor(x,y,w,h){
    var options = {
    isStatic:true,
    
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
   
    this.ground=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
    World.add(myworld,this.ground)
    
    }
    show(){
    var pos=this.ground.position;
   
    push()
    
    rectMode(CENTER)
    //imageMode(CENTER)
    fill("purple")
    rect(pos.x,pos.y,this.w,this.h)
    pop()
    
    
    }
    }

