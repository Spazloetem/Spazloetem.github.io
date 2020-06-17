
	//123123123
	lastScrollY = 0;
	$(document).ready(function(){
		var menu = document.getElementById("header");
		var block1 = document.getElementById("block1");
		var block2 = document.getElementById("block2");
		var block3 = document.getElementById("block3");
		var block4 = document.getElementById("block4");
		var block5 = document.getElementById("block5");
		var block6 = document.getElementById("block6");
		var block7 = document.getElementById("block7");
		var block8 = document.getElementById("block8");
		var block9 = document.getElementById("block9");
		var subtext = document.getElementById("subtext");
		var Reright = document.getElementById("Reright");
		var Releft = document.getElementById("Releft");
		subtext.classList.add('bounceInright');
		$(window).scroll(function() {
			var st = this.scrollY;
			
			if (st > 0){
				block1.classList.add('bounceInUp');
			}
			if (st > 300){
				block2.classList.add('bounceInUp');
			}
			if (st > 500){
				block3.classList.add('bounceInUp');
				Releft.classList.add('beleft');
				Reright.classList.add('beright');
			}
			if (st > 700){
				block4.classList.add('bounceInUp');
			}
			if (st > 900){
				block5.classList.add('bounceInUp');
			}
			if (st > 1100){
				block6.classList.add('bounceInUp');
			}
			if (st > 1300){
				block7.classList.add('bounceInUp');
			}
			if (st > 1500){
				block8.classList.add('bounceInUp');
			}
			if (st > 1700){
				block9.classList.add('bounceInUp');
			}
			
			
			if( st > 0) {
				
				menu.classList.add('fixed');
				
			}else{
				
				menu.classList.remove('fixed');

			}
			lastScrollY = st;
			
		});
	});
	