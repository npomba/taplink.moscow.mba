import stls from '@/styles/components/costs/Price.module.sass'
import classNames from 'classnames'
import useAt from '@/components/hooks/useAt'

const Price = ({ discount = false }) => {
  const at = useAt()

  const type = at.mini
    ? 'mini'
    : at.professional
    ? 'professional'
    : at.industry
    ? 'industry'
    : at.profession
    ? 'profession'
    : null

  const format = at.online ? 'online' : at.blended ? 'blended' : null

  const price = {
    regular: {
      mini: {
        online: '107 000',
        blended: '149 000'
      },
      professional: {
        online: '289 000',
        blended: '299 000'
      },
      industry: {
        online: '289 000',
        blended: '299 000'
      },
      profession: {
        online: '70 000'
      },
      executive: '1 400 000'
    },
    discounted: {
      mini: {
        online: '59 000'
      },
      professional: {
        online: '159 000'
      },
      industry: {
        online: '159 000'
      },
      profession: {
        online: '39 000'
      },
      executive: '1 400 000'
    }
  }

  return (
    <div className={stls.container}>
      {discount && (
        <span className={stls.discount}>
          {price.discounted?.[type]?.[format]} Р.{' '}
        </span>
      )}

      <span
        className={classNames({
          [stls.discounted]: discount
        })}>
        {price.regular[type]?.[format]} Р.
      </span>
    </div>
  )
}

export default Price
