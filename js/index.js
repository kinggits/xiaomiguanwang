$('.nav .left li a').hover(function () {
    $('.nav .left li a').css({"color":"#9E998F"})
    $(this).css({"color":"white"})
})


$('.xiao1 li').hover(function () {
    $('.con').show();
    $('.con').eq($(this).index()).hide()
},function () {
    $('.con').hide();
});

$('.con').hover(function () {
    $('.con').show();
},function () {
    $('.con').hide();
});


$(".lun ul li").hover(function () {
    $(".con2").hide();
    $(".con2").eq($(this).index()).show();
},function () {
    $(".con2").hide();
});

$(".con2").hover(function () {
    $(".con2").show();
},function () {
    $(".con2").hide();
});




