$(".menujs").attr("on","");
var flag=true;
$(".menujs").on("click",function(){
    if(flag){
        flag=false;
        if($(this).attr("on")==""){
            $(".header-list").animate({"left":0},1000);
            $(this).attr("on",1);
            setTimeout(function(){flag=true},1000);
        }else{
            $(".header-list").animate({"left":"-190px"},1000);
            $(this).attr("on","");
            setTimeout(function(){flag=true},1000);
        }
    }


})