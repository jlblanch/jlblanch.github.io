<!-- //hide from older browsers
$(document).ready(function(){
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
	
	window.requestAnimationFrame(redraw);
	
}
window.requestAnimationFrame(redraw);

function redraw() {
	var ctx=document.getElementById('staff').getContext('2d');	
	ctx.clearRect(0,0,$('#canvas_container').width,$('#canvas_container').height);				
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
});
-->