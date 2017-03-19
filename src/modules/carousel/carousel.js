import Swiper from 'swiper'

const _ = {
  carousels: document.querySelectorAll('.Carousel'),
}

let Swipers = {}

const init = () => {

  for (let i = 0; i < _.carousels.length; i += 1) {
    const container = _.carousels[i].querySelector('.Carousel__container')
    const pagination = _.carousels[i].querySelector('.Carousel__pagination')

    const carouselTop = new Swiper(container, {
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      keyboardControl: true,
    })

    const carouselBottom = new Swiper(pagination, {
      centeredSlides: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
    })

    carouselTop.params.control = carouselBottom
    carouselBottom.params.control = carouselTop
  }
}

export default {
  init,
}
