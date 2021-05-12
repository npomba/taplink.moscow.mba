import axios from 'axios'
import { thisServer } from '@/config/index'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ThankyouPopup from '@/components/popups/Thankyou'

const onSubmitForm = async values => {
	try {
		const res = await axios.post(`${thisServer}/api/contact`, values)
		res.status === 200 && console.log('Success')

		// res.status === 500 && console.log('Error')
	} catch (err) {
		console.log(err)
	}

	return (
		<div>
			test
			<Popup defaultOpen={true}>
				{close => <ThankyouPopup closePopUp={close} />}
			</Popup>
		</div>
	)
}

export default onSubmitForm
