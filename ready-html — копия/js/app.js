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

let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

itemsL.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: -100 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-850',
      end: '-100',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
  gsap.fromTo(item, { opacity: 0, x: 100 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: item,
      start: '-750',
      end: 'top',
      scrub: true
    }
  })
})


