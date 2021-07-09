import Image from 'next/image'
import { IconClose } from '@/components/icons'

const PopupImage = ({ closePopupImage, image }) => {
  return (
    <div className='popup-modal mfp-with-anim'>
      <div className='popup-content pdf-popup-content image-popup'>
        <Image
          src={image.path}
          width={image.fullWidth}
          height={image.FullHeight}
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
