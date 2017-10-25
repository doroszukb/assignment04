function setup() {    
  createCanvas(windowWidth, windowHeight)
// Choose a font (for now, just system fonts)
textFont('system');
  angleMode(DEGREES); 

//frameRate(15);
  
  

}

function draw() {

  background(62, 63, 73); 

    //for(var x = 0; x < windowHeight/5; x += 1) {
 //     stroke(80);
 //     noFill();
 //     ellipse(random(0,windowWidth),random(0,windowHeight),random(0,windowHeight/15));

   // };

     translate(width/2,height/2);
    
     //tlo

    
  
  for(var x = 0; x < windowWidth*2; x += 1.5) {
      stroke(100,100,100,200);
      noFill();
      ellipse(0, 0, x*x);

    }
    
    ///tlo kulki
    fill(220,220,220)
    
    
    ellipse(windowWidth*8/100, windowHeight*8/100,10)
   ellipse(windowWidth*8/30, windowHeight*8/30,30)
   ellipse(windowWidth*8/30-100, windowHeight*8/30+150,40)
  ellipse(windowWidth*8/3-100, windowHeight*8/3+150,30)
  ellipse(1/windowWidth*8/3-100, 1/windowHeight*8/3+150,30)
push()
translate(-width/2,-height/2)

fill(220,220,220)
ellipse(windowWidth/20, windowHeight/180,80)
ellipse(windowWidth-90, windowHeight/80+300,50)
ellipse(windowWidth-700, windowHeight/80+100,50)
ellipse(windowWidth-1000, windowHeight/80+600,10)
pop()
 //   fill(200)
   // ellipse(0,0,10,10)
    
    //noFill()
  // ellipse(0,0,10,10)
  
  
   
    if(windowHeight<windowWidth){
   
  clockHand1(hour(),12,windowHeight/8,windowHeight/10,[118, 134, 191]) ;
 clockHand1(minute(),60,windowHeight/16,windowHeight/5,[48, 73, 163]);
    } else 
    {
      clockHand1(hour(),12,windowWidth/8,windowWidth/10,[118, 134, 191]) ;
 clockHand1(minute(),60,windowWidth/16,windowWidth/5,[48, 73, 163]);
    }
  
 
}
//funkcja 1
 function clockHand1(timeValue,range,size,radius,col){

  push();

  var angle = map(timeValue,0,range,-90,270);
 if (angle != -90){
  
  fill(col)
  
  stroke(120)
  line(0,0,radius*cos(angle)*windowWidth/500,radius*sin(angle)*windowHeight/500)
  noStroke();
  ellipse(radius*cos(angle)*windowWidth/500,radius*sin(angle)*windowHeight/500,size,size)
  }
  
  if(range==60){
    
  
    translate(radius*cos(angle)*windowWidth/500,radius*sin(angle)*windowHeight/500);
    
    
    if(windowHeight<windowWidth){
  clockHand2(millis(),1000,10,windowHeight/3,[237, 235, 109]);
  } else {
    clockHand2(millis(),1000,10,windowWidth/3,[237, 235, 109])
  }
  }
  //line(0,0,radius*cos(angle),radius*sin(angle));
  pop();
}

function clockHand2(timeValue,range,size,radius,col){
  push();
  

  var angle = map(timeValue,0,range,-90,270);
 //if (angle != -90){
  noStroke();
  fill(col);
  ellipse(radius*cos(angle)/4,radius*sin(angle)/4,size,size)
 // }
  
  line(0,0,radius*cos(angle),radius*sin(angle));
  pop();
}


//////////
function clockHand(timeValue,range,size,radius,col){
  push();
  
  var angle = map(timeValue,0,range,-90,270);
  noStroke();
 //if (angle != -90){
  
  fill(col)
  ellipse(radius*cos(angle)*windowWidth/100,radius*sin(angle)*windowHeight/100,size,size)
//  }
  line(0,0,radius*cos(angle),radius*sin(angle));
  pop()
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}