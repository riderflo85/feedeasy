// var s = skrollr.init();



// gsap.effects.explode(".testAnimate", { direction: "up", duration: 2 });
// register the effect with GSAP:
gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 1 });
    },
    defaults: { duration: 4 }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

// now we can use it like this:
gsap.effects.fade(".testAnimate");