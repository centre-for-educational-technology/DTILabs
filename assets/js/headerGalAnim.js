var counter = 1;
var xDown = null;                                                        
var yDown = null;

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var div7 = document.getElementById("div7");
var div8 = document.getElementById("div8");
var firstTime = true;
var navDots = document.getElementsByClassName("navDot");
var i;
var counter = 0;
var loadNext = true;
var dontGo = false;
var noListener = false;

window.onload = function(){
	document.getElementById("headerGallery").addEventListener('touchstart', handleTouchStart, false);        
	document.getElementById("headerGallery").addEventListener('touchmove', handleTouchMove, false);
	caro1come();
	document.getElementById("headerGallery").addEventListener("mouseover", changeDontGo);
	document.getElementById("headerGallery").addEventListener("mouseout", function(){dontGo = false;});
	navDots[0].addEventListener("click", function(){
		loadNext = false;
		document.getElementById("headerGallery").removeEventListener("mouseover", changeDontGo);
		noListener = true;
		dontGo = false;
		i=1;
		window['caro'+counter+'go']();
	});
	navDots[1].addEventListener("click", function(){
		loadNext = false;
		document.getElementById("headerGallery").removeEventListener("mouseover", changeDontGo);
		noListener = true;
		dontGo = false;
		i=2;
		window['caro'+counter+'go']();
	});
	navDots[2].addEventListener("click", function(){
		loadNext = false;
		document.getElementById("headerGallery").removeEventListener("mouseover", changeDontGo);
		noListener = true;
		dontGo = false;
		i=3;
		window['caro'+counter+'go']();
	});
	navDots[3].addEventListener("click", function(){
		loadNext = false;
		document.getElementById("headerGallery").removeEventListener("mouseover", changeDontGo);
		noListener = true;
		dontGo = false;
		i=4;
		window['caro'+counter+'go']();
	});
}

function changeDontGo(){
	dontGo = true;
}

function handleTouchStart(evt) {                                         
	xDown = evt.touches[0].clientX;                                      
	yDown = evt.touches[0].clientY;                                      
};
                                             
function handleTouchMove(evt){
	if (! xDown || ! yDown){
		return;
	}

	var xUp = evt.touches[0].clientX;                                    
	var yUp = evt.touches[0].clientY;

	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;
	if(Math.abs(xDiff)+Math.abs(yDiff)>150){
		if(Math.abs(xDiff) > Math.abs(yDiff)){
			//left swipe
			if(xDiff>0){
				//parempoolne pilt tuleb
				loadNext = false;
				document.getElementById("headerGallery").removeEventListener("mouseover", changeDontGo);
				noListener = true;
				dontGo = false;
				i=counter+1;
				if(i==5){
					i=1;
				}
				window['caro'+counter+'go']();
				 
			//right swipe
			}else{
				//vasakpoolne pilt tuleb
				loadNext = false;
				document.getElementById("headerGallery").removeEventListener("mouseover", changeDontGo);
				noListener = true;
				dontGo = false;
				i=counter-1;
				if(i==0){
					i=4;
				}
				window['caro'+counter+'go']();
			}                       
		}
		//üles-alla swipe
		/*
		else{
			//up swipe
			if(yDiff>0){
				//stuff liigub alla
			}
			//down swipe
			else{
				//stuff liigub üles
			}                                                                 
		}
		*/
		//reset values
		xDown = null;
		yDown = null;
	}
};

function caro1come(){
	counter = 1;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	dontGo = false;
	div1.style.display = "inline-block";
	div2.style.display = "inline-block";
	if(firstTime){
		div1.style.webkitAnimation = "firstLeft 9.6s ease-in-out";
		div2.style.webkitAnimation = "firstRight 9.6s ease-in-out";
		div1.style.animation = "firstLeft 9.6s ease-in-out";
		div2.style.animation = "firstRight 9.6s ease-in-out";
		
		div1.addEventListener("webkitAnimationEnd", caro1go);
		div1.addEventListener("animationEnd", caro1go);
		
		firstTime = false;
	}else{
		document.getElementById("headerGallery").style.webkitAnimation = "contentFadeIn 0.3s ease-in-out";
		div1.style.webkitAnimation = "comeLeft 9.6s ease-in-out";
		div2.style.webkitAnimation = "comeRight 9.6s ease-in-out";
		document.getElementById("headerGallery").style.animation = "contentFadeIn 0.3s ease-in-out";
		div1.style.animation = "comeLeft 9.6s ease-in-out";
		div2.style.animation = "comeRight 9.6s ease-in-out";
		
		div1.addEventListener("webkitAnimationEnd", caro1go);
		div1.addEventListener("animationend", caro1go);
	}
	if(noListener){
		document.getElementById("headerGallery").addEventListener("mouseover", changeDontGo);
		noListener = false;
	}
}

