gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

window.addEventListener('scroll', e => {
  document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})




gsap.fromTo('.hero-section', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'center',
    end: '820',
    scrub: true
  }
})

gsap.fromTo('.aboutUs_cont', {opacity: 0, x: -200}, {
  opacity: 1, x: 0,
  scrollTrigger: {
    trigger: '.aboutUs_cont',
    start: '-820',
    end: '0',
    scrub: true
  }
})

let itemsL = gsap.utils.toArray('.gallery .gallery__item_left')

itemsL.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: -100 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-650',
      end: '0',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.gallery .gallery__item_right')

itemsR.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: 100 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-600',
      end: 'top',
      scrub: true
    }
  })
})


