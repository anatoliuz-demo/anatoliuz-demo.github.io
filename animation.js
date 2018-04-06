$(function () { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = TweenMax.to("#title", 0.5, { repeat: 10, scale: 2, yoyo: true });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: "100%" })
        .setTween(tween)
        //.setPin("#title", { pushFollowers: false })
        .addTo(controller);

});

$(function () { // wait for document ready
    // init controller
    var controller1 = new ScrollMagic.Controller();

    // build tween
    var tween1 = TweenMax.to("#wow-gif", 0.5, { scale: 2, repeat: 5, yoyo: true });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: "100%" })
        .setTween(tween1)
        .addTo(controller1);

});

$(function () { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    });

    // build tween
    var tween = TweenMax.to("#igor-gif", 0.1, { rotation: 360 });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 900, triggerElement: "#top" })
        .setTween(tween)
        .addTo(controller);

    // build tween
    var tween = TweenMax.to("#lena-gif", 0.1, { rotation: 1440 });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 800, triggerElement: "#wow-gif" })
        .setTween(tween)
        .addTo(controller);

    // build tween
    var tween = TweenMax.to("#misha-gif", 0.1, { rotation: 1800 });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 1700, triggerElement: "#wow-gif" })
        .setTween(tween)
        .addTo(controller);

    // build tween
    var tween = TweenMax.to("#sasha-gif", 0.1, { rotation: 2901 });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 2700, triggerElement: "#wow-gif" })
        .setTween(tween)
        .addTo(controller);

});

$(function () {
    // init controller
    var controller = new ScrollMagic.Controller();
    // build tween
    var tween = TweenMax.fromTo("#arrow", 1,
        { left: -40 },
        { left: 75, repeat: -1, yoyo: true, ease: Circ.easeInOut }
    );

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 700, offset: 100 })
        .setTween(tween)
        .addTo(controller);
});


$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.second", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.fourth", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#slidesContainer",
            triggerHook: 0,
            duration: "300%"
        })
        .setPin("#slidesContainer")
        .setTween(wipeAnimation)
        .addTo(controller);
});
