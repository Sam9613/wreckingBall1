class Ball{
constructor(x,y,r){
var options = {
isStatic:false,
'restitution':0.8,
'friction':1.0,
'density':1.0
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
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
fill("blue")
ellipse(0,0,this.r,this.r)
pop()



}

















}