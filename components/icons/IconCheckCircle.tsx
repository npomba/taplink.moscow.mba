import stls from '@/styles/components/icons/IconCheckCircle.module.sass'

const IconCheckCircle = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M8.95703 18.3856L12.7285 22.1571L24.0427 10.8428'
          stroke='white'
          strokeWidth='2'
        />
        <rect
          x='0.75'
          y='0.75'
          width='31.5'
          height='31.5'
          rx='15.75'
          stroke='white'
          strokeWidth='1.5'
        />
      </svg>
    </div>
  )
}

export default IconCheckCircle