function caro1go(){
	if(dontGo){setTimeout(caro1go, 1000)}
	else{
		div1.removeEventListener("webkitAnimationEnd", caro1go);
		div1.removeEventListener("animationend", caro1go);
		document.getElementById("headerGallery").style.webkitAnimation = "contentFadeOut 0.3s ease-in-out";
		div1.style.webkitAnimation = "goLeft 0.2s ease-in-out";
		div2.style.webkitAnimation = "goRight 0.2s ease-in-out";
		document.getElementById("headerGallery").style.animation = "contentFadeOut 0.3s ease-in-out";
		div1.style.animation = "goLeft 0.2s ease-in-out";
		div2.style.animation = "goRight 0.2s ease-in-out";
		
		div1.addEventListener("webkitAnimationEnd", caro1end);
		div1.addEventListener("animationend", caro1end);
	}
}

function caro1end(){
	div1.style.display = "none";
	div2.style.display = "none";
	div1.removeEventListener("webkitAnimationEnd", caro1end);
	div1.removeEventListener("animationend", caro1end);
	if(loadNext){
		caro2come();
	}else{
		window['caro'+i+'come']();
	}
}

function caro2come(){
	counter = 2;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	dontGo = false;
	div3.style.display = "inline-block";
	div4.style.display = "inline-block";
	document.getElementById("headerGallery").style.webkitAnimation = "contentFadeIn 0.3s ease-in-out";
	div3.style.webkitAnimation = "comeLeft 9.6s ease-in-out";
	div4.style.webkitAnimation = "comeRight 9.6s ease-in-out";
	document.getElementById("headerGallery").style.animation = "contentFadeIn 0.3s ease-in-out";
	div3.style.animation = "comeLeft 9.6s ease-in-out";
	div4.style.animation = "comeRight 9.6s ease-in-out";
	
	div3.addEventListener("webkitAnimationEnd", caro2go);
	div3.addEventListener("animationend", caro2go);
	if(noListener){
		document.getElementById("headerGallery").addEventListener("mouseover", changeDontGo);
		noListener = false;
	}
}

function caro2go(){
	if(dontGo){setTimeout(caro2go, 1000)}
	else{
		div3.removeEventListener("webkitAnimationEnd", caro2go);
		div3.removeEventListener("animationend", caro2go);
		document.getElementById("headerGallery").style.webkitAnimation = "contentFadeOut 0.3s ease-in-out";
		div3.style.webkitAnimation = "goLeft 0.2s ease-in-out";
		div4.style.webkitAnimation = "goRight 0.2s ease-in-out";
		document.getElementById("headerGallery").style.animation = "contentFadeOut 0.3s ease-in-out";
		div3.style.animation = "goLeft 0.2s ease-in-out";
		div4.style.animation = "goRight 0.2s ease-in-out";
		
		div3.addEventListener("webkitAnimationEnd", caro2end);
		div3.addEventListener("animationend", caro2end);
	}
}

function caro2end(){
	div3.style.display = "none";
	div4.style.display = "none";
	div3.removeEventListener("webkitAnimationEnd", caro2end);
	div3.removeEventListener("animationend", caro2end);
	if(loadNext){
		caro3come();
	}else{
		window['caro'+i+'come']();
	}
}

