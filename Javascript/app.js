var $cards = $(".card");
var $style = $(".hover");
$cards.on("mousemove", function(e) {
var $card = $(this);
var l = e.offsetX;
var t = e.offsetY;
var h = $card.height();
var w = $card.width();
var lp = Math.abs(Math.floor(100 / w * l)-100);
var tp = Math.abs(Math.floor(100 / h * t)-100);
var bg = `background-position: ${lp}% ${tp}%;`
var style = `.card.active:before { ${bg} }`
    $cards.removeClass("active");
    $card.addClass("active");
    $style.html(style);
    }).on("mouseout", function() {
        $cards.removeClass("active");
});

var cw=$(window).width();
var ch=$(window).height();
$(document).mousemove(function(d){
var a=Math.round(100/cw*d.pageX),g3=a-100,g2=a-60,g1=a-20,d1=a+20,d2=a+60,d3=a+100;
var b=85 ;
    $(".gradient").css({background:"-moz-linear-gradient(left, hsl(139,100%,"+b+"%) "+g3+"%, hsl(47,100%,"+b+"%) "+g2+"%, hsl(16,100%,"+b+"%) "+g1+"%, hsl(267,100%,88%) "+d1+"%, hsl(204,100%,"+b+"%) "+d2+"%, hsl(126,100%,"+b+"%) "+d3+"%)"}),
    $(".gradient").css({background:"-webkit-linear-gradient(left, hsl(139,100%,"+b+"%) "+g3+"%, hsl(47,100%,"+b+"%) "+g2+"%, hsl(16,100%,"+b+"%) "+g1+"%, hsl(267,100%,88%) "+d1+"%, hsl(204,100%,"+b+"%) "+d2+"%, hsl(126,100%,"+b+"%) "+d3+"%)"}),
    $(".gradient").css({background:"linear-gradient(to right, hsl(139,100%,"+b+"%) "+g3+"%, hsl(47,100%,"+b+"%) "+g2+"%, hsl(16,100%,"+b+"%) "+g1+"%, hsl(267,100%,88%) "+d1+"%, hsl(204,100%,"+b+"%) "+d2+"%, hsl(126,100%,"+b+"%) "+d3+"%)"}),
    $(".gradient").css({color:"transparent"}),
    $(".gradient").css({'background-clip':"text"}),
    $(".gradient").css({'-webkit-background-clip':"text"})
});
