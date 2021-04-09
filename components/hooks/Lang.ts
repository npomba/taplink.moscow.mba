import months from '../../translation/data/months'
import header from '../../translation/data/header'
import menu from '../../translation/data/menu'
import footer from '../../translation/data/footer'
import index from '../../translation/data/index'
import about from '../../translation/data/about'

const getInitialLocation = () => {

  return {

  }
}

const setInitialLocationToLS = () => {
  // const lang = localStorage.getItem('lang')

  // // initial load
  // if (lang === null) {
  //   localStorage.setItem('lang', 'ru')
  // }

  return {
    
  }
}

const Lang = (() => {
  return {
    init: (lang) => {
      // console.log(lang)
      setInitialLocationToLS()
    }
  }
})()

export default Lang