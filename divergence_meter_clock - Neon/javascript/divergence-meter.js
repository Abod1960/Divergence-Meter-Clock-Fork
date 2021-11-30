$(function() {
	setInterval("ElyPsyCongroo()", 500);
})

function ElyPsyCongroo() {
	var sources = {
		dotl : "image/dotl.jpg",
		dotr : "image/dotr.jpg",
		zero : "image/0.jpg",
		one : "image/1.jpg",
		two : "image/2.jpg",
		three : "image/3.jpg",
		four : "image/4.jpg",
		five : "image/5.jpg",
		six : "image/6.jpg",
		seven : "image/7.jpg",
		eight : "image/8.jpg",
		nine : "image/9.jpg"
	};	

	loadImages(sources, function(images){
		$('#myDiv div').each(function(i){
			var timeStr = time();
		
			if(timeStr[i] == 0){
				$(this).css("background-image", "url(" + sources.zero + ")");
			}else if(timeStr[i] == 1){
				$(this).css("background-image", "url(" + sources.one + ")");
			}else if(timeStr[i] == 2){
				$(this).css("background-image", "url(" + sources.two + ")");
			}else if(timeStr[i] == 3){
				$(this).css("background-image", "url(" + sources.three + ")");
			}else if(timeStr[i] == 4){
				$(this).css("background-image", "url(" + sources.four + ")");
			}else if(timeStr[i] == 5){
				$(this).css("background-image", "url(" + sources.five + ")");
			}else if(timeStr[i] == 6){
				$(this).css("background-image", "url(" + sources.six + ")");
			}else if(timeStr[i] == 7){
				$(this).css("background-image", "url(" + sources.seven + ")");
			}else if(timeStr[i] == 8){
				$(this).css("background-image", "url(" + sources.eight + ")");
			}else if(timeStr[i] == 9){
				$(this).css("background-image", "url(" + sources.nine + ")");
			}else if(timeStr[i] == ":"){
				if(isLeftOrRight(timeStr[7])) {
					$(this).css("background-image", "url("+ sources.dotl +")");
				} else {
					$(this).css("background-image", "url("+ sources.dotr +")");
				}
			}
							
		})
	  
	});
}

function isLeftOrRight(second){
	if(second % 2 == 0) {
		return true;
	}
	else {
		return false;
	}
}
	
function loadImages(sources, callback){
    var count = 0,
        images ={},
        imgNum = 12;
	
    for(src in sources){
        images[src] = new Image();
        images[src].onload = function(){
            if(++count >= imgNum){
                callback(images);
            }
        }
        images[src].src = sources[src];
    }
}

function time() {
    var date = new Date();
	var hour,minutes,second,timeStr;
	
	if(date.getHours() < 10) {
		hour =  "0" + date.getHours();
	}
	else {
		hour = date.getHours(); //hour
	}
	if(date.getMinutes() < 10) {
		minutes =  "0" + date.getMinutes();
	}
	else {
		minutes = date.getMinutes(); //minute
	}
	if(date.getSeconds() < 10) {
		second =  "0" + date.getSeconds();
	}
	else {
		second = date.getSeconds(); //second
	}
	
	timeStr = hour+":"+minutes+":"+second;  
	
    return timeStr;
}