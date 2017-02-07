$(document).ready(function(){
    $("#next").click(function(){
       $(".box1").fadeOut();
       $(".box2").css("display","block");
       $(".box2").fadeIn();
    });
    $("#predict").click(function(){
       var name=$("#name").val();
       var sname=name.split(" ");
       var wname='Mrs. '+sname[sname.length-1]
     //  alert(wname)
       $(".box2").fadeOut();
       $(".box3").css("display","block");
       $(".box3").fadeIn();
       $(".think").animate({width:'90%'},4000,function(){
           $(".box3").fadeOut();
           $(".box4").fadeIn();
           $("#dname").text(wname)
           setTimeout(
           function()
              {
                $(".display").css("display","block");
             }, 2000)
         })
       
    });
});
