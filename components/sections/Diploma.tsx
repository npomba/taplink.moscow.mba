import Image from 'next/image'
import useAt from '@/components/hooks/useAt'
import { base64pixel } from '@/config/index'

const Diploma = () => {
  const at = useAt()
  return (
    <section className='diplom-section'>
      <div className='image'>
        <Image
          src={
            at.mini
              ? '/assets/images/diplomas/mba-mini-diploma.jpg'
              : at.professional
              ? '/assets/images/diplomas/mba-professional-diploma.jpg'
              : at.industry
              ? '/assets/images/diplomas/mba-industry-diploma.jpg'
              : '/assets/images/diplomas/mba-mini-diploma.jpg'
          }
          alt='Ваш будущий диплом'
          width={532}
          height={376}
          layout={'responsive'}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className='content'>
        <h2>Ваш будущий диплом</h2>
        <div className='desc'>
          Международный диплом установленного образца с присвоением степени
          «Мастер делового администрирования» с европейским приложением
        </div>
        {at.online && (
          <div className='note'>
            Диплом MBA Online не отличается от дипломов очных программ за счет
            того, что преподают те же спикеры по тем же учебным планам
          </div>
        )}
      </div>
    </section>
  )
}

export default Diploma
