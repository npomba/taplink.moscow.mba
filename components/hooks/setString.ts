import { useRouter } from 'next/router'

const setString = (str) => {
  const router = useRouter()

  let output = ''

  if(router.locale === 'en-US'){
    output = str.en
  }else{
    output = str.ru
  }

  return output
}

export default setString