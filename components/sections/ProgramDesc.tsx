import stls from '@/styles/modules/sections/ProgramDesc.module.sass'
import useAt from '@/components/hooks/useAt'
import Image from 'next/image'

const ProgramDesc = () => {
  const at = useAt()
  return (
    <section className='top-path-section'>
      <div className='top-path-content'>
        <div className='title-pl'>О&nbsp;программе</div>
        <h2>
          {at.mini && at.online && 'MBA Mini ONLINE'}
          {at.professional && at.online && 'MBA Professional ONLINE'}
          {at.industry && at.online && 'MBA Industry ONLINE'}
          {at.mini && at.blended && 'MBA Mini BLENDED'}
          {at.professional && at.blended && 'MBA Professional BLENDED'}
          {at.industry && at.blended && 'MBA Industry BLENDED'} — путь
          руководителя к росту
        </h2>
        <div className='title-desc'>
          {at.mini &&
            at.online &&
            'Дистанционная программа Mini MBA разработана для специалистов и руководителей среднего звена, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          {at.professional &&
            at.online &&
            'Дистанционная программа Professional MBA разработана для специалистов и руководителей среднего звена, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          {at.industry &&
            at.online &&
            'Дистанционная программа Industry MBA разработана для специалистов и руководителей среднего звена, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'}
          {at.mini &&
            at.blended &&
            'MBA mini Blended — смешанная программа MBA: дистанционный формат плюс очные сессии. Разработана для предпринимателей и руководителей компаний, которые ценят свое время и хотят пройти обучение без сильного отрыва от работы'}
          {at.professional &&
            at.blended &&
            'MBA Professional Blended — смешанная программа MBA: дистанционный формат плюс очные сессии. Разработана для предпринимателей и руководителей компаний, которые ценят свое время и хотят пройти обучение без сильного отрыва от работы'}
          {at.industry &&
            at.blended &&
            'MBA Industry Blended — смешанная программа MBA: дистанционный формат плюс очные сессии. Разработана для предпринимателей и руководителей компаний, которые ценят свое время и хотят пройти обучение без сильного отрыва от работы'}
        </div>
      </div>
      <div className='image'>
        <Image
          src='/assets/images/top_path_pic_1.jpg'
          alt='Слушатели на конференции'
          width={503}
          height={503}
        />
      </div>
    </section>
  )
}

export default ProgramDesc
