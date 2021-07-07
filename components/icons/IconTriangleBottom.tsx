import stls from '@/styles/components/icons/IconTriangleBottom.module.sass'

const IconTriangleBottom = ({ fill = '#FF3535' }) => {
  return (
    // <div className={stls.container}>
      <svg
        width='7'
        height='6'
        viewBox='0 0 7 6'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>Треугольник</title>
        <path d='M3.5 6L0.468911 0.75L6.53109 0.75L3.5 6Z' fill={fill} />
      </svg>
    // </div>
  )
}

export default IconTriangleBottom
