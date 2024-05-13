gsap.registerPlugin(ScrollTrigger);


//Animation flèches "call to action"
gsap.set(".fleche", {
    opacity: 0,
});

gsap.to(".fleche", {
    y: 60, 
    duration: 0.6, 
    repeat: -1,
    yoyo: true,
    ease: "power1.out",
    opacity: 1
});


//Ajout et retrait de la classe .is-scrolling au body

let minuterie;

window.addEventListener("scroll", () => {
    document.body.classList.add("is-scrolling");
    document.getElementById("spritesheet").style.animationPlayState = "running";
    document.getElementById("spritesheet2").style.animationPlayState = "running";
    clearTimeout(minuterie);

    minuterie = setTimeout(function(){
        document.body.classList.remove("is-scrolling");
        document.getElementById("spritesheet").style.animationPlayState = "paused";
        document.getElementById("spritesheet2").style.animationPlayState = "paused";
    }, 100);
});

/*---------------------------------------------------------- 
# ScrollTrigger
----------------------------------------------------------*/ 

/*---------------------------------------------------------- 
# Animations chapitre 1
----------------------------------------------------------*/ 
/*
function animChap01() {
gsap.timeline({
    scrollTrigger:{
        trigger: "#chapitre01",
        //scroller: "section",
        markers: true,
        start: "top 100%",
        end: "bottom 0%",
        scrub: 1,
    }
})
};*/


gsap.timeline({
    scrollTrigger:{
        trigger: "#chapitre01",
        scroller: "#chapitre01",
        markers: true,
        start: "top bottom",
        end: "bottom 0%",
        scrub: 5,
        toggleActions: "restart pause resume none",
    }


.to("#affiche01-chap01", {
    rotate: 5,
    duration: 2,
    transformOrigin: "50% 0%",
    ease: "none",
    yoyo: true,
    repeat: -1,
})

.to("#affiche02-chap01", {
    rotate: -5,
    duration: 2,
    transformOrigin: "50% 0%",
    ease: "none",
    yoyo: true,
    repeat: -1,
})

.to("#affiche03-chap01", {
    rotate: -5,
    duration: 2,
    transformOrigin: "50% 0%",
    ease: "none",
    yoyo: true,
    repeat: -1,
})
})

const teteChap01 = gsap.timeline(
    {repeat: -1, yoyo: true});
    teteChap01.to("#tete-chap01", {transformOrigin: "60% 100%",rotate: 8, duration: 2, yoyo: true})
    teteChap01.to("#yeux-chap01", {rotate: 10,x: 16, duration: 2})

.to("#tete-chap01", {
    transformOrigin: "60% 100%",
    rotate: 8,
    duration: 2,
    yoyo: true,
    repeat: -1,
})

.to("#homme-chap01", {
    rotate: 2,
    duration: 2,
    yoyo: true,
    repeat: -1,
})
/*
.set("#bras-chap01", {
    transformOrigin: "0% 100%",
})*/

const brasChap01 = gsap.timeline(
    {repeat: -1, repeatDelay: 4});
    brasChap01.to("#bras-chap01", {transformOrigin: "0% 100%", rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: 220, y: -60, x: 30, scaleX: -1, duration: 0.2, ease: "ease.inOut"})

const yeuxChap01 = gsap.timeline(
    {repeat: -1, repeatDelay: 2.5});
    yeuxChap01.to("#yeux-chap01", {scaleY: 0.1, duration: 0.1})
    yeuxChap01.to("#yeux-chap01", {scaleY: 1, duration: 0.1})


//animChap01();

/*DEBUG
const chap01 = gsap.timeline(
    {repeat: -1, });
    chap01.to(".chapitre", {scale: 1})
    chap01.to(".chapitre", {scale: 2})
    */

/*---------------------------------------------------------- 
# Animations chapitre 2
----------------------------------------------------------*/ 
gsap.fromTo("#homme-chap02", {
    x: 300,
    y: -10,
    scale: 0.8,
},
{
    x: -2100, 
    y: 800,
    scale: 1.6,
    duration: 5,
    ease: "ease.in",
    repeat: -1,
  });

