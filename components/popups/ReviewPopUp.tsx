const ReviewPopUp = ({ review, closePopUp }) => {
  return (
    <>
      <div id={`${review.id}`} className='popup-modal mfp-hide mfp-with-anim'>
        <div className='popup-content-origin'>
          <div className='reviews-text-block modal-review'>
            <div className='avatar'>
              <img
                className='lazyload'
                data-src={`/assets/images/reviews/${review.picUrl}`}
                alt=''
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
            <img src='/assets/images/close.svg' alt='Закрыть' />
          </button>
        </div>
      </div>
    </>
  )
}

export default ReviewPopUp
