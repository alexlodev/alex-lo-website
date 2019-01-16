
//////////////////////////////////////////////

///GSAP AND SCROLL MAGIC ANIMATIONS//
///                HEADER ANIMATIONS                 ////
const controller = new ScrollMagic.Controller();
const ourScene = new ScrollMagic.Scene({
    triggerElement: '.wrapper-header',
    duration: '100%'
})
.setTween('.headerImg', {opacity:1, y:100}).addTo(controller);
////////////////////////////////////////////////////
///                ABOUT ANIMATIONS                 ////
new ScrollMagic.Scene({
    triggerElement: '.wrapper-about',
})
.setTween('.aboutH1' ,0.1, {y:-100, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-about',
})
.setTween('.quienEs, .descriptionAbout' ,0.5, {y:-100, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-about',
})
.setTween('#contacto, .socialNetworks' ,0.7, {y:-100, opacity:1 },).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.imgFigure',
    duration: '100%'
})
.setTween('.imgFigure', {y:'+=100'}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-about',
})
.setTween('.imgFigure',0.3, {opacity:1}).addTo(controller);
////////////////////////////////////////////////
///                SKILLS ANIMATIONS                 ////
new ScrollMagic.Scene({
    triggerElement: '.wrapper-skills',
})
.setTween('.skills' ,0.1, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-skills',
})
.setTween('.barsWrapper' ,0.5, {y:-100, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-skills',
})
.setTween('.brainWrapper' ,0.3, {opacity:1, }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.brainWrapper',
    duration: '100%'
})
.setTween('.brain', {y:'-=100' }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-skills',
})
.setTween('.barsWrapper' ,0.5, {y:-40, opacity:1, display: 'flex' }).addTo(controller);
////////////////////////////////////////////////
///                Porfolio ANIMATIONS                 ////
new ScrollMagic.Scene({
    triggerElement: '.wrapper-portfolio',
})
.setTween('.h1' ,0.7, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-portfolio',
})
.setTween('.porfolioP' ,0.8, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.wrapper-portfolio',
})
.setTween('.wrapperImg1' ,0.8, {opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p2',
})
.setTween('.wrapperImg2' ,0.8, {opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p3',
})
.setTween('.wrapperImg3' ,0.8, {opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p4',
})
.setTween('.wrapperImg4' ,0.8, {opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p5',
})
.setTween('.wrapperImg5' ,0.8, {opacity:1 }).addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.wrapper-portfolio',
    duration: '100%'
})
.setTween('.wrapperImg1' , {y:'-=150'}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p2',
    duration: '100%'
})
.setTween('.wrapperImg2' , {y:'-=150'}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p3',
    duration: '100%'
})
.setTween('.wrapperImg3' , {y:'-=150'}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p4',
    duration: '100%'
})
.setTween('.wrapperImg4' , {y:'-=150'}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p5',
    duration: '100%'
})
.setTween('.wrapperImg5' , {y:'-=150'}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p1',
})
.setTween('.wrapperContein1' ,0.7, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p2',
})
.setTween('.wrapperContein2' ,0.7, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p3',
})
.setTween('.wrapperContein3' ,0.7, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p4',
})
.setTween('.wrapperContein4' ,0.7, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '#p5',
})
.setTween('.wrapperContein5' ,0.7, {y:-60, opacity:1 }).addTo(controller);
////////////////////////////////////////////////
///                Contact ANIMATIONS                 ////

new ScrollMagic.Scene({
  triggerElement: '.wrapper-contact',
})
.setTween('.contactWrapper' ,0.7, {y:-60, opacity:1 }).addTo(controller);
new ScrollMagic.Scene({
  triggerElement: '.wrapper-contact',
})
.setTween('.form' ,0.9, {y:-60, opacity:1 }).addTo(controller);

new ScrollMagic.Scene({
  triggerElement: '.wrapper-contact',
})
.setTween('.send' ,0.7, {y:-10, opacity:1 }).addTo(controller);



////////////////////////////////////////////////
///                Footer ANIMATIONS                 ////


var leaves = new TimelineMax({onUpdate:updatePercentage});
var leave1 = new TimelineMax();


leaves.from('#leave1', 0.1, {y:300,  x:200}, 0.1);
leaves.from('#leave2', 0.1, {y:300, x:-200 }, 0.1);
leaves.from('#leave3', 0.1, {y:300, x:200 }, 0.1);
leaves.from('#leave4', 0.1, {y:300, x:-200   }, 0.1 );
new ScrollMagic.Scene({
    triggerElement: '.wrapper-footer',
})
.setTween('.footerImgs', {display:'block' }).addTo(controller);


const scene = new ScrollMagic.Scene({
  triggerElement: ".copy",
            triggerHook: 0.85,
            offset: -405,
            duration: 600
})
  .setTween(leaves)
		.addTo(controller);




function updatePercentage() {
  //percent.innerHTML = (tl.progress() *0.1 ).toFixed();
  leaves.progress();
}



