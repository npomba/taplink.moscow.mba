import stls from '@/styles/components/icons/IconClock.module.sass'

const IconClock = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 23 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Циферблат</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.5349 12C21.5349 17.5232 17.1622 22 11.7674 22C6.37265 22 2 17.5232 2 12C2 6.47676 6.37265 2 11.7674 2C17.1622 2 21.5349 6.47676 21.5349 12Z'
          stroke='white'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.391 15.1799L11.4102 12.7485V7.50854'
          stroke='white'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconClock
