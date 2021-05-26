class box {
  constructor(x, y, width, height, colour) {
    var options = {
        'restitution':0,
        'friction':1.0,
        'density':0.3,
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color=colour;
    World.add(world, this.body);
  }
   display(){
    
     //console.log(this.body.speed);
     if(this.body.position.y < 350){
      push();
        translate(this.body.position.x, this.body.position.y);
        
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
     }
     else{
       //World.remove(world, this.body);
       
       push();
       
       this.Visiblity = this.Visiblity-1;
       
       //tint(255,this.Visiblity);
       //rect(this.body.position.x, this.body.position.y, this.width, this.height);
       pop();
       
     }
     
   }
  score(){
    if(this.Visiblity===0){
      this.Visiblity=-1;
      return score++;
    
    }
  }
  
  
  };