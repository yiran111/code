function $(id) {
	return document.getElementById(id);
}

function bind(elem, en, fn) {
	if (elem.addEventListener) {
		elem.addEventListener(en, fn);
	} else {
		elem.attachEvent('on' + en, fn);
	}
}

function unbind(elem, en, fn) {
	if (elem.removeEventListener) {
		elem.removeEventListener(en, fn);
	} else {
		elem.detachEvent('on' + en, fn);
	}
}

//将非数字全部换成空字符
function handleInput(srt){
	return str.replace(/\D/g,'');
	
}



function preventDefault(evt){
	if(evt.preventDefault){
		evt.preventDefault;
	}else{
		evt.returnValue = false;
	}
}

