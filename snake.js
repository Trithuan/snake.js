function snake(button){
		function rand(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	oneclick = (oneclick+1)%2;
	order = 3;
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
		ctx.fillStyle = "#ffffff";
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
		if(array[39] == 1){
			dir = 0;
		}else
		if(array[40] == 1){
			dir = 1;
		}else
		if(array[37] == 1){
			dir = 2;
		}else
		if(array[38] == 1){
			dir = 3;
		}
		setTimeout(function(){setArrow()}, 1);
	}
	setArrow();
	function play(){
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
			afficher();
			for(var i = 1; i < nbcube; i++){
				if(posx[t-i] == x && posy[t-i] == y || x >= nbcase || x < 0 || y >= nbcase || y < 0){
					loose = true;
					reset();
					snake();
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
			t++;
			setTimeout(function(){play()}, 100);
		}
	}
	play();
}
