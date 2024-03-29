// function onepagescroll(selector, options) {
// 	var pages = [];
// 	var currentPage = 1;
// 	var isPageChanging = false;
// 	var keyUp = {38:1,33:1};
// 	var keyDown = {40:1,34:1};
	
// 	var def = {
// 		pageContainer: 'section',
// 		animationType: 'ease-in-out',
// 		animationTime: 500,
// 		infinite: true,
// 		pagination: true,
// 		keyboard: true,
// 		direction: 'vertical',
// 	};

// 	var setting = extend({},def,options);

// 	/* initialization */
// 	function init(){

// 		window.addEventListener('wheel',onScrollEventHandler);

// 		css(document.querySelector(selector),{
// 			transition: 'transform ' + setting.animationTime + 'ms ' + setting.animationType
// 		});
		
// 		//allow keyboard input
// 		if(setting.keyboard){
// 			addEventListener('keydown', function(e){
// 				if(keyUp[e.keyCode])
// 					changePage(1,pages.length,-1);
// 				else if(keyDown[e.keyCode])
// 					changePage(pages.length,1,1);
// 			});
// 		}

// 		document.querySelector(selector).classList.add('ops-container');
		
// 		detectTransitionEnd() && document.querySelector(selector).addEventListener(detectTransitionEnd(), function(){
// 			isPageChanging = false;
// 		});

// 		var bullet_list_container = null;
// 		/* create navigation bullets */
// 		if(setting.pagination){
// 			bullet_list_container = document.createElement("ul");
// 			bullet_list_container.classList.add('ops-navigation');
// 		}
		
// 		var index=1;
// 		[].forEach.call(document.querySelectorAll(selector + ' > ' + setting.pageContainer), function(obj){
// 			if(setting.pagination){
// 				var bullet_list = document.createElement('li');
// 				var bullet = document.createElement('a');
// 				bullet.setAttribute('data-targetindex',index);
// 				bullet.href='#';
// 				bullet_list.appendChild(bullet);
// 				bullet_list_container.appendChild(bullet_list);	
// 			}

// 			obj.classList.add('ops-page');
			
// 			if(setting.direction == 'horizontal'){
// 				css(obj,{
// 					left:(index-1)*100 + '%',
// 					position:'absolute'
// 				});
// 			}

// 			pages.push(obj);
// 			obj.setAttribute('data-pageindex',index++);
// 		});

// 		if(setting.pagination){
// 			document.body.appendChild(bullet_list_container);
// 			document.querySelector('a[data-targetindex="' + currentPage +'"]').classList.add('active');
// 		}

		
// 	}

// 	/* wheel event handler */
// 	function onScrollEventHandler(e){
//         if(e.wheelDelta > 0)
//         	changePage(1,pages.length,-1);
//         else
//         	changePage(pages.length,1,1);
// 	}

// 	/* dected transitions completion for block duplicated scrolling */
// 	function detectTransitionEnd(){
// 	    var t;
// 	    var el = document.createElement('fakeelement');
// 	    var transitions = {
// 	      'transition':'transitionend',
// 	      'OTransition':'oTransitionEnd',
// 	      'MozTransition':'transitionend',
// 	      'WebkitTransition':'webkitTransitionEnd'
// 	    }

// 	    for(t in transitions)
// 	        if( el.style[t] !== undefined )
// 	            return transitions[t];
// 	    return true;
// 	}


// 	/* css setter */
// 	function css(obj,styles){
// 		for (var _style in styles)
// 			if(obj.style[_style] !== undefined)
// 				obj.style[_style] = styles[_style];
		
// 	}

// 	/* extend function for user customization */
// 	function extend(){
// 	    for(var i=1; i<arguments.length; i++)
// 	        for(var key in arguments[i])
// 	            if(arguments[i].hasOwnProperty(key))
// 	                arguments[0][key] = arguments[i][key];
// 	    return arguments[0];
// 	}

// 	//function for page transition
// 	function changePage(compare,edge,increase){
// 		if(isPageChanging) return;

// 		if(currentPage==compare){
// 			if(setting.infinite)
// 				currentPage = edge;
// 			else
// 				return;
// 		}
// 		else{
// 			currentPage+=increase;
// 		}

// 		if(setting.animationTime) isPageChanging = true;
	
// 		if(setting.pagination){
// 			document.querySelector('a.active[data-targetindex]').classList.remove('active');
// 			document.querySelector('a[data-targetindex="' + currentPage +'"]').classList.add('active');
// 		}
// 		if(setting.direction == 'vertical'){
// 			css(document.querySelector(selector),{
// 				transform:'translate3d(0,' + -(currentPage-1)*100 + '%,0)'
// 			});
// 		}
// 		else if(setting.direction == 'horizontal'){
// 			css(document.querySelector(selector),{
// 				transform:'translate3d(' + -(currentPage-1)*100 + '%,0,0)'
// 			});	
// 		}
// 	}

// 	/* swipe */
// 	var fpos = 0;
// 	var lpos = 0;
// 	var _n = 90;

// 	//bind touch
// 	document.addEventListener('touchstart', function(e) {
// 		e.preventDefault();
// 		if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
// 		var touch = e.touches[0] || e.changedTouches[0];
// 			if(setting.direction == 'vertical')
// 				fpos = touch.pageY;
// 			else if(setting.direction == 'horizontal')
// 				fpos = touch.pageX;
// 		}
// 	});

// 	document.addEventListener('touchend', function(e) {
// 		e.preventDefault();

// 		if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
// 			var touch = e.touches[0] || e.changedTouches[0];
// 			if(setting.direction == 'vertical')
// 				lpos = touch.pageY;
// 			else if(setting.direction == 'horizontal')
// 				lpos = touch.pageX;
// 		}
// 		if(fpos + _n < lpos)
// 			changePage(1,pages.length,-1);
// 		else if(fpos > lpos + _n)
// 			changePage(pages.length,1,1);
// 	});


// 	/* check documents ready statement and do init() */
// 	if(document.readyState === 'complete')
// 		init();
// 	else
// 		window.addEventListener('onload', init(), false);
	
// }



// onepagescroll('div.pages');

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 7000); // Change image every 7 seconds
}

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);


