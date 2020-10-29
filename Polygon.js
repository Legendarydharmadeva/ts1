class Polygon{
    constructor(x,y,width,height){
        
        var options = {
            'resttution': 0.8,
            'friction': 1.0,
            'density': 1.0
        }
        this.body = Bodies.circle(50,200,20);
        World.add(world, this.body);

        slingshot = new Slingshot(this.polygon,{x:100,y:200});

    }

    display(){
        var pos = this.body.position.x;
        var pos = this.body.position.y;
        recrMode(CENTER);
        
    }
 }

        
    
