import axios from 'axios'
import { thisServer } from '@/config/index'

const onSubmitForm = async (values) => {
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
