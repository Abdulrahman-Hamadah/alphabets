var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["images/a1.jpg", "images/b1.jpg", "images/c1.jpg", "images/d1.jpg", "images/e1.jpg", "images/f1.png", "images/g1.jpg","images/h1.png" , "images/i1.png","images/j1.jpg" , "images/k1.png", "images/l1.png", "images/m1.jpg", "images/n1.png", "images/o1.png","images/p1.png" , "images/q1.jpg","images/r1.jpg" ,"images/s1.jpg" , "images/t1.jpg", "images/u1.png","images/v1.jpg" , "images/w1.png","images/x1.jpg" , "images/y1.jpg","images/z1.jpg"];

var i = 0;

next.addEventListener('click', function(){
	
	i++;
	
	if( i === arr.length ){
		
		i = 0;
		
	}
	
	document.getElementById('image').src = arr[i];
})

prev.addEventListener('click', function(){
	
	i--;
	if(i === -1){
		
		i = arr.length - 1;
		
	}
	document.getElementById('image').src = arr[i];
	
})