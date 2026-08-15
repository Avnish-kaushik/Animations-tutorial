import React from 'react'
import gsap from 'gsap'
import '/style.css'

// gsap.to('.box', {
//   x: 1200,
//   duration: 1.3,
//   ease: 'power4.out',
//   delay: 0.6,
//   stagger: {
//     each: 0.1,
//     from:'random'
//   },
// })

// gsap.from('h1 span', {
//   yPercent: 100,
//   opacity: 0,
//   duration: 1.5,
//   ease: 'expo.out',
//   stagger: {
//     each: 0.08,
//     from: 'random',
//   },
// })

// const tl = gsap.timeline()

// tl.to(
//   '.box',
//   {
//     x: 1200,
//     duration: 1.3,
//     ease: 'power4.out',
//     delay: 0.6,
//   },
//   'raj'
// )
//   .to(
//     '.box1',
//     {
//       x: 1200,
//       duration: 1.3,
//       ease: 'power4.out',
//     },
//     'swaraj'
//   )
//   .to(
//     '.box2',
//     {
//       x: 1200,
//       duration: 1.3,
//       ease: 'power4.out',
//     },
//     'raj'
//   )
//   .to(
//     '.box3',
//     {
//       x: 1200,
//       duration: 1.3,
//       ease: 'power4.out',
//     },
//     'swaraj'
//   )

let count = 0
const loaderCount = document.querySelector('.loaderCount')
const interval = setInterval(() => {
  count++
  loaderCount.innerHTML = `${count}%`
  if (count === 100) {
    clearInterval(interval)
    landingAnimation()
  }
}, 20)

function landingAnimation() {
  const tl = gsap.timeline()

  tl.to('.loaderCount', {
    opacity: 0,
    duration: 1.6,
    ease: 'power3.out',
  })
    .to(
      '.loader',
      {
        yPercent: -100,
        duration: 1.2,
        ease: 'export.out',
      },
      '-=0.9'
    )
    .from(
      '.background img',
      {
        scale: 1.2,
        duration: 1.3,
        ease: 'expo.out',
      },
      '-=0.97'
    )
    .from(
      '.heading h1',
      {
        yPercent: 100,
        duration: 1.2,
        ease: 'expo.out',
      },
      '-=0.8'
    )
    .from(
      '.subheading h2',
      {
        yPercent: 100,
        duration: 1.2,
        ease: 'expo.out',
      },
      '-=0.77'
    )
}
