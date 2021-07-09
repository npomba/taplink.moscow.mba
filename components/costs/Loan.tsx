import useAt from '@/components/hooks/useAt'

const Loan = ({ discount = false, type = null, format = null }) => {
  const at = useAt()

  const price = {
    loanRegular: {
      mini: {
        online: '9 000',
        blended: '13 000'
      },
      professional: {
        online: '24 000',
        blended: '25 000'
      },
      industry: {
        online: '24 000',
        blended: '25 000'
      },
      profession: {
        online: '6 000'
      }
    },
    loanDiscounted: {
      mini: {
        online: '4 950'
      },
      professional: {
        online: '13 250'
      },
      industry: {
        online: '13 250'
      },
      profession: {
        online: '3 250'
      }
    }
  }

  const regularOrDiscounted = discount ? 'loanDiscounted' : 'loanRegular'

  return (
    <>
      {discount &&
        !at.blended(
          <>
            <i className='old-price'>
              {price.loanRegular[type]?.[format]} Р. / мес
            </i>
          </>
        )}
      <i className={discount ? 'new-price' : 'simple-price'}>
        {price[regularOrDiscounted]?.[type]?.[format]} Р. / мес
      </i>
    </>
  )
}

export default Loan
