"use strict";

let zSpacing = -1000;
let lastPos = zSpacing / 5;
let $frames = document.getElementsByClassName("frame");
let frames = Array.from($frames);
let zVals = [];
let animationStarted = false; // Флаг для отслеживания начала анимации

window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;
    const textOne = "I am a frontend developer, my main tech stack is TypeScript, React and Redux.";
    const textTwo =
        "I create user-friendly and modern interfaces, paying attention to both functionality and user experience. I am constantly improving and learning new technologies in order to maintain a high level of my work.";

    lastPos = top;

    frames.forEach((n, i) => {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5;
        let frame = frames[i];
        let frameMin = frames[7]
        let transform = `translateZ(${zVals[i]}px)`;
        let opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
        frameMin.setAttribute("style", `height: 1%; width: 1%`);
        console.log(zVals[4]); // Если карточка достаточно близко

        // Проверяем позицию по оси Z и запускаем анимацию, если она еще не началась
        if (Math.abs(zVals[2]) < 1000 && !animationStarted) {
            animationStarted = true; // Устанавливаем флаг, чтобы анимация началась только один раз
            let pOne = document.getElementById("runTextOne");
            let pTwo = document.getElementById("runTextTwo");
            pOne.textContent = "";
            pTwo.textContent = ""; // очищаем содержимое элемента перед началом
            const startRunTextOne = (i) => {
                setTimeout(() => {
                    pOne.textContent += textOne[i]; // добавляем по одному символу из строки `text`
                }, i * 30); // задержка для каждого символа увеличивается на 50 мс
            };
            const startRunTextTwo = (i) => {
                setTimeout(() => {
                    pTwo.textContent += textTwo[i]; // добавляем по одному символу из строки `text`
                }, i * 13); // задержка для каждого символа увеличивается на 50 мс
            };

            for (let i = 0; i < textOne.length; i++) {
                startRunTextOne(i);
            }

            for (let i = 0; i < textTwo.length; i++) {
                startRunTextTwo(i);
            }
        }
       

    });
};

window.scrollTo(0, 1);
