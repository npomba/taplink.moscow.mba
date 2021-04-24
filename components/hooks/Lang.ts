import months from '@/data/translation/months'
import header from '@/data/translation/header'
import menu from '@/data/translation/menu'
import footer from '@/data/translation/footer'
import index from '@/data/translation/index'
import about from '@/data/translation/about'

const getInitialLocation = () => {
  return {}
}

const setInitialLocationToLS = () => {
  // const lang = localStorage.getItem('lang')

  // // initial load
  // if (lang === null) {
  //   localStorage.setItem('lang', 'ru')
  // }

  return {}
}

const Lang = (() => {
  return {
    init: (lang) => {
      // console.log(lang)
      setInitialLocationToLS()
    },
  }
})()

export default Lang
