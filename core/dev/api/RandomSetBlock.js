

var BlockSet = {
RandomBlock: function (x, y, z, blockID1, data1, blockID2, data2) {
var random = Math.random()*1;

if(random<=0.51){
World.setBlock(x, y, z, blockID1, data1);
}else{
World.setBlock(x, y, z, blockID2, data2);
} 
}, 
RandomBlockSet3x3: function (reg) {
var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 

	this.RandomBlock(posX.x, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 
}, 

RandomBlockSet3x3Empty: function (reg) {
var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 

this.RandomBlock(posX.x+1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 
}, 


RandomBlockSet3x3WallZ: function (reg) {
	var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 
	this.RandomBlock(posX.x, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y-1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y+1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y-1, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y+1, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y-1, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y+1, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 

}, 



RandomBlockSet3x3WallX: function (reg) {
	var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 
	this.RandomBlock(posX.x, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y-1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y+1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y-1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y+1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x-1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y-1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y+1, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 

}, 


RandomBlockSet5x5: function (reg) {
var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 
this.RandomBlock(posX.x, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+2, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x-2, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


this.RandomBlock(posX.x, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 
},

RandomBlockSet5x5Empty: function (reg) {
var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 


this.RandomBlock(posX.x+2, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x-2, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


this.RandomBlock(posX.x, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 
},

RandomBlockSet7x7: function (reg) {
var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 
this.RandomBlock(posX.x, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x+2, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x-2, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


this.RandomBlock(posX.x, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


this.RandomBlock(posX.x+3, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x-3, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


this.RandomBlock(posX.x, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 

},
RandomBlockSet7x7Empty: function (reg) {
var posX = reg.coordsX;
	var posY = reg.coordsY;
	var posZ = reg.coordsZ;
	var kokni = reg.plusY;
	var kokni1 = reg.Y;
	if(kokni==true){
		posY.y+=kokni1;
		} 
		if(kokni==false){
		posY.y-=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x+=kokni3;
		} 
		if(kokni2==false){
		posX.x-=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z+=kokni5;
		} 
		if(kokni4==false){
		posZ.z-=kokni5;
		} 

this.RandomBlock(posX.x+3, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+3, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x-3, posY.y, posZ.z, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z+1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z+2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z-1, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z-2, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-3, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);


this.RandomBlock(posX.x, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z+3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

this.RandomBlock(posX.x, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-1, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+1, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x-2, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);
this.RandomBlock(posX.x+2, posY.y, posZ.z-3, reg.IDblock1,  reg.data1, reg.IDblock2, reg.data2);

if(kokni==true){
		posY.y-=kokni1;
		} 
		if(kokni==false){
		posY.y+=kokni1;
		} 
		var kokni2 = reg.plusX;
	    var kokni3 = reg.X;
	if(kokni2==true){
		posX.x-=kokni3;
		} 
		if(kokni2==false){
		posX.x+=kokni3;
		} 
		var kokni4 = reg.plusZ;
	    var kokni5 = reg.Z;
	if(kokni4==true){
		posZ.z-=kokni5;
		} 
		if(kokni4==false){
		posZ.z+=kokni5;
		} 

},
};