function caro3come(){
	counter = 3;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	dontGo = false;
	div5.style.display = "inline-block";
	div6.style.display = "inline-block";
	document.getElementById("headerGallery").style.webkitAnimation = "contentFadeIn 0.3s ease-in-out";
	div5.style.webkitAnimation = "comeLeft 9.6s ease-in-out";
	div6.style.webkitAnimation = "comeRight 9.6s ease-in-out";
	document.getElementById("headerGallery").style.animation = "contentFadeIn 0.3s ease-in-out";
	div5.style.animation = "comeLeft 9.6s ease-in-out";
	div6.style.animation = "comeRight 9.6s ease-in-out";
	
	div5.addEventListener("webkitAnimationEnd", caro3go);
	div5.addEventListener("animationend", caro3go);
	if(noListener){
		document.getElementById("headerGallery").addEventListener("mouseover", changeDontGo);
		noListener = false;
	}
}

function caro3go(){
	if(dontGo){setTimeout(caro3go, 1000)}
	else{
		div5.removeEventListener("webkitAnimationEnd", caro3go);
		div5.removeEventListener("animationend", caro3go);
		
		document.getElementById("headerGallery").style.webkitAnimation = "contentFadeOut 0.3s ease-in-out";
		div5.style.webkitAnimation = "goLeft 0.2s ease-in-out";
		div6.style.webkitAnimation = "goRight 0.2s ease-in-out";
		document.getElementById("headerGallery").style.animation = "contentFadeOut 0.3s ease-in-out";
		div5.style.animation = "goLeft 0.2s ease-in-out";
		div6.style.animation = "goRight 0.2s ease-in-out";
		
		div5.addEventListener("webkitAnimationEnd", caro3end);
		div5.addEventListener("animationend", caro3end);
	}
}

function caro3end(){
	div5.style.display = "none";
	div6.style.display = "none";
	div5.removeEventListener("webkitAnimationEnd", caro3end);
	div5.removeEventListener("animationend", caro3end);
	if(loadNext){
		caro4come();
	}else{
		window['caro'+i+'come']();
	}
}

function caro4come(){
	counter = 4;
	for(var i=0;i<navDots.length;i++){
		navDots[i].style.background = "rgba(0, 0, 0, 0.6)";
	}
	navDots[counter-1].style.background = "rgba(0, 0, 0, 1)";
	loadNext = true;
	dontGo = false;
	div7.style.display = "inline-block";
	div8.style.display = "inline-block";
	
	document.getElementById("headerGallery").style.webkitAnimation = "contentFadeIn 0.3s ease-in-out";
	div7.style.webkitAnimation = "comeLeft 9.6s ease-in-out";
	div8.style.webkitAnimation = "comeRight 9.6s ease-in-out";
	document.getElementById("headerGallery").style.animation = "contentFadeIn 0.3s ease-in-out";
	div7.style.animation = "comeLeft 9.6s ease-in-out";
	div8.style.animation = "comeRight 9.6s ease-in-out";
	
	div7.addEventListener("webkitAnimationEnd", caro4go);
	div7.addEventListener("animationend", caro4go);
	if(noListener){
		document.getElementById("headerGallery").addEventListener("mouseover", changeDontGo);
		noListener = false;
	}
}

function caro4go(){
	if(dontGo){setTimeout(caro4go, 1000)}
	else{
		div7.removeEventListener("webkitAnimationEnd", caro4go);
		div7.removeEventListener("animationend", caro4go);
		
		document.getElementById("headerGallery").style.webkitAnimation = "contentFadeOut 0.3s ease-in-out";
		div7.style.webkitAnimation = "goLeft 0.2s ease-in-out";
		div8.style.webkitAnimation = "goRight 0.2s ease-in-out";
		document.getElementById("headerGallery").style.animation = "contentFadeOut 0.3s ease-in-out";
		div7.style.animation = "goLeft 0.2s ease-in-out";
		div8.style.animation = "goRight 0.2s ease-in-out";
		
		div7.addEventListener("webkitAnimationEnd", caro4end);
		div7.addEventListener("animationend", caro4end);
	}
}

function caro4end(){
	div7.style.display = "none";
	div8.style.display = "none";
	div7.removeEventListener("webkitAnimationEnd", caro4end);
	div7.removeEventListener("animationend", caro4end);
	if(loadNext){
		caro1come();
	}else{
		window['caro'+i+'come']();
	}
}
