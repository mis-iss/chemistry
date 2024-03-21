$(document).ready(function () {
	
	//ScrollMagic controller init
	let controller = new ScrollMagic.Controller();

	let pinHeaderScene = new ScrollMagic.Scene({
		triggerElement: '.header',
		triggerHook: 0,
		duration: '35%'
	})
	.setPin(".header", {pushFollowers: false})
	.addTo(controller)

	let pinHeaderScene2 = new ScrollMagic.Scene({
		triggerElement: '.project1',
		triggerHook: 0.3,
	})
	.setPin(".header", {pushFollowers: false})
	.addTo(controller)

	$('.project').each(function () {
		let secondPinScene = new ScrollMagic.Scene({
			triggerElement : this,
			triggerHook: 0,
			duration: "200%"
		})
		.setPin(this, {pushFollowers: false})
		.addTo(controller);
	});
});