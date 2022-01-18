class Box {

  constructor(x,y,width,height){

      var options ={
          isstatic : false,
          restitution : 5,
          friction : 5
      }
      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      this.visiblity = 255;
      World.add(world,this.body);
  }
  
  
  score(){
    if(this.visiblity < 0){
      score = score +1;
    }
  }

  display(){
    var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);

  }

}
