class Umbrella{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.5,
            isStatic:true
        }
        this.r = 20;
        this.body = Bodies.circle(x, y, this.r, options);
    }
    
} 
