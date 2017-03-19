const _ = {
  header: document.querySelector('.Header'),
  button: document.querySelector('.Header__switch'),
  elHeight: 0,
  elTop: 0,
  dHeight: 0,
  wHeight: 0,
  wScrollCurrent: 0,
  wScrollBefore: 0,
  wScrollDiff: 0,
}

const openHeader = () => {
  _.header.classList.add('is-open')
}

const closeHeader = () => {
  _.header.classList.remove('is-open')
}

const toggleHeader = () => {
  if (_.header.classList.contains('is-open')) {
    closeHeader()
  } else {
    openHeader()
  }
}

const stickyHeader = () => {
  _.elHeight = _.header.offsetHeight
  _.dHeight = document.body.offsetHeight
  _.wHeight = window.innerHeight
  _.wScrollCurrent = window.pageYOffset
  _.wScrollDiff = _.wScrollBefore - _.wScrollCurrent
  _.elTop = parseInt(window.getComputedStyle(_.header).getPropertyValue('top'), 10) + _.wScrollDiff

  if (!_.headerOpen) {
    if (_.wScrollCurrent <= 0) { // TOP OF THE PAGE
      _.header.style.top = '0px'
    } else if (_.wScrollDiff > 0) { // SCROLL UP
      _.header.classList.remove('is-at-bottom')
      _.header.style.top = `${_.elTop > 0 ? 0 : _.elTop}px`
    } else if (_.wScrollDiff < 0) { // SCROLL DOWN
      if ((_.wScrollCurrent + _.wHeight + (_.wHeight * 0.05)) >= _.dHeight - _.elHeight) { // AT BOTTOM OF THE PAGE
        _.header.classList.add('is-at-bottom')
      } else { // MID PAGE
        _.header.style.top = `${(Math.abs(_.elTop) > _.elHeight ? -_.elHeight : _.elTop)}px`
      }
    }
  }

  _.wScrollBefore = _.wScrollCurrent
}


const init = () => {
  window.addEventListener('scroll', stickyHeader)
  if (_.button) _.button.addEventListener('click', toggleHeader)
}


export default { init }