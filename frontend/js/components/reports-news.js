import { GnCarousel } from '../libraries/slick'
import { responsiveSliderNumL, BREAKPOINTS } from "../libraries/utils";

const numbersSlider = responsiveSliderNumL (4);

const SELECTORS = {
  component: '.js-reports-news'
}

const OPTIONS = {
  arrows: true,
  dots: false,
  mobileFirst: true,
  touchMove:true,
  speed: 400,
  slidesToScroll: numbersSlider.xs,
  slidesToShow: numbersSlider.xs,
  variableHeight: true,
  responsive: [
    {
      breakpoint: BREAKPOINTS.get('s'),
      settings: {
        slidesToScroll: numbersSlider.s,
        slidesToShow: numbersSlider.s,
      }
    },
    {
      breakpoint: BREAKPOINTS.get('m'),
      settings: {
        slidesToScroll: numbersSlider.m,
        slidesToShow: numbersSlider.m,
      }
    },
    {
      breakpoint: BREAKPOINTS.get('l'),
      settings: {
        slidesToScroll: numbersSlider.l,
        slidesToShow: numbersSlider.l,
      }
    },
  ]
}

const sliderInstance = [...document.querySelectorAll(SELECTORS.component)]

if (sliderInstance) {
  sliderInstance.forEach(slider => {
    const parent = slider.parentElement
    const slickInstance = new GnCarousel(slider, OPTIONS, parent)

    slickInstance.initCarousel()
  })
}
