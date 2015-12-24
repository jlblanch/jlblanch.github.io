<!-- 
//declare variables
var staff=new Image();
var qnote=new Image();
var eighth=new Image();
var c = document.getElementById('staff');

var ctx=c.getContext('2d');
var scalex = 0.5;
var scaley = 0.5;
//set source for variables
staff.src='../images/blank-staff.png';
qnote.src='../images/qnote.png';
eighth.src='../images/eighth.png';

/*function scale(){
	var imgwidth=staff.offsetWidth;
	var imgheight=staff.offsetHeight;
	c.width=imgwidth*scalex;
	c.height=imgheight*scaley;
	ctx.scale(scalex,scaley);
	window.requestAnimationFrame(redraw);
}*/
//initialize the event listener 
initialize();

function initialize(){
	window.addEventListener('resize',resize,false);
	
	resize();  //function to resize the canvas element
}
function resize(){
	var displayWidth = c.clientWidth;
	var displayHeight = c.clientHeight;
	if(c.width != displayWidth || c.height != displayHeight){
		c.width = displayHeight;
		c.height = displayHeight;
		
	}
	ctx.clearRect(0,0,ctx.width,ctx.height);
	ctx.width=window.innerWidth;
	ctx.height=window.innerHeight;
	
	if(ctx.width < 400){
		window.requestAnimationFrame(redrawsmall);
	}
	else if(ctx.width >=400 && ctx.width < 800){
		window.requestAnimationFrame(redrawmed);
	}
	else{
		window.requestAnimationFrame(redraw);
	}
	
	
}
window.requestAnimationFrame(resize);

function redraw() {
	
	ctx.drawImage(staff,10,10,375,90);
	for (var i=0; i < 4; i++){
		ctx.save();
		ctx.translate(i*25,10-i*10);
		ctx.drawImage(qnote,100,23);
		ctx.restore();		
	}
	for (i=0;i<4;i++){
		ctx.save();
		ctx.translate((i*25)/1.25,10-i*9.75);
		ctx.drawImage(eighth, 200,17);
		ctx.restore();
	}
}
function redrawsmall(){
	ctx=document.getElementById('staff').getContext('2d');
	ctx.clearRect(0,0,$('#canvas_container').width,$('#canvas_container').height);
	ctx.drawImage(staff,10,10,375*0.5,90*0.5);
	for (var i=0; i < 4; i++){
		ctx.save();
		ctx.translate(i*25,10-i*10);
		ctx.drawImage(qnote,100,23);
		ctx.restore();		
	}
	for (i=0;i<4;i++){
		ctx.save();
		ctx.translate((i*25)/1.25,10-i*9.75);
		ctx.drawImage(eighth, 200,17);
		ctx.restore();
	}
}
function redrawmed(){
	
	ctx.clearRect(0,0,$('#canvas_container').width,$('#canvas_container').height);				
	ctx.drawImage(staff,10,10,375*0.75,90*0.75);
	for (var i=0; i < 4; i++){
		ctx.save();
		ctx.translate(i*25,10-i*10);
		ctx.drawImage(qnote,100,23);
		ctx.restore();		
	}
	for (i=0;i<4;i++){
		ctx.save();
		ctx.translate((i*25)/1.25,10-i*9.75);
		ctx.drawImage(eighth, 200,17);
		ctx.restore();
	}
}
	
		
	
	
		
	
	
	
	
	




/*var c=document.getElementById("staff");
var ctx=c.getContext("2d");

ctx.rect(20,55,360,70); //outer border of staff
ctx.strokeStyle="black"; 
ctx.stroke();

//variable declarations for draw staff lines
		
var xstart=20;
var xstop=360;
var ystart=55;
var ystop=105;

//draw staff lines
for(i=0;i<3;i++){
	ctx.moveTo(xstart,ystart+17.5);
	ctx.lineTo(xstart+xstop,ystart+17.5);
	ctx.strokeStyle="#000";
	ctx.stroke();
	ystart+=17.5;
}

//Measure Divider
ystart=55;
ystop=125;
ctx.moveTo((xstart+xstop+20)/2,ystart); // start measure divider
ctx.lineTo((xstart+xstop+20)/2,ystop); //end measure divider
ctx.stroke();
*/
/*
//draw quarter note
ctx.beginPath();
ctx.arc(30.625,113.125,8.75,0,2*Math.PI);  //x-center, y-center, radius, startAngle, endAngle, counter-clockwise true/false
ctx.stroke();
ctx.fillStyle="black";
ctx.fill();
ctx.beginPath();
ctx.moveTo(39.5625,113.125);
ctx.lineTo(39.5625,50.29);
ctx.stroke();
*/
/*
//notes follow here
var x=42.5;
var y=116.25;
var r=8.75;
for (i=0;i<4;i++){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle="black";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(x+r,y);
	ctx.lineTo(x+r,y-(r*5));
	ctx.stroke();
	x=x+42.5;
	y-=r*2;
}

//draw eighth notes in measure 2
x=211.25;
y=125;
for (i=0;i<2;i++){
	ctx.beginPath();
	ctx.arc(x,y,r/2,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle="black";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(x+r/2,y);
	ctx.lineTo(x+r/2,y-(r*4));
	ctx.stroke();
	x+=21.25;
	y-=r*2;	
}
ctx.moveTo((x-21.25)+r/2,y-(r*2));
ctx.lineTo((x-42.5)+r/2,y+(r/10));
ctx.stroke();

// draw quarter notes in measure 2
x=260
for (i=0;i<3;i++){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle="black";
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(x+r,y);
	ctx.lineTo(x+r,y-(r*5));
	ctx.stroke();
	x=x+42.5;
	y-=r*2;
}
*/
 
-->