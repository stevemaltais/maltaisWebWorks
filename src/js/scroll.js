import LocomotiveScroll from 'locomotive-scroll';

function initializeScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767,
    },
    tablet: {
        smooth: !1,
        breakpoint: 1024
    },
  });

  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));
  
  return scroll;
}

export default initializeScroll;
