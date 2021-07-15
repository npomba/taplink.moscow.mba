import stls from '@/styles/components/icons/IconScreenPlay.module.sass'

const IconScreenPlay = () => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.625 17.25V19.5H17.125V21.75H5.875V19.5H10.375V17.25H1.375C1.07663 17.25 0.790483 17.1315 0.579505 16.9205C0.368526 16.7095 0.25 16.4234 0.25 16.125V1.5C0.25 1.20163 0.368526 0.915483 0.579505 0.704505C0.790483 0.493526 1.07663 0.375 1.375 0.375H21.625C21.9234 0.375 22.2095 0.493526 22.4205 0.704505C22.6315 0.915483 22.75 1.20163 22.75 1.5V16.125C22.75 16.4234 22.6315 16.7095 22.4205 16.9205C22.2095 17.1315 21.9234 17.25 21.625 17.25H12.625ZM2.5 2.625V15H20.5V2.625H2.5ZM9.25 5.4375L14.875 8.8125L9.25 12.1875V5.4375Z'
          fill='white'
        />
      </svg>
    </div>
  )
}

export default IconScreenPlay
