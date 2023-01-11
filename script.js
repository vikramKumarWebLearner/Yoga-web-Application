"use strict";
(function ($){
    $(window).on("load",function(){
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");

        $(".gallery-controls ul li").on("click",function(){
            $(".gallery-controls ul li").removeClass("active");
            $(this).addClass("active");
        });
        if($(".gallery-filter").length > 0){
           
            var containerEl = document.querySelector(".gallery-filter");
            
            var mixer = mixitup(containerEl);
        }

        $(".blog-grid").masonry({
            itemSelector:".grid-item",
            columnWidth:".grid-sizer",
        });
    });
   $(".set-bg").each(function(){
    var bg = $(this).data('setbg');
    $(this).css("background-image","url("+ bg +")");
   });
   $(".header-section .nav-menu .mainmenu ul li").on("mousehover",function(){
    $(this).addClass("active");
   });

   $(".header-section .nav-menu .mainmenu ul li").on("mouseleave",function(){
    $(".header-section .nav-menu .mainmenu ul li").removeClass("active");
   });
   
   
 $(".video-popup").magificPopup({
    type:"iframe",
 });
 
 $(".image-popup").magificPopup({
    type:"image",
 });
});











$(document).ready(function(){
    $(".set-bg").each(function(){
        var bg = $(this).data("setbg");
        $(this).css("background-image","url("+bg+")");
      });
})

AOS.init({
    disable:"mobile",
    duration:800,
    anchorPlacement:"center-bottom"
});


let form = document.getElementById('form');
let button = document.getElementById('button')
 form.addEventListener('submit',(e) => {
    e.preventDefault();
 });

 //localstorge value store
//  button.addEventListener('click',(form) => {

    
//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var message = document.getElementById('message');
    

//     name = name.value;
//     console.log(name);
//     localStorage.setItem('name',name);
//     email =email.value;
//     localStorage.setItem('email',email);
//     message = message.value;
//     localStorage.setItem('message',message);

//  });

 function callValue(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    

    name = name.value;
    console.log(name);
    localStorage.setItem('name',name);
    email =email.value;
    localStorage.setItem('email',email);
    message = message.value;
    localStorage.setItem('message',message);
 }