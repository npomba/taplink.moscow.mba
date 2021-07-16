import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import useAt from '@/components/hooks/useAt'
import { IconClose, IconCheck } from '@/components/icons'

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
    <div className={stls.container}>
      <button className={stls.close} onClick={closePopUp}>
        <IconClose />
      </button>
      <div className={stls.icon}>
        <IconCheck />
      </div>
      <h3 className={stls.title}>Спасибо!</h3>
      <p className={stls.text}>Мы свяжемся с Вами в ближайшее время</p>
      <button className={stls.btn} onClick={closePopUp}>
        Ok
      </button>
    </div>
  )
}

export default Thankyou
