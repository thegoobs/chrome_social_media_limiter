/*jslint browser: true*/
/*global $, jQuery, alert*/
'use strict';

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
