export default $ => (
  () => {
    $.browserSync.init({
      open: false,
      notify: false,
      proxy: 'http://bridgecore.dev/',
    })
  }
)
