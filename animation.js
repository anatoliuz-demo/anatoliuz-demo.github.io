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
    var tween1 = TweenMax.to("#wow-gif", 0.5, { scale: 1.5, repeat: 5, yoyo: true });

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
    var tween = TweenMax.to("#igor-gif", 0.1, {rotation:360 });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 360, triggerElement: "#wow-gif" })
        .setTween(tween)
        .addTo(controller);
    
    

});




/*
$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    var slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i])
            .addTo(controller);
    }
});
*/