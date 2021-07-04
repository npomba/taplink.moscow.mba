import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import useAt from '@/components/hooks/useAt'
import SVGClose from '../svgs/SVGClose'

const Thankyou = ({ closePopUp = null, programId, programTitle }) => {
  useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'generate_lead',
        ecommerce: {
          add: {
            actionField: {
              id: programId
            },
            products: [
              {
                id: programId,
                name: programTitle,
                programFormat: at.online
                  ? 'online'
                  : at.blended
                  ? 'blended'
                  : null,
                programType: at.mini
                  ? 'mini'
                  : at.professional
                  ? 'professional'
                  : at.industry
                  ? 'industry'
                  : null
              }
            ]
          }
        }
      },
      dataLayerName: 'dataLayer'
    }
    TagManager.dataLayer(tagManagerArgs)
  }, [])

  const at = useAt()

  return (
    <div id='thanksModal' className='popup-modal thankyou-modal mfp-with-anim'>
      <div className='popup-content red-bg'>
        <div className='thanks-popup-content'>
          <div className='circle'>
            <img src='/assets/images/icon_check_red.svg' alt='' />
          </div>
          <h3>Спасибо!</h3>
          <p>Наш менеджер свяжется с Вами в ближайшее время</p>
          <button className='button white-button' onClick={closePopUp}>
            Ok!
          </button>
        </div>
      </div>
      <button className='mfp-close' type='button' onClick={closePopUp}>
        <SVGClose />
      </button>
    </div>
  )
}

export default Thankyou