/*---------------------------------------------------------- 
# Animations chapitre 3
----------------------------------------------------------*/ 
gsap.to("#soleil-chap03", {
    rotate: -360,
    duration: 50,
    ease: "none",
    repeat: -1,
});

gsap.to("#soleil-chap03", {
    scale: 1.2,
    duration: 2,
    repeat: -1,
    yoyo: true,
});

gsap.to("#nuages-chap03", {
    x: 700,
    duration: 25,
    yoyo: true,
    repeat: -1,
})

gsap.to("#palmier-chap03", {
    transformOrigin: "40% 100%",
    rotate: 10,
    duration: 4,
    repeat: -1,
    yoyo: true,
})

gsap.to("#vagues-arriere-chap03", {
    x: 500,
    duration: 40,
    yoyo: true,
    repeat: -1,
})

gsap.to("#vagues-avant-chap03", {
    x: 80,
    duration: 4,
    yoyo: true,
    repeat: -1,
})

gsap.fromTo("#homme-chap03", {
    rotate: -2,
    duration: 0.8,
},
{
    rotate: 2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
})

const hommeChap03 = gsap.timeline(
    {repeat: -1, yoyo: true});
    hommeChap03.to("#homme-chap03", {x: 50, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 100, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 150, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 200, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 250, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 300, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 350, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 400, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 450, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 500, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 550, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 600, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 650, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 700, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 750, y: 30, ease: "sine.inOut", duration: 1.7})
    hommeChap03.to("#homme-chap03", {x: 800, y: 0, ease: "sine.inOut", duration: 1.9})
    hommeChap03.to("#homme-chap03", {x: 850, y: 30, ease: "sine.inOut", duration: 1.7})

/*---------------------------------------------------------- 
# Animations chapitre 4
----------------------------------------------------------*/ 
gsap.to("#tete-chap04", {
    transformOrigin: "60% 100%",
    rotate: 8,
    duration: 2,
    yoyo: true,
    repeat: -1,
})

gsap.to("#homme-chap04", {
    rotate: 2,
    duration: 2,
    yoyo: true,
    repeat: -1,
})

gsap.set("#bras-chap04", {
    transformOrigin: "0% 100%",
});

const brasChap04 = gsap.timeline(
    {repeat: -1, repeatDelay: 4});
    brasChap01.to("#bras-chap04", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: 220, y: -60, x: 30, scaleX: -1, duration: 0.2, ease: "ease.inOut"})

gsap.to("#yeux-chap04", {
    rotate: 10,
    x: 16,
    duration: 2,
    yoyo: true,
    repeat: -1,
})

const yeuxChap04 = gsap.timeline(
    {repeat: -1, repeatDelay: 2.5});
    yeuxChap01.to("#yeux-chap04", {scaleY: 0.1, duration: 0.1})
    yeuxChap01.to("#yeux-chap04", {scaleY: 1, duration: 0.1})

const yeuxFemmeChap04 = gsap.timeline(
    {delay: 2.5, repeat: -1, repeatDelay: 2.5});
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 0.01, duration: 0.2})
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 1, duration: 0.2})
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 0.01, duration: 0.2})
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 1, duration: 0.2})

const bulleChap04 = gsap.timeline(
    {repeat: -1,});
    bulleChap04.to("#bulle-chap04", {scale: 0.8, duration: 1.2, opacity: 0, ease: "sine.inOut"})
    bulleChap04.to("#bulle-chap04", {scale: 1, duration: 2.2, opacity: 1, ease: "sine.inOut"})

