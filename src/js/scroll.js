import LocomotiveScroll from 'locomotive-scroll';

function initializeScroll() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile:1,
    smartphone: {
        smooth: !0,
        breakpoint: 767,
    },
    tablet: {
        smooth: !0,
        breakpoint: 1024,
    },
    offset: ["0", "50"],
  });

  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));
  
  return scroll;
}

export default initializeScroll;
