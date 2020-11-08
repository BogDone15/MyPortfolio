document.addEventListener("DOMContentLoaded", function (event) {
	const letter = document.querySelectorAll('.letter');
	const canvasSkills = document.querySelector('#canvas__skills')

	letter.forEach((el, i) => {
		setTimeout(() => {
			el.classList.add('show');
		}, (i + 1) * 75);
	});

	letter.forEach(item => {
		item.addEventListener('mouseover', function () {
			item.classList.add('animText');
			item.classList.add('animated');

			setTimeout(() => {
				item.classList.remove('animText');
				item.classList.remove('animated');
			}, 1000);
		})
	});

		let canvas = document.getElementById('canvas');

		if (canvas) {
			let c      = canvas.getContext('2d');

		c.fillStyle = 'black';
		c.strokeStyle = '#e3e3e3';
	//Declare vars t:time, i:eased function of time, steps:num of steps per revolution
		let t      = 0;
		let i      = 0;
		let steps  = 200;
		function refresh(){
			if(t%steps === 0 && t!=0){
				t = 0;
			}
			let x = 0;
			let y = 0;

	    //easing function on time using cosine wave
			let i = -(Math.cos(Math.PI/steps*t)+1)/2;

	    //get value between 0 and 2 Pi proportional to i
			i *= Math.PI*2;
	    //define x and y values for point using wavey waves
			x = Math.sin(i)*100;
			y = -Math.cos(i)*100;

	    //centre the point
			x += 250;
			y += 250;

	    //clear current thing with a bit of a motion blur
		   c.clearRect(0,0,500,500);
	    c.fillStyle = 'rgba(25,25,25, 0.5)';
	    // c.fillRect(0,0,500,500);
	    c.fillStyle = 'white';

	    //draw circle
			c.beginPath();
			c.arc(250,250,100,0,Math.PI*2);
			c.stroke();

	    //draw point
			c.beginPath();
			c.arc(x,y,10,0,Math.PI*2);
			c.fill();

			t += 1;
		}
		window.setInterval(refresh, 20);
		}
		
	if (canvasSkills) {
		try {
			TagCanvas.Start('canvas__skills', 'tags', {
				textColour: '#ffffff',
				outlineColour: 'transparent',
				reverse: true,
				noSelect: true,
				initial: [0.2, -0.1],
				depth: 0.8,
				maxSpeed: 0.05,
				shuffleTags: true
			});
		} catch (e) {
			document.getElementById('myCanvasContainer').style.display = 'none';
		}
	}
});