/*---------------------------------------------------------- 
# Animations chapitre 5
----------------------------------------------------------*/ 
gsap.to("#fond-bas-chap05", {
    x: 300,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.to("#fond-haut-chap05", {
    x: -300,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
})
;
gsap.set("#moustache-chap05", {
    rotate: 0,
});

const moustacheHommeChap05 = gsap.timeline(
    {repeat: -1});
    moustacheHommeChap05.from("#moustache-chap05", {rotate: 0, duration: 2.5})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: 7, duration: 0.1})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: 0, duration: 0.1})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: -7, duration: 0.1})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: 0, duration: 0.1})

gsap.set("#joues-chap05", {
    opacity: 0,
});

const jouesFemmeChap05 = gsap.timeline(
    {repeat: -1});
    jouesFemmeChap05.to("#joues-chap05", {opacity: 0, duration: 2.5})
    jouesFemmeChap05.to("#joues-chap05", {opacity: 1, duration: 2.5})
    jouesFemmeChap05.to("#joues-chap05", {opacity: 0, duration: 2.5})


const yeuxHommeChap05 = gsap.timeline(
    {repeat: -1, repeatDelay: 2.5});
    yeuxHommeChap05.to("#yeux-homme-chap05", {scaleY: 0.01, duration: 0.2})
    yeuxHommeChap05.to("#yeux-homme-chap05", {scaleY: 1, duration: 0.2})
    yeuxHommeChap05.to("#yeux-homme-chap05", {scaleY: 0.01, duration: 0.2})
    yeuxHommeChap05.to("#yeux-homme-chap05", {scaleY: 1, duration: 0.2})

const yeuxFemmeChap05 = gsap.timeline(
    {delay: 2.5, repeat: -1, repeatDelay: 2.5});
    yeuxFemmeChap05.to("#yeux-femme-chap05", {scaleY: 0.01, duration: 0.2})
    yeuxFemmeChap05.to("#yeux-femme-chap05", {scaleY: 1, duration: 0.2})
    yeuxFemmeChap05.to("#yeux-femme-chap05", {scaleY: 0.01, duration: 0.2})
    yeuxFemmeChap05.to("#yeux-femme-chap05", {scaleY: 1, duration: 0.2})

/*---------------------------------------------------------- 
# Animations chapitre 6
----------------------------------------------------------*/ 


/*---------------------------------------------------------- 
# Animations chapitre 7
----------------------------------------------------------*/ 
gsap.set("#fleur01-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur01-chap07", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur02-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur02-chap07", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur03-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur03-chap07", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur04-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur04-chap07", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur05-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur05-chap07", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur06-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur06-chap07", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur07-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur07-chap07", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur08-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur08-chap07", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur09-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur09-chap07", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.to("#nuages-chap07", {
    x: 1200,
    duration: 60,
    yoyo: true,
    repeat: -1,
})


/*---------------------------------------------------------- 
# Animations chapitre 8
----------------------------------------------------------*/ 

gsap.to("#soleil-chap08", {
    rotate: -360,
    duration: 50,
    ease: "none",
    repeat: -1,
});

gsap.to("#soleil-chap08", {
    scale: 1.2,
    duration: 2,
    repeat: -1,
    yoyo: true,
});

gsap.set("#fleur01-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur01-chap08", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur02-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur02-chap08", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur03-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur03-chap08", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur04-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur04-chap08", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur05-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur05-chap08", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur06-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur06-chap08", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur07-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur07-chap08", {
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur08-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur08-chap08", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
});

gsap.set("#fleur09-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur09-chap08", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur10-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur10-chap08", {
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5,
});

const fleursChap08 = gsap.timeline(
    {duration: 2});
    fleursChap08.to("#fleur01-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur02-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur03-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur04-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur05-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur06-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur07-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur08-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur09-chap08", {scale: 1, duration: 1.1})
    fleursChap08.to("#fleur10-chap08", {scale: 1, duration: 1.1})

/*---------------------------------------------------------- 
# Autres (à renommer)
----------------------------------------------------------*/ 
// use a script tag or an external JS file
document.addEventListener("load", (event) => {
    animChap01();
});