import './style.css'
import gsap from 'gsap'

gsap.to('.box', {
  x: 600,
  duration: 1.5,
  delay: 2,
  ease: 'power2.inOut',
  onUpdate: () => {
    console.log('Animation has completed')
  },
})
