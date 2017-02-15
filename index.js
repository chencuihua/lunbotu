
//jquery出让 $ 符号的使用权限(也就是说,从这开始 $ 将不是jquery，只能用变量jquery)
jQuery.noConflict();

//zySlide()只要轮播图的跟标签(任何选择器)
jQuery('.slide').zySlide({speed:1000}).css({
	'background-color':'yellow'
});
jQuery('#slide').zySlide({delay:2000,speed:5000}).css({
	'border':'2px solid red',
	'background-color':'green'
});



