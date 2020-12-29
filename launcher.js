class Launcher{
    constructor(a, b){

        var options = {
            bodyA : a,
            pointB : b,
            stiffness : 0.004,
            length : 1
        }

        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){

        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.launcher.pointB;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    fly(){
        this.launcher.bodyA = null;
    }

    attach(body){
        this.launcher.bodyA = body;
    }
}