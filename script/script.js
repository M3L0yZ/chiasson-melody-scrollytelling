// use a script tag or an external JS file
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(MorphSVGPlugin)

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
    document.getElementById("spritesheet-beigne").style.animationPlayState = "running";
    clearTimeout(minuterie);

    minuterie = setTimeout(function(){
        document.body.classList.remove("is-scrolling");
        document.getElementById("spritesheet-beigne").style.animationPlayState = "paused";
    }, 100);
});


/*---------------------------------------------------------- 
# Chapitre 1
----------------------------------------------------------*/ 
gsap.to("#affiche01-chap01", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre01",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    transformOrigin: "50% 0%",
    ease: "none",
    yoyo: true,
    repeat: -1,
});

gsap.to("#affiche02-chap01", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre01",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    transformOrigin: "50% 0%",
    ease: "none",
    yoyo: true,
    repeat: -1,
});

gsap.to("#affiche03-chap01", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre01",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    transformOrigin: "50% 0%",
    ease: "none",
    yoyo: true,
    repeat: -1,
});

gsap.to("#tete-chap01", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre01",
        toggleActions : "play pause resume pause"
      },
    transformOrigin: "60% 100%",
    rotate: 8,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})

gsap.to("#homme-chap01", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre01",
        toggleActions : "play pause resume pause"
      },
    rotate: 2,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})

gsap.set("#bras-chap01", {
    transformOrigin: "0% 100%",
});

const brasChap01 = gsap.timeline(
    {repeat: -1, repeatDelay: 4});
    brasChap01.to("#bras-chap01", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap01", {rotate: 220, y: -60, x: 30, scaleX: -1, duration: 0.2, ease: "ease.inOut"})

gsap.to("#yeux-chap01", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre01",
        toggleActions : "play pause resume pause"
      },
    rotate: 10,
    x: 16,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})
/*
const yeuxChap01 = gsap.timeline(
    {repeat: -1, repeatDelay: 2.5});
    yeuxChap01.to("#yeux-chap01", {scaleY: 0.1, duration: 0.1})
    yeuxChap01.to("#yeux-chap01", {scaleY: 1, duration: 0.1})

    gsap.to("#texte1-chap1", {
        duration: 2,
        text: " qui aime beaucoup les beignes.",
        ease: "none",
    })*/

const texte01 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre01",
  },
  repeat:-1, repeatDelay:1, yoyo:true});
texte01.to("#texte1-chap01", {
  duration: 4, 
    text: {
    value: "Albert est un chef pâtissier qui aime beaucoup les beignes.",
    speed: 1
  }
})

/*---------------------------------------------------------- 
# Chapitre 2
----------------------------------------------------------*/ 
gsap.fromTo("#homme-chap02", {
    x: 300,
    y: -10,
    scale: 0.8,
},
{
    scrollTrigger: {
        markers: false,
        start: "80% 80%",
        end: "80% 0%",
        trigger: "#chapitre02",
        toggleActions : "play reset none none"
      },
    x: -2100, 
    y: 800,
    scale: 1.6,
    duration: 5,
    ease: "ease.in",
    repeat: -1,
  });

gsap.to("#plan-arriere-chap02", {
    scrollTrigger: {
        markers: false,
        start: "top 70%",
        end: "80% 0%",
        trigger: "#chapitre02",
        toggleActions : "play pause resume pause",
        scrub: true,
      },
    y: "-30%",
    x: "-10%",
    ease: "none",
})

gsap.to("#plan-centre-chap02", {
    scrollTrigger: {
        markers: false,
        start: "top 70%",
        end: "80% 0%",
        trigger: "#chapitre02",
        toggleActions : "play pause resume pause",
        scrub: true,
      },
    y: "-50%",
    ease: "none",
})

gsap.to("#plan-avant-chap02", {
    scrollTrigger: {
        markers: false,
        start: "top 70%",
        end: "80% 0%",
        trigger: "#chapitre02",
        toggleActions : "play pause resume pause",
        scrub: true,
      },
    y: "-50%",
    x: "20%",
    ease: "none",
})

const texte02 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre02",
  },
  repeat:-1, repeatDelay:1, yoyo:true});
texte02.to("#texte1-chap02", {
  duration: 4, 
    text: {
    value: "Tellement, qu'en hiver, il glisse sur les montagnes avec un tube en forme de beigne",
    speed: 1
  }
})

/*---------------------------------------------------------- 
# Chapitre 3
----------------------------------------------------------*/ 

gsap.to("#soleil-chap03", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    rotate: -360,
    duration: 50,
    ease: "none",
    repeat: -1,
});

gsap.to("#soleil-chap03", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    scale: 1.2,
    duration: 2,
    repeat: -1,
    yoyo: "true",
});

gsap.to("#nuages-chap03", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    x: 700,
    duration: 25,
    yoyo: "true",
    repeat: -1,
})

gsap.to("#palmier-chap03", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    transformOrigin: "40% 100%",
    rotate: 10,
    duration: 4,
    repeat: -1,
    yoyo: "true",
})

gsap.to("#vagues-arriere-chap03", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    x: 500,
    duration: 40,
    yoyo: "true",
    repeat: -1,
})

gsap.to("#vagues-avant-chap03", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    x: 80,
    duration: 4,
    yoyo: "true",
    repeat: -1,
})

gsap.fromTo("#homme-chap03", {
    rotate: -2,
    duration: 0.8,
},
{
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
    rotate: 2,
    duration: 1,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
})

const hommeChap03 = gsap.timeline(
    {scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre03",
        toggleActions : "play pause resume pause"
      },
      repeat: -1, yoyo: "true"});
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

const texte03 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre03",
    },
    repeat:-1, repeatDelay:1, yoyo:true});
texte03.to("#texte1-chap03", {
    duration: 4, 
    text: {
    value: "Et qu'en été, il se baigne dans la mer avec un flotteur en forme de beigne.",
    speed: 1
    }
})

/*---------------------------------------------------------- 
# Chapitre 4
----------------------------------------------------------*/ 
gsap.to("#tete-chap04", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre04",
        toggleActions : "play pause resume pause"
      },
    transformOrigin: "60% 100%",
    rotate: 8,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})

gsap.to("#homme-chap04", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre04",
        toggleActions : "play pause resume pause"
      },
    rotate: 2,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})

gsap.set("#bras-chap04", {
    transformOrigin: "0% 100%",
});

const brasChap04 = gsap.timeline(
    {scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre04",
        toggleActions : "play pause resume pause"
      },
      repeat: -1, repeatDelay: 2});
    brasChap01.to("#bras-chap04", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: 0, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: -30, duration: 0.2, ease: "ease.inOut"})
    brasChap01.to("#bras-chap04", {rotate: 220, y: -60, x: 30, scaleX: -1, duration: 0.2, ease: "ease.inOut"})

gsap.to("#yeux-chap04", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre04",
        toggleActions : "play pause resume pause"
      },
    rotate: 10,
    x: 16,
    duration: 2,
    yoyo: "true",
    repeat: -1,
})

const yeuxChap04 = gsap.timeline(
    {repeat: -1, repeatDelay: 2.5});
    yeuxChap04.to("#yeux-chap04", {scaleY: 0.1, duration: 0.1})
    yeuxChap04.to("#yeux-chap04", {scaleY: 1, duration: 0.1})

const yeuxFemmeChap04 = gsap.timeline(
    {delay: 2.5, repeat: -1, repeatDelay: 2.5});
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 0.01, duration: 0.2})
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 1, duration: 0.2})
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 0.01, duration: 0.2})
    yeuxFemmeChap04.to("#yeux-femme-chap04", {scaleY: 1, duration: 0.2})

    gsap.set("#bulle-chap04", {
        scale: 0.8, 
        duration: 1.2, 
        opacity: 0, 
        ease: "sine.inOut"
    })
const bulleChap04 = gsap.timeline(
    {scrollTrigger: {
        markers: false,
        start: "40% 50%",
        end: "80% 0%",
        trigger: "#chapitre04",
        toggleActions : "play reset resume reset"
      },
      repeat: -1,});
    bulleChap04.to("#bulle-chap04", {scale: 1, duration: 2.2, opacity: 1, ease: "sine.inOut"})
    bulleChap04.to("#bulle-chap04", {scale: 0.8, duration: 1.2, opacity: 0, ease: "sine.inOut"});

const texte04 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre04",
    },
    repeat:-1, repeatDelay:1, yoyo:true});
texte04.to("#texte1-chap04", {
    duration: 4, 
    text: {
    value: "Un jour, Marguerite la fleuriste entre dans sa pâtisserie pour lui commander un beigne.",
    speed: 1
    }
})

/*---------------------------------------------------------- 
# Chapitre 5
----------------------------------------------------------*/ 
gsap.to("#fond-bas-chap05", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre05",
        toggleActions : "play pause resume pause"
      },
    x: 300,
    duration: 4,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.to("#fond-haut-chap05", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre05",
        toggleActions : "play pause resume pause"
      },
    x: -300,
    duration: 4,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
})
;
gsap.set("#moustache-chap05", {
    rotate: 0,
});

const moustacheHommeChap05 = gsap.timeline(
    {scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre05",
        toggleActions : "play pause resume pause"
      },
      repeat: -1});
    moustacheHommeChap05.from("#moustache-chap05", {rotate: 0, duration: 2.5})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: 7, duration: 0.1})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: 0, duration: 0.1})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: -7, duration: 0.1})
    moustacheHommeChap05.to("#moustache-chap05", {rotate: 0, duration: 0.1})

gsap.set("#joues-chap05", {
    opacity: 0,
});

const jouesFemmeChap05 = gsap.timeline(
    {scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre05",
        toggleActions : "play pause resume pause"
      },
      repeat: -1});
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

const texte05 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre05",
    },
    repeat:-1, repeatDelay:1, yoyo:true});
texte05.to("#texte1-chap05", {
    duration: 4, 
    text: {
    value: "C'est le coup de foudre instantané, Albert et Marguerite tombent amoureux.",
    speed: 1
    }
})

gsap.to("#spritesheet-beigne", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre05",
        },
})

/*---------------------------------------------------------- 
# Chapitre 6
----------------------------------------------------------*/ 
const texte06 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "top 75%",
    end: "80% 0%",
    trigger: "#chapitre06",
    },
    repeat:-1, repeatDelay:1, yoyo:true});
texte06.to("#texte1-chap06", {
    duration: 4, 
    text: {
    value: "Au fil des mois, ils apprennent à se connaître.",
    speed: 1
    }
})

gsap.to("#coeur-mp", {
    motionPath: {
        align: "#cercle-mp",
        path: "#cercle-mp",
        },
    duration: 8,
    repeat: -1,
    yoyo: true,
  })
 
gsap.to("#bonbons-chap06", {
    y: "310%",
    repeat: -1,
    yoyo: true,
    duration: 6,
})

gsap.to("#cremage-chap06", {
    y: "110%",
    repeat: -1,
    yoyo: true,
    duration: 6,
})

gsap.to("#beigne-chap06", {
    y: "40%",
    repeat: -1,
    yoyo: true,
    duration: 6,
})

gsap.set("#beigne-composition-chap06", {
    scale: 1.1,
    rotate: -15,
    x: 40,
})
/*---------------------------------------------------------- 
# Chapitre 7
----------------------------------------------------------*/ 
gsap.set("#fleur01-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur01-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur02-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur02-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur03-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur03-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});


gsap.set("#fleur04-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur04-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur05-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur05-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});


gsap.set("#fleur06-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur06-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur07-chap07", {
    transformOrigin: "40% 100%",
    rotate: -5,
});

gsap.to("#fleur07-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur08-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur08-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur09-chap07", {
    transformOrigin: "40% 100%",
    rotate: 5,
});

gsap.to("#fleur09-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.to("#nuages-chap07", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre07",
        toggleActions : "play pause resume pause"
      },
    x: 1200,
    duration: 60,
    yoyo: "true",
    repeat: -1,
})

const texte07 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre07",
    },
    repeat:-1, repeatDelay:1, yoyo:true});
texte07.to("#texte1-chap07", {
    duration: 4, 
    text: {
    value: "Si bien qu'un jour, ils se marient sur un beigne dans le champ de fleurs de Marguerite.",
    speed: 1
    }
})

/*---------------------------------------------------------- 
# Chapitre 8
----------------------------------------------------------*/ 

gsap.to("#soleil-chap08", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: -360,
    duration: 50,
    ease: "none",
    repeat: -1,
});

gsap.to("#soleil-chap08", {
    scrollTrigger: {
        markers: false,
        start: "top 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    scale: 1.2,
    duration: 2,
    repeat: -1,
    yoyo: "true",
});

gsap.set("#fleur01-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur01-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur02-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur02-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur03-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur03-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});


gsap.set("#fleur04-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur04-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur05-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur05-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});


gsap.set("#fleur06-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur06-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur07-chap08", {
    transformOrigin: "40% 100%",
    rotate: -5,
    scale: 0.2,
});

gsap.to("#fleur07-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: 5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur08-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur08-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
});

gsap.set("#fleur09-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur09-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

gsap.set("#fleur10-chap08", {
    transformOrigin: "40% 100%",
    rotate: 5,
    scale: 0.2,
});

gsap.to("#fleur10-chap08", {
    scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
    rotate: -5,
    duration: 2,
    repeat: -1,
    yoyo: "true",
    ease: "sine.inOut",
    delay: 0.5,
});

const fleursChap08 = gsap.timeline(
    {scrollTrigger: {
        markers: false,
        start: "center 75%",
        end: "80% 0%",
        trigger: "#chapitre08",
        toggleActions : "play pause resume pause"
      },
      duration: 2});
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

const texte08 = gsap.timeline({scrollTrigger: {
    markers: false,
    start: "center 75%",
    end: "80% 0%",
    trigger: "#chapitre08",
    },
    repeat:-1, repeatDelay:1, yoyo:true});
texte08.to("#texte1-chap08", {
    duration: 4, 
    text: {
    value: "Aujourd'hui, ils combinent leurs passions en cultivant des fleurs en forme de beigne.",
    speed: 1
    }
})


