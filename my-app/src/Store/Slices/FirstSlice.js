import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: 'slice',
    initialState: {
         bar: {
            left: '-100%',
         },
         rotate: {
            rotate: '0',
            position: 'fixed',
            left: '',
         },
    },
    reducers: {
        headerStyle(state, action) {
                if (state.bar.left !== '0%') {
                    if (Number(window.screen.width) <= 1023) {
                        state.rotate.left = '70vw';
                    }
                    else {
                        state.rotate.left = '30vw'
                    }
                    state.rotate.rotate = '180deg';
                    state.bar.left = '0%';
                }
                else {
                    state.rotate.rotate = '0deg';
                    state.bar.left = '-100%';
                    state.rotate.left = '0%';
                };
        },
        // clickWindow off header
        windowClick(state, action) {
            if (state.bar.left == '0%') {
                state.rotate.rotate = '0deg'
                state.bar.left = '-100%'
                state.rotate.left = '0%';
            };
        },
        animationScroolFooter(state, action) {
            // animatioLogicFooter
            let footerElement;
            let prevRatio = 0.0;
            window.addEventListener('scroll', () => {
                footerElement = document.querySelector('.footer')
                createObserver()
            })
            function createObserver() {
                let observer;

                let options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: build(),
                };
                observer = new IntersectionObserver(handleIntersect, options);
                observer.observe(footerElement);
            };
            function build() {
                let thresholds = [];
                let num = 24;

                for (let i = 1.0; i <= num; i++) {
                    let ratio = i / num;
                    thresholds.push(ratio)
                }

                thresholds.unshift(0)
                return thresholds
            };
            function handleIntersect(entries, observer) {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio > prevRatio) {
                      entry.target.style.opacity = entry.intersectionRatio
                      entry.target.style.transition = 'opacity 0.75s'
                    } else {
                      entry.target.style.opacity = entry.intersectionRatio
                      entry.target.style.transition = 'opacity 0.75s'
                    }
                
                    prevRatio = entry.intersectionRatio;
                  });
            }
        },
        animationElements(state, action) {
            // variablesMain
            let container;
            let slides;
            let controls
            let bullets;
            let sentence;
            let hi;
            // animatiomLogic
            let counter = 0.0;
            window.addEventListener("scroll", () => {
                // animationMain
                container = document.querySelector('.container-h2');
                slides = document.querySelector('#slides');
                controls = document.querySelector('#controls');
                bullets = document.querySelector('#bullets');
                sentence = document.querySelector('.main-sentence');
                hi =  document.querySelector('.main-hi');
                createObserver()
            });

           function createObserver() {
            let observer;

            let options = {
                root: null,
                rootMargin: '0px',
                threshold: shold(),
            }
            
            observer = new IntersectionObserver(animation, options);
            observer.observe(container);
            observer.observe(slides);
            observer.observe(controls);
            observer.observe(bullets);
            observer.observe(sentence);
            observer.observe(hi);
           };

           function shold() {
            let thresholds = []
            let num = 24;

            for (let i = 0; i <= num; i++) {
                let thres = i / num
                thresholds.push(thres)
            }
            thresholds.unshift(0)
            return thresholds
           };

           function animation(entries, observer) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > counter) {
                        entry.target.style.opacity = entry.intersectionRatio;
                        entry.target.style.transition = 'all 0,5s';
                    }
                    else {
                        entry.target.style.opacity = entry.intersectionRatio;
                        entry.target.style.transition = 'all 0,5s';
                    }
                });
           }

        }

    }
});

 export const {headerStyle, animationScroolFooter, animationElements, windowClick} = Slice.actions;

 export default Slice.reducer
