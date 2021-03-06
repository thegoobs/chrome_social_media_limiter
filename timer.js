/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

/*mode: 0 = not running, 1 = running*/
var mode = 0;
var interval = 0;

function animations() {
	if (mode === 0) {
		$(".controls").animate({
			height: 'toggle'
		}, 500);
		$("#begin").animate({
			right: '-200px'
		}, 500);
		$("#clear").animate({
			left: '-200px'
		}, 500);
	} else {
		$(".controls").animate({
			height: 'toggle'
		}, 500);
		$("#begin").animate({
			right: '0px'
		}, 500);
		$("#clear").animate({
			left: '0px'
		}, 500);
		
	}
}

function getTime() {
	/*convert each time string into seconds*/
	var h = Number($("#hour_num").text()) * 3600,
		m = Number($("#min_num").text()) * 60,
		s = Number($("#sec_num").text());
	return h + m + s;
}

function timer() {
	var t = getTime(); /*gets current time*/
	if (t > 0) {
		t = t - 1; /*decrement the time by a second*/
		/*update the numbers on the screen*/
		$("#hour_num").text(('0' + String(Math.floor(t / 3600))).slice(-2));
		$("#min_num").text(('0' + String(Math.floor(t / 60))).slice(-2));
		$("#sec_num").text(('0' + String(Math.floor(t % 60))).slice(-2));
	} else {
		clearInterval(interval);
		interval = 0;
		animations();
		mode = 0;
	}
}

/*activate on begin button click*/
$("#begin").click(function () {
	if (mode === 0) {
		animations();
		mode = 1; /*clock is running*/
		interval = setInterval(timer, 1000);
	}
});