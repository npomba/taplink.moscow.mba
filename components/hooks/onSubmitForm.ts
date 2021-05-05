import axios from 'axios'
import { thisServer } from '@/config/index'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { gtmId } from '@/config/index'
import useAt from '@/components/hooks/useAt'

const onSubmitForm = async (values) => {
  const at = useAt()
  const tagManagerArgs = {
    gtmId: gtmId,
    dataLayer: {
      format: at.online ? 'online' : at.blended ? 'blended' : null,
      type: at.mini
        ? 'mini'
        : at.professional
        ? 'professional'
        : at.industry
        ? 'industry'
        : null,
    },
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  try {
    const res = await axios.post(`${thisServer}/api/contact`, values)
    res.status === 200 && console.log('Success')

    // const leadEvent = new Event('lead')
    // window.addEventListener('lead', () => {
    //   dataLayer.push({ event: 'lead' })
    // })
    // window.dispatchEvent(leadEvent)

    // dataLayer.push({ event: 'lead' })

    // res.status === 500 && console.log('Error')
  } catch (err) {
    console.log(err)
  }
}

export default onSubmitForm
