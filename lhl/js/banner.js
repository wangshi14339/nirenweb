
var num=0;
var flag=true;
$(".banner-dian>li").on("click",function(){
    var index=$(this).index();
    console.log(index);
    $(this).addClass("active").siblings().removeClass("active");
    $(".banner-imgs>li").eq(index).addClass("active").siblings().removeClass("active");
    num=index;
})
function move(){
    num++;
    if(num>=$(".banner-dian>li").length){
        num=0;
    }
    if(num<0){
        num=$(".banner-dian>li").length-1;
    }
    $(".banner-dian>li").eq(num).addClass("active").siblings().removeClass("active");
    $(".banner-imgs>li").eq(num).addClass("active").siblings().removeClass("active");
}
var st=setInterval(move,5000);

$(".banner-box").hover(function(){
    clearInterval(st);
},
    function(){
    st=setInterval(move,5000);
});
$(".left").on("click",function(){
    if(flag){
        num-=2;
        move();
        flag=false;
        setTimeout(function(){flag=true},1000);
    }

})
$(".right").on("click",function(){
    if(flag){
        move();
        flag=false;
        setTimeout(function(){flag=true},1000);
    }

})
