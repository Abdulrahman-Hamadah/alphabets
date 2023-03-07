var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["images/a.png", "images/b.png", "images/c.png", "images/d.png", "images/e.png", "images/f.png", "images/g.png","images/h.png" , "images/i.png","images/j.png" , "images/k.png", "images/l.png", "images/m.png", "images/n.png", "images/o.png","images/p.png" , "images/q.png","images/r.png" ,"images/s.png" , "images/t.png", "images/u.png","images/v.png" , "images/w.png","images/x.png" , "images/y.png","images/z.png"];

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