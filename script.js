$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");

        }
    });

    //theme color
    $('.theme').click(function(){
        $('.big-box').toggleClass("show");
    });

    

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.navbar i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["Java Coder", "Web Developer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-2",{
        strings: ["Java Coder", "Web Developer"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true,
    });


    //owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
var c = document.querySelector(':root');
function color1() {
    c.style.setProperty('--main--color', 'crimson');
}
function color2() {
    c.style.setProperty('--main--color', 'violet');
}
function color3() {
    c.style.setProperty('--main--color', 'indigo');
}
function color4() {
    c.style.setProperty('--main--color', 'blue');
}
function color5() {
    c.style.setProperty('--main--color', 'green');
}
function color6() {
    c.style.setProperty('--main--color', 'yellow');
}
function color7() {
    c.style.setProperty('--main--color', 'orange');
}
function color8() {
    c.style.setProperty('--main--color', 'red');
}
  //Custom Scroll Bar
window.onscroll = function() { mufunction()};
function mufunction(){
  var winscroll =document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winscroll / height) * 100;
  document.getElementById('scroll-bar').style.width = scrolled + '%';
}