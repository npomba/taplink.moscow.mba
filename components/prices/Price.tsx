const Price = ({ discount = false, type = null, format = null }) => {
  const price = {
    regular: {
      mini: {
        online: '79 000',
        blended: '99 000'
      },
      professional: {
        online: '110 990',
        blended: '144 000'
      },
      industry: {
        online: '110 990',
        blended: '144 000'
      },
      executive: '490 000'
    },
    discounted: {
      mini: {
        online: '69 000'
      },
      professional: {
        online: '99 990'
      },
      industry: {
        online: '99 990'
      }
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
