import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import '/style.css'

gsap.set('.imageDiv', {
  scale: 0.3,
})

gsap.set('.content', {
  gap: '80rem',
})

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.page2',
    start: 'top top',
    end: 'top -190%',
    scrub: true,
    pin: true,
  },
})

tl.to('.imageDiv', {
  scale: 1,
  ease: 'power4.out',
}).to('.content', {
  gap: '7rem',
})

// const play = document.querySelector('.play')
// const pause = document.querySelector('.pause')
// const restart = document.querySelector('.restart')
// const reverse = document.querySelector('.reverse')
// const seek = document.querySelector('.seek')

// const tl = gsap.timeline({ paused: true })

// tl.to('.box', {
//   x: 1200,
//   duration: 1.3,
//   ease: 'power4.out',
//   delay: 0.6,
// })
//   .to('.box1', {
//     x: 1200,
//     duration: 1.3,
//     ease: 'power4.out',
//   })
//   .to('.box2', {
//     x: 1200,
//     duration: 1.3,
//     ease: 'power4.out',
//   })
//   .to('.box3', {
//     x: 1200,
//     duration: 1.3,
//     ease: 'power4.out',
//   })

// play.addEventListener('click', () => {
//   tl.play()
// })

// pause.addEventListener('click', () => {
//   tl.pause()
// })
// restart.addEventListener('click', () => {
//   tl.restart()
// })
// reverse.addEventListener('click', () => {
//   tl.reverse()
// })

// seek.addEventListener('click', () => {
//   tl.seek(2)
// })

// const loadingTimeline = () => {
//   return gsap.timeline().to(Element,{})
// }

// const navbarTimeline = () => {
//   return gsap.timeline()
// }

// const master = gsap.timeline();

// master.add(loadingTimeline, "-=0.4").add(navbarTimeline);
