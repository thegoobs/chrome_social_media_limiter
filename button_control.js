/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

/*hover*/
$("#hours_up").hover(function () {
	$("#hour_num").animate({"color": "#5DA9E9"}, 150);
}, function () {
	$("#hour_num").animate({"color": "#011627"}, 150);
});

$("#hours_down").hover(function () {
	$("#hour_num").animate({"color": "#982649"}, 150);
}, function () {
	$("#hour_num").animate({"color": "#011627"}, 150);
});

$("#min_up").hover(function () {
	$("#min_num").animate({"color": "#5DA9E9"}, 150);
}, function () {
	$("#min_num").animate({"color": "#011627"}, 150);
});

$("#min_down").hover(function () {
	$("#min_num").animate({"color": "#982649"}, 150);
}, function () {
	$("#min_num").animate({"color": "#011627"}, 150);
});

$("#sec_up").hover(function () {
	$("#sec_num").animate({"color": "#5DA9E9"}, 150);
}, function () {
	$("#sec_num").animate({"color": "#011627"}, 150);
});

$("#sec_down").hover(function () {
	$("#sec_num").animate({"color": "#982649"}, 150);
}, function () {
	$("#sec_num").animate({"color": "#011627"}, 150);
});


/*manipulate time on popup*/
var num = 0;
$("#hours_up").click(function () {
	num = $("#hour_num").text();
	num = Number(num);
	num = num + 1;
	$("#hour_num").text(num >= 10 ? String(num) : '0' + String(num));
});
$("#hours_down").click(function () {
	num = $("#hour_num").text();
	num = Number(num);
	num = num - 1;
	if (num <= 0) {
		num = 0;
	}
	$("#hour_num").text(num >= 10 ? String(num) : '0' + String(num));
});

$("#min_up").click(function () {
	num = $("#min_num").text();
	num = Number(num);
	num = num + 10;
	$("#min_num").text(num >= 10 ? String(num) : '0' + String(num));
});
$("#min_down").click(function () {
	num = $("#min_num").text();
	num = Number(num);
	num = num - 10;
	if (num <= 0) {
		num = 0;
	}
	$("#min_num").text(num >= 10 ? String(num) : '0' + String(num));
});

$("#sec_up").click(function () {
	num = $("#sec_num").text();
	num = Number(num);
	num = num + 10;
	$("#sec_num").text(num >= 10 ? String(num) : '0' + String(num));
});
$("#sec_down").click(function () {
	num = $("#sec_num").text();
	num = Number(num);
	num = num - 10;
	if (num <= 0) {
		num = 0;
	}
	$("#sec_num").text(num >= 10 ? String(num) : '0' + String(num));
});


/*clear the timer on click*/
$("#clear").click(function () {
	$("#hour_num").text('00');
	$("#min_num").text('00');
	$("#sec_num").text('00');
	num = 0;
});