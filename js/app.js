document.addEventListener("DOMContentLoaded", function () {
	const letter = document.querySelectorAll('.letter');
	const canvasSkills = document.querySelector('#canvas__skills');
	const navLinks = document.querySelector('.nav__links');
	const navSocials = document.querySelector('.nav__socials');
	const burger = document.querySelector('.burger');
	const formHalf = document.querySelectorAll('.contact__form-half');
	const formArea = document.querySelector('.contact__form-area');
	const reqBtn = document.querySelector('.request-btn');
	const form = document.querySelector('#form');

	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert('Error');
			}
		} else {
			alert('Fill all inputs');
			form.classList.remove('_sending');
		}
	}

	function formValidate() {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(input.value);
	}







	if (reqBtn) {
		reqBtn.classList.add('fadeIn', 'animated');
	}

	if (formHalf) {
		formHalf.forEach(form => {
			form.classList.add('fadeIn', 'animated');
		})	
	}

	if (formArea) {
		formArea.classList.add('fadeIn', 'animated');
	}

	burger.addEventListener('click', (e) => {
		navLinks.classList.toggle('show__links');
		navSocials.classList.toggle('show__socials');
	});

	// active class
	// let lists = document.querySelectorAll('.nav__links-list');
	// let links = document.querySelectorAll('.nav__links-item');



// 	links.forEach(link => {
// 		link.addEventListener('click', function() {
// 				links.forEach(l => l.classList.remove('active'));
// 				this.classList.add('active');
// 		});
// });

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



	const canvas = document.getElementById('canvas');

	if (canvas) {
		const c = canvas.getContext('2d');

		c.strokeStyle = '#e3e3e3';
		//Declare vars t:time, i:eased function of time, steps:num of steps per revolution
		let t = 0;
		let i = 0;
		let steps = 200;
		function refresh() {
			if (t % steps === 0 && t != 0) {
				t = 0;
			}
			let x = 0;
			let y = 0;

			let n = 0;
			let m = 0;

			let q = 0;
			let w = 0;

			let e = 0;
			let z = 0;

			//easing function on time using cosine wave
			let i = -(Math.cos(Math.PI / steps * t) + 1) / 2;

			//get value between 0 and 2 Pi proportional to i
			i *= Math.PI * 2;
			//define values for point using wavey waves
			x = Math.sin(i) * 100;
			y = Math.cos(i) * 100;

			n = -Math.sin(i) * 100;
			m = -Math.cos(i) * 100;

			q = Math.sin(-i) * 100;
			w = Math.cos(-i) * 100;

			e = -Math.sin(-i) * 100;
			z = -Math.cos(-i) * 100;

			//centre the point
			x += 150;
			y += 250;

			n += 150;
			m += 250;

			q += 350;
			w += 250;

			e += 350;
			z += 250;

			//clear current thing with a bit of a motion blur
			c.clearRect(0, 0, 500, 500);
			c.fillStyle = 'white';

			//draw circle
			c.beginPath();

			c.arc(150, 250, 100, 0, Math.PI * 2);
			c.stroke();

			c.beginPath();

			c.arc(350, 250, 100, 0, Math.PI * 2);
			c.stroke();

			//draw point
			c.beginPath();
			c.arc(x, y, 8, 0, Math.PI * 2);
			c.fill();

			c.beginPath();
			c.arc(n, m, 8, 0, Math.PI * 2);
			c.fill();

			c.beginPath();
			c.arc(q, w, 8, 0, Math.PI * 2);
			c.fill();

			c.beginPath();
			c.arc(e, z, 8, 0, Math.PI * 2);
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
