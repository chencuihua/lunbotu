
/*
 * 首页我们准备把代码这样改：
 * function slide(){
	把下面的所有代码黏贴过来
}
 * 
slide();
 * 
*/
/*
function slide(){
	//先规定好每张图片处于的位置和状态
var states = [
                {ZIndex:1,width:120,height:150,top:69,left:134,ZOpacity:0.2},
                {ZIndex:2,width:130,height:170,top:59,left:0,ZOpacity:0.5},
                {ZIndex:3,width:170,height:218,top:35,left:110,ZOpacity:0.7},
                {ZIndex:4,width:224,height:288,top:0,left:263,ZOpacity:1},
                {ZIndex:3,width:170,height:218,top:35,left:470,ZOpacity:0.7},
                {ZIndex:2,width:130,height:170,top:59,left:620,ZOpacity:0.5},
                {ZIndex:1,width:120,height:150,top:69,left:500,ZOpacity:0.2}
            ];

var lis = $('#box li');
//让每个 li 对应上面 states 的每一个状态
function move(){
	lis.each(function(index,ele){
		var state = states[index];
		$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
	});
}
//让 li 从正中间展开
move();

//点击下一张，让轮播图发生偏移
function next(){
	//原理:把数组最后一个元素移到数组第一位(以下等价)
//	var obj = states.pop();  //删除最后一个元素并返回
//	states.unshift(obj);     //将获得的元素插到最前面
	states.unshift(states.pop());
	move();
}

//点击上一张，让轮播图发生偏移
function prev(){
	//原理:把数组第一个元素移到数组最后一位(以下等价)
//	var obj = states.shift();  //删除第一个元素并返回
//	states.push(obj);     //将获得的元素插到最后面
	states.push(states.shift());
	move();
}

//点击下一张
$('#box .next').click(function(){
	next();
});

//点击上一张
$('#box .prev').click(function(){
	prev();
});

//自动播放
var interval = null;
function autoplay(){
interval=setInterval(function(){
	next();
},2000);
}
autoplay();
//鼠标悬停停止轮播
$('#box li').add('#box section').hover(function(){
	clearInterval(interval);
},function(){
	autoplay();
});
}
//调用全局变量
slide();
*/

/*
 * 变量的作用域:
 * 1.全局域[Window]              2.函数域名(function 域)      3.block 域
 * 全局域:从页面被打开之后到页面被关闭之前始终存在的
 * 函数域:存在于函数调用的一瞬间(也不一定,考虑下闭包的存在)
 * 
 * 闭包的理解:
 * 闭包的作用:可以保留函数的作用域(要不然闭包里面的函数 move 就不能使用slide 函数域里面的变量:states/lis等)
 * 闭包产生的必要条件:函数里面套函数(内层函数要使用外层函数作用域里面的变量)
 * 
 * 全局变量会产生闭包吗？
 * 不会。因为全局变量存在全局域里。
 * 
 */

//自运行的匿名函数
/*
(function(){
	alert('自运行的匿名函数');
})();

$(function(){
	alert('自运行的匿名函数');
})
*/
(function(){
	var states = [
                {ZIndex:1,width:120,height:150,top:69,left:134,ZOpacity:0.2},
                {ZIndex:2,width:130,height:170,top:59,left:0,ZOpacity:0.5},
                {ZIndex:3,width:170,height:218,top:35,left:110,ZOpacity:0.7},
                {ZIndex:4,width:224,height:288,top:0,left:263,ZOpacity:1},
                {ZIndex:3,width:170,height:218,top:35,left:470,ZOpacity:0.7},
                {ZIndex:2,width:130,height:170,top:59,left:620,ZOpacity:0.5},
                {ZIndex:1,width:120,height:150,top:69,left:500,ZOpacity:0.2}
            ];

var lis = $('#box li');
//让每个 li 对应上面 states 的每一个状态
function move(){
	lis.each(function(index,ele){
		var state = states[index];
		$(ele).css('z-index',state.ZIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpacity);
	});
}
//让 li 从正中间展开
move();

//点击下一张，让轮播图发生偏移
function next(){
	//原理:把数组最后一个元素移到数组第一位(以下等价)
//	var obj = states.pop();  //删除最后一个元素并返回
//	states.unshift(obj);     //将获得的元素插到最前面
	states.unshift(states.pop());
	move();
}

//点击上一张，让轮播图发生偏移
function prev(){
	//原理:把数组第一个元素移到数组最后一位(以下等价)
//	var obj = states.shift();  //删除第一个元素并返回
//	states.push(obj);     //将获得的元素插到最后面
	states.push(states.shift());
	move();
}

//点击下一张
$('#box .next').click(function(){
	next();
});

//点击上一张
$('#box .prev').click(function(){
	prev();
});

//自动播放
var interval = null;
function autoplay(){
interval=setInterval(function(){
	next();
},2000);
}
autoplay();
//鼠标悬停停止轮播
$('#box li').add('#box section').hover(function(){
	clearInterval(interval);
},function(){
	autoplay();
});

})()


 /* 
  轮播图能封装成插件吗？会产生什么问题？
1.插件中最好不要使用 id ,原因:插件是能够被重复使用的,也就是说在同一个页面中可能多次使用,造成冲突
2.变量的命名和方法的命名:states/interval/move()/next(),用户在使用这个插件的时候,可能还会引起
  自己创建的js文件,也有这样的命名,那么就产生冲突了
3.标签 class 的值的问题:prev/next,这些class太大众化了,谁写标签都想命名为 prev 或者 next,势必会冲突
4.插件文件名命名问题:index.js/index.css,命名大众化,比如这样修改:jQuery.ZYSlide.js
5.
*/