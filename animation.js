$(function () { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = TweenMax.to("#title", 0.1, { rotation: 320, ease: Linear.easeNone });

    // build scene
    var scene = new ScrollMagic.Scene({ duration: 250 })
        .setTween(tween)
        .setPin("#title", { pushFollowers: false })
        .addTo(controller);
    
    

});

$(function () { // wait for document ready
    // init controller
    let controller = new ScrollMagic.Controller();

    // build tween
    let tween = TweenMax.to("#title", 0.1, { rotation: 320, ease: Linear.easeNone });

    // build scene
    let scene = new ScrollMagic.Scene({ duration: 250 })
        .setTween(tween)
        .setPin("#title", { pushFollowers: false })
        .addTo(controller);
    
    

});


$(function () { // wait for document ready
    // init
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // get all slides
    let slides = document.querySelectorAll("section.panel");

    // create scene for every slide
    for (let i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i])
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
});
