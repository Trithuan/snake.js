function snake(button){
		function rand(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var scrsize = 300;
	var oneclick = 1;
	var speed = 1;
	var order = 3;
	var nbcube = 3;
	var nbcase = 20;
	var csize = scrsize/nbcase;
	var x = Math.round(nbcase/2);
	var y = Math.round(nbcase/2);
	var posRx = -1;
	var posRy = -1;
	var t = 3;
	var revive = 0;
	var posx = [];
	var posy = [];
	var dir = 0;
	function afficher(){
		ctx.clearRect(0, 0, scrsize, scrsize);
		ctx.fillStyle = "#000000";
		ctx.fillRect(x*csize, y*csize, csize, csize);
		for(var i = 1; i < nbcube; i++){
			ctx.fillRect(posx[t-i]*csize, posy[t-i]*csize, csize, csize);
		}
		ctx.fillStyle = "#ff0000";
		ctx.fillRect(posRx*csize, posRy*csize, csize, csize);
	}
	function reset(){
		nbcube = 3;
		nbcase = 20;
		csize = scrsize/nbcase;
		x = Math.round(nbcase/2);
		y = Math.round(nbcase/2);
		posRx = rand(nbcase);
		posRy = rand(nbcase);
		t = 3;
		posx = [];
		posy = [];
		dir = 0;
		for(var i = 1; i < nbcube; i++){
			posx[t-i] = -1;
			posy[t-i] = -1;
		}
	}
	reset();
	function setArrow(){
		document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
       dir = 2;
    }
    else if(event.keyCode == 38) {
        dir = 3;
    }
    else if(event.keyCode == 39) {
        dir = 0;
    }
    else if(event.keyCode == 40) {
        dir = 1;
    }
});
		setTimeout(function(){setArrow()}, 1);
	}
	setArrow();
	function play(){
		console.log("wtf");
		if (oneclick == 1 && order == 3) {
			loose = false;
			posx[t] = x;
			posy[t] = y;
			if(x == posRx && y == posRy){
				nbcube++;
			}
			for(var i =0; i < nbcube; i++){
				if(posx[t-i] == posRx && posy[t-i] == posRy){
					posRx = rand(nbcase);
					posRy = rand(nbcase);
				}
			}
			console.log("x : ", x, ", y : ", y)
			afficher();
			for(var i = 1; i < nbcube; i++){
				if(posx[t-i] == x && posy[t-i] == y ){
					loose = true;
					reset();
					return;
				}
			}

			if(dir == 0){

				x += 1;
			}
			if(dir == 1){
				y += 1;
			}
			if(dir == 2){
				x -= 1;
			}
			if(dir == 3){
				y -= 1;
			}
			if (x >= nbcase) {x = 0}
			if (x < 0) {x = nbcase-1}
			if (y >= nbcase) {y = 0}
			if (y < 0) {y = nbcase-1}
			t++;
		speed += 0.0001;
			setTimeout(function(){play()}, 100*speed);
		}
	}
	play();
}
