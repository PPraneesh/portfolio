let distMouse =15;
let cols;
let rows
let blocks=[]
let size=10;
let offset=4;
function setup() {
  const width = document.getElementsByClassName('playground')[0].offsetWidth;
  const height = document.getElementsByClassName('playground')[0].offsetHeight;
  let canvas = createCanvas(width,height);
  canvas.style('display', 'block');
  rectMode(CENTER)
  angleMode(DEGREES);
  colorMode(RGB)
  cols = width/size;
  rows= height/size;
  for(let i=0;i<cols;i++){
    blocks[i]=[]
    for(let j=0;j<rows;j++){
      blocks[i][j] =new Block(size/2+i*size,size/2+j*size);
    }
  }
}
window.addEventListener('resize', () => {
  const width = document.getElementsByClassName('playground')[0].offsetWidth;
  const height = document.getElementsByClassName('playground')[0].offsetHeight;
  let canvas = resizeCanvas(width,height);
  canvas.style('display', 'block');
  cols = width/size;
  rows= height/size;
  for(let i=0;i<cols;i++){
    blocks[i]=[]
    for(let j=0;j<rows;j++){
      blocks[i][j] =new Block(size/2+i*size,size/2+j*size);
    }
  }
});
document.querySelector('.playground').addEventListener('touchmove', function(e) {
  e.preventDefault();
}, { passive: false });

function draw() {
  background(34, 33, 41)
  for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){
        blocks[i][j].display()
   blocks[i][j].move()
    }
  }
}


/// block and X
class Block{
  constructor(x,y){
    this.x =x;
    this.y =y;
    this.angle=0;  
  }
  display(){
    noFill();
    push();
  translate(this.x,this.y);
  rotate(this.angle)
    if(this.angle>0&& this.angle<45){
      stroke(94, 63, 41)
      this.drawRect()
    }else{
      stroke(255, 168, 106);
      this.drawX();
    }
      
    pop();
 }
 isMouseOver() {
  let distance = dist(mouseX, mouseY, this.x, this.y);
  return distance < distMouse; // return true if mouse is over the block
}
  move(){
    let distance;
    if(pmouseX -mouseX !=0 || pmouseY -mouseY !=0 ){
      distance = dist(mouseX,mouseY,this.x,this.y);
      if(distance < distMouse){
      this.angle+=0.5
    }
    }
    if(this.angle>0 && this.angle<90){
        this.angle+=1;
    }
    else{
          this.angle=0;
        }
    
  }
  drawRect(){
    rect(0,0,size-offset,size-offset)
  }
  drawX(){
    let margin= -size/2;
    line(margin+offset/2,margin+offset/2,margin+size-offset/2,margin+size-offset/2);
  line(margin+size-offset/2,margin+offset/2,margin+offset/2,margin+size-offset/2);
  }
} 