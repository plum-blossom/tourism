/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-30 16:35:39
 * @version $Id$
 */
 /*轮播图*/
 var posterTvGrid = new posterTvGrid('posterTvGrid',{className: "posterTvGrid"},[
      {"img":"images\/01.jpg","title":"Lorem ipsum dolor sit amet","url":"http:\/\/www.htmleaf.com\/"},
      {"img":"images\/02.jpg","title":"Lorem ipsum dolor sit amet","url":"http:\/\/www.htmleaf.com\/"},
      {"img":"images\/03.jpg","title":"Lorem ipsum dolor sit amet","url":"http:\/\/www.htmleaf.com\/"},
      {"img":"images\/04.jpg","title":"Lorem ipsum dolor sit amet","url":"http:\/\/www.htmleaf.com\/"},
      {"img":"images\/05.jpg","title":"Lorem ipsum dolor sit amet","url":"http:\/\/www.htmleaf.com\/"},
      
    ]
  );
/*主体内容*/
/*选项卡*/
//封装函数
function tab(a,b){
	$(a).on('click','a',function(e){
		e.preventDefault();
		var name = '.'+$(this).data(b);
		$(name).show().siblings().hide();
	});
}
//调用选项卡函数
tab('.nav','tab');
// 美食轮播
//旅游瀑布流
// $(function(){
//   $("img.lazy").lazyload({    
//     load:function(){
//       $('#container').BlocksIt({
//         numOfCol:5,
//         offsetX: 8,
//         offsetY: 8
//       });
//     }
//   }); 
//   $(window).scroll(function(){
//       // 当滚动到最底部以上50像素时， 加载新内容
//     if ($(document).height() - $(this).scrollTop() - $(this).height()<50){
//       $('#container').append($("#test").html());    
//       $('#container').BlocksIt({
//         numOfCol:5,
//         offsetX: 8,
//         offsetY: 8
//       });
//       $("img.lazy").lazyload();
//     }
//   });
  
//   //window resize
//   var currentWidth = 1100;
//   $(window).resize(function() {
//     var winWidth = $(window).width();
//     var conWidth;
//     if(winWidth < 660) {
//       conWidth = 440;
//       col = 2
//     } else if(winWidth < 880) {
//       conWidth = 660;
//       col = 3
//     } else if(winWidth < 1100) {
//       conWidth = 880;
//       col = 4;
//     } else {
//       conWidth = 1100;
//       col = 5;
//     }
    
//     if(conWidth != currentWidth) {
//       currentWidth = conWidth;
//       $('#container').width(conWidth);
//       $('#container').BlocksIt({
//         numOfCol: col,
//         offsetX: 8,
//         offsetY: 8
//       });
//     }
//   });
// });