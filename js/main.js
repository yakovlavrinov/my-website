"use strict";

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName('frame')
let frame = Array.from($frames)
let zVals = []

window.onscroll = function() {
    let top = document.documentElement.scrollTop
    let delta = lastPos - top

    lastPos = top

    frame.forEach((n,i)=>{
        zVals.push((i * zSpacing)+zSpacing)
        zVals[i] += delta * -5
        let frame = frames[i]
        let transform = `translateZ(${zVals[i]}px)`

    })
}
