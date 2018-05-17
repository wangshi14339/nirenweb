function option(clicks,dispaly){
    console.log(clicks, dispaly);
    clicks.on("click",function(){
        var index=$(this).index();
        console.log(index);
        $(this).addClass("active").siblings().removeClass("active");
        dispaly.eq(index).addClass("active").siblings().removeClass("active");
    })
}