$(window).on('load', function () {

    intro();
    slideMenu();
    menuOpen();
    menuClose();
    subMenuSlide();
    aniMate1();
    introTitle();
    viewSlide();
    introArtist();
    newTitle()
})

function intro() {

    const intro = gsap.timeline({ 
        defaults:{
        },
        onComplete:function(){
            scaleIntro.play();
        }
    })
    intro
    .addLabel('a')
    .to('#loading .first',1,{yPercent: -95},'a')
    .to('#loading .sec',1,{yPercent: -95, stagger:0.1},'a+=0.2')
    .to('#loading .wrap',0.5,{xPercent:-20},'a+=0.5')
    .to('#loading',1,{height:0})

    const scaleIntro = gsap.from('.sc-visual .visual-bg img',0.5,{
        scale:1.2,
        paused:true,
    })

}

function slideMenu() {

    const fadeUp = gsap.from('.nav-item',{
        delay:1,
        opacity:0,
        yPercent:10,
        stagger:0.2,
        paused:true,
    })



    $('.header .menu').click(function (e) {
        e.preventDefault()
        $('.side-nav').addClass('active');
        fadeUp.restart();
    })

    $('.btn-close').click(function (e) {
        e.preventDefault()
        $('.side-nav').removeClass('active');
        $('.sub-menu').stop().slideUp();
        fadeUp.reverse();
    })
}

function menuOpen() {
    var target = document.querySelector('.menu');
    var motion = document.querySelector('.open-btn');
    target.addEventListener('mousemove', (event) => {
        let x = (event.layerX * 0.1);
        let y = (event.layerY * 0.1);

        motion.style.transform = `translate(${x}px,${y}px)`
    })
    target.addEventListener('mouseout', (event) => {
        motion.style.transform = '';
    })
}

function menuClose() {
    var target = document.querySelector('.btn-close');
    var motion = document.querySelector('.exit');
    target.addEventListener('mousemove', (event) => {
        let x = (event.layerX * 0.1);
        let y = (event.layerY * 0.1);

        motion.style.transform = `translate(${x}px,${y}px)`
    })
    target.addEventListener('mouseout', (event) => {
        motion.style.transform = '';
    })
}

function subMenuSlide(){

    $('.menu-item').click(function(e){
        e.preventDefault();

        $('.sub-menu').stop().slideUp();
        $(this).siblings('.sub-menu').stop().slideToggle();   
    })

}

const txts = document.querySelector('.title-list').children;
txtsLen = txts.length;
let index = 0;

function aniMate1() {
    for (let i = 0; i < txtsLen; i++) {
        txts[i].classList.remove('text-in', 'text-out');
    }
    txts[index].classList.add('text-in');
}
function aniMate2() {
    txts[index-1].classList.add('text-out');
}

setInterval(function () {
    aniMate2()
}, 3500);

setInterval(function () {
    if (index == txtsLen - 1) {
        index = 0;
    }
    else {
        index++;
    }
    aniMate1()
}, 3000);

function introTitle(){

    gsap.set(".sc-intro .effect", {
        rotationX: -45,
        transformStyle: "preserve-3d",
        transformOrigin: "0% 50% -100%",
        opacity: 0,
        yPercent: 110,
    });

    const introEffect = gsap.to('.sc-intro .effect', {
        scrollTrigger:{
            trigger:'.sc-intro',
            start:'top 50%',
            end:'bottom top',
        },

        transformStyle: "preserve-3d",
        rotationX: 0,
        // paused:true,
        duration:1,
        opacity: 1,
        yPercent: 0,
        transformOrigin: "50% 50%",
        stagger:0.1,
    });

}

function viewSlide(){


    ScrollTrigger.matchMedia({
	
        // large
        "(min-width: 768px)": function() {
            gsap.set('.sc-view .img-item .item01',{ scale:1.3 })
            gsap.set('.sc-view .img-item .item02',{ rotate:30, })
            gsap.set('.sc-view .img-item .item03',{ rotate:-10,scale:0.8 })
            gsap.set('.sc-view .img-item .item05',{ rotate:-50,scale:1.5 })
            gsap.set('.sc-view .img-item .item05',{ scale:1.1 })
            gsap.set('.sc-view .img-item .item07',{ rotate:-120})
            gsap.set('.sc-view .img-item .item08',{ rotate:20,scale:1.2 })
            gsap.set('.sc-view .img-item .item09',{ rotate:45})
            gsap.set('.sc-view .img-item .img',{ yPercent:-50})

            const viewSlide = gsap.timeline({
                defaults:{
                    ease:'none',
                },
                scrollTrigger:{
                    trigger:'.sc-view',
                    start:'top top',
                    end:'+=800%',
                    scrub:1,
                    // markers:true,
                    pin:true,
                },
            })
            viewSlide
            .addLabel('a')
            .to('.sc-view .title',{ xPercent:-20 },'a')
            .to('.sc-view .img-item',{ xPercent:-110 },'a')
            .to('.sc-view .img-item .img',{ yPercent:100, stagger:0.02 },'a')
            .to('.sc-view .img-item .item01',{ rotate:-90 },'a')
            .to('.sc-view .img-item .item02',{ rotate:0 },'a')
            .to('.sc-view .img-item .item03',{ rotate:0 },'a')
            .to('.sc-view .img-item .item04',{ rotate:60 },'a')
            .to('.sc-view .img-item .item05',{ rotate:0 },'a')
            .to('.sc-view .img-item .item06',{ rotate:30 },'a')
            .to('.sc-view .img-item .item07',{ rotate:0 },'a')
            .to('.sc-view .img-item .item08',{ rotate:0 },'a')
            .to('.sc-view .img-item .item09',{ rotate:0, left:'100px', bottom:'-150px' },'a+=.1')
        
        },
          
      }); 
}

function introArtist(){
    const panels = document.querySelectorAll(".artist-item");

    function toggleOpen() {
    if ([...this.classList].indexOf("active") >= 0) {
        this.classList.remove("active");
        return;
    }
    panels.forEach(panel => panel.classList.remove("active"));
    this.classList.toggle("active");
    }

    function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open");
    }
    }
    panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleActive);
    });
}

function newTitle(){

    gsap.set(".sc-new .line", {
        rotationX: -45,
        transformStyle: "preserve-3d",
        transformOrigin: "0% 50% -100%",
        opacity: 0,
        yPercent: 110,
    });

    const newItem = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-new',
            start:'top 50%',
            end:'bottom top',
        },
    })
    newItem
    .addLabel('a')
    .to('.sc-new .line',{transformStyle: "preserve-3d", rotationX: 0, duration:1.2, opacity: 1,
    yPercent: 0, transformOrigin: "50% 50%",stagger:0.1,},'a')
    .to('.sc-new .new-img',{scale:0.8},'a')


}

let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    introOffset = $('.sc-intro').offset().top;

    if(curr > lastScroll){
        $('.header').addClass('hide');
    }else{
        $('.header').removeClass('hide');
    }
    lastScroll = curr;

    if(curr >= introOffset){
        $('.header').addClass('active');
        $('.side-nav').css({'height':'100vh'})
    }else{
        $('.header').removeClass('active');
    }

})























