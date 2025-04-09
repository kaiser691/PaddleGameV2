//for entrancs animations
let xPos = [];
let yPos = [];
let ySpeed = [];
let rColor = [];
let gColor = [];
let bColor = [];


let startGame = false;
let paddle;
function setup(){
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    paddle = new Paddle(width, height);
   
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    paddle = new Paddle(width, height);
}
function animate(){
    if(frameCount % 1 == 0){
        xPos.push(random(0, width));
        yPos.push(-50);
        ySpeed.push(random(1, 10));
        rColor.push(random(0, 255));
        gColor.push(random(0, 255));
        bColor.push(random(0, 255));
    }
    for(let i = 0; i < xPos.length; i++){
        fill(rColor[i], gColor[i], bColor[i]);
        noStroke();
        ellipse(xPos[i], yPos[i], 20, 20);
        yPos[i] += ySpeed[i];
        if(yPos[i] > height + 50){
            xPos.splice(i, 1);
            yPos.splice(i, 1);
            ySpeed.splice(i, 1);
            rColor.splice(i, 1);
            gColor.splice(i, 1);
            bColor.splice(i, 1);
            i--;
        }
    }
}
function draw(){
    
    background(0, 221, 255);
    if(!startGame){
        animate();
    }else{
        paddle.show(); 
    }
   
    
    
   
  
}
