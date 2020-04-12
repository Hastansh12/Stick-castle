function setup() {
  createCanvas(800,400);
  
 
}

function draw() {
  background(0,0,255);
  fill('brown')
  rect(0,390,800,20)
  fill('black');
  triangle(60, 75, 88, 20, 116, 75);
  triangle(704,75,732,20,760,75);
  triangle(280,200 ,417.5  ,35  ,555,200)
      fill('red');
  rect(60,75,56,315);
  rect(704,75,56,315)
  fill('red');
  rect(160,160,100,230);
  rect(574,160,100,230)
  rect(280,200,275,190);
  fill('black');
  rect(140,160,140,50) ;
  rect(140,130,30,30);
  rect(195,130,30,30);
  rect(250,130,30,30);
  rect(554,160,140,50) ;
  rect(554,130,30,30);
  rect(609,130,30,30);
  rect(664,130,30,30) ;
  rect(392.5,270,50,120);

  drawSprites();
}