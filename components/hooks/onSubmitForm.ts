import axios from 'axios'
import { thisServer } from '@/config/index'
import 'reactjs-popup/dist/index.css'

const onSubmitForm = async values => {
  try {
    const res = await axios.post(`${thisServer}/api/contact`, values)
    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}

export default onSubmitForm
