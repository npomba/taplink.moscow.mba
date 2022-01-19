import axios from 'axios'
import { routesFront } from '@/config/index'

const hitContactRoute = async values => {
  try {
    const res = await axios.post(`${routesFront.root}/api/contact`, values)
    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}

export default hitContactRoute
