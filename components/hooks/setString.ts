import { useRouter } from 'next/router'

const setString = (str, programTitle = false) => {
  const router = useRouter()

  let output = ''

  if(programTitle === false){
    if(router.locale === 'en-US'){
      output = str.en
    }else{
      output = str.ru
    }
  }else{
    if(router.locale === 'en-US'){
      output = str.titleEng
    }else{
      output = str.title
    }
  }
  

  return output
}

export default setString