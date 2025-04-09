class Paddle{
    constructor(width, height) {
        this.x = width/2;
        this.y = height*0.95;
        this.width = width/4;
        this.height = height/16;
    }
    show(){
        fill(255, 0, 0);
        rectMode(CENTER);
        this.x = mouseX;
        rect(this.x,this.y,this.width,this.height);
    }
}