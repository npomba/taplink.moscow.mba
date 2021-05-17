const Price = ({ discount = false, type = null, format = null }) => {
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
      executive: '1 400 000'
    }
  }

  return (
    <>
      {/* Discounts */}
      {discount &&
        type === 'mini' &&
        format === 'online' &&
        price.discounted.mini.online}
      {discount &&
        type === 'professional' &&
        format === 'online' &&
        price.discounted.professional.online}
      {discount &&
        type === 'industry' &&
        format === 'online' &&
        price.discounted.industry.online}
      {discount && type === 'executive' && price.discounted.executive}

      {/* Regular */}
      {!discount &&
        type === 'mini' &&
        format === 'online' &&
        price.regular.mini.online}
      {!discount &&
        type === 'mini' &&
        format === 'blended' &&
        price.regular.mini.blended}

      {!discount &&
        type === 'professional' &&
        format === 'online' &&
        price.regular.professional.online}
      {!discount &&
        type === 'professional' &&
        format === 'blended' &&
        price.regular.professional.blended}

      {!discount &&
        type === 'industry' &&
        format === 'online' &&
        price.regular.industry.online}
      {!discount &&
        type === 'industry' &&
        format === 'blended' &&
        price.regular.industry.blended}

      {!discount && type === 'executive' && price.regular.executive}
    </>
  )
}

export default Price
