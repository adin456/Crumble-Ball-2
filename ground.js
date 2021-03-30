class Ground{
    constructor(x,y,width,height){
    var option = {
        isStatic :true
    }
    this.width=width;
    this.height=height;
    this.body = Bodies.rectangle(x,y,width,height,option);
    World.add(world,this.body);

}
display(){
    var p =this.body.position;
    push ();
    fill ("blue");
    rectMode(CENTER);
    rect(p.x,p.y,this.width,this.height);


}
}