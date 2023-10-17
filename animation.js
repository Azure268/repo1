$(document).ready(function(){
  $('#search').focus(function(){
    $('#searchbackground').addClass('blur');
  }).blur(function(){
    $('#searchbackground').removeClass('blur');
  });
});



function jumpPage(searchValue) {
  window.location.href="http://www.baidu.com/s?ie=UTF-8&wd="+searchValue;
}
// 按Enter键,执行事件
function entersearch(event){
    if (event.keyCode == 13)
    {
        to();
    }
}
// 按钮点击触发函数
function to(){
  var searchValue = document.getElementById("search").value;
  jumpPage(searchValue);

}


// //点击改变图片zindex
// $(function(){
//   $(".img1-1").click(function(){
//       $(this).removeClass("img1-1");
//       $(this).addClass("img1-1c");
//       $(this).siblings().removeClass("img1-1c");
//       $(this).siblings().addClass("img1-1");
//   });
// });

function picture_click1(){
  var pc1=document.getElementById("img1-1")
  var pc2=document.getElementById("img1-2")
  var pc3=document.getElementById("img1-3")
  var pc4=document.getElementById("img1-4")
  var pc5=document.getElementById("img1-5")
  pc1.style.zIndex =3
  pc2.style.zIndex =2
  pc3.style.zIndex =1
  pc4.style.zIndex =1
  pc5.style.zIndex =2
  
}
function picture_click2(){
  var pc1=document.getElementById("img1-1")
  var pc2=document.getElementById("img1-2")
  var pc3=document.getElementById("img1-3")
  var pc4=document.getElementById("img1-4")
  var pc5=document.getElementById("img1-5")
  pc2.style.zIndex =3
  pc1.style.zIndex =2
  pc3.style.zIndex =1
  pc4.style.zIndex =1
  pc5.style.zIndex =2
}
function picture_click3(){
  var pc1=document.getElementById("img1-1")
  var pc2=document.getElementById("img1-2")
  var pc3=document.getElementById("img1-3")
  var pc4=document.getElementById("img1-4")
  var pc5=document.getElementById("img1-5")
  pc3.style.zIndex =3
  pc2.style.zIndex =2
  pc1.style.zIndex =2
  pc4.style.zIndex =1
  pc5.style.zIndex =2
}
function picture_click4(){
  var pc1=document.getElementById("img1-1")
  var pc2=document.getElementById("img1-2")
  var pc3=document.getElementById("img1-3")
  var pc4=document.getElementById("img1-4")
  var pc5=document.getElementById("img1-5")
  pc4.style.zIndex =3
  pc2.style.zIndex =2
  pc3.style.zIndex =1
  pc1.style.zIndex =2
  pc5.style.zIndex =2
}
function picture_click5(){
  var pc1=document.getElementById("img1-1")
  var pc2=document.getElementById("img1-2")
  var pc3=document.getElementById("img1-3")
  var pc4=document.getElementById("img1-4")
  var pc5=document.getElementById("img1-5")
  pc5.style.zIndex =3
  pc2.style.zIndex =2
  pc3.style.zIndex =1
  pc4.style.zIndex =1
  pc1.style.zIndex =2
}



