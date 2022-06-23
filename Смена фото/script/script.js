image.onclick  = function(e){
	var el = e ? e.target : window.event.srcElement;
	el.style.transform = 'rotate(-90deg)';
  }