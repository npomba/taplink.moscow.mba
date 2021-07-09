import Image from 'next/image'
import { IconClose } from '@/components/icons'

const PopupImage = ({ closePopupImage, image }) => {
  const popupImageWidth = image.width * 1.75
  const popupImageHeight = image.height * 1.75

  return (
    <div className='popup-modal mfp-with-anim'>
      <div className='popup-content pdf-popup-content'>
        <Image
          src={image.highRes}
          width={popupImageWidth}
          height={popupImageHeight}
          alt={image.name}
        />
      </div>
      <button
        className='mfp-close image-close'
        type='button'
        onClick={closePopupImage}>
        <IconClose />
      </button>
    </div>
  )
}

export default PopupImage
