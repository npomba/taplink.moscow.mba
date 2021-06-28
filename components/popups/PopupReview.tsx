import Image from 'next/image'
import SVGClose from '../svgs/SVGClose'

const PopupReview = ({ review, closePopUp }) => {
  return (
    <>
      <div id={`${review.id}`} className='popup-modal'>
        <div className='popup-content-origin popup-content-origin--review'>
          <div className='reviews-text-block modal-review'>
            <div className='avatar'>
              <Image
                src={`/assets/images/reviews/${review.picUrl}`}
                alt={review.name}
                height={185}
                width={185}
                priority={true}
              />
            </div>
            <div className='info'>
              <div className='text'>
                <p>{review.body}</p>
              </div>
              <div className='name'>{review.name}</div>
              <div className='job'>{review.profession}</div>
            </div>
          </div>
          <button className='mfp-close' type='button' onClick={closePopUp}>
            <SVGClose />
          </button>
        </div>
      </div>
    </>
  )
}

export default PopupReview
