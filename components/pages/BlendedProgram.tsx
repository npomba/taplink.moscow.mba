import Head from 'next/head'
import Reviews from '@/components/sections/Reviews'
import Rules from '@/components/sections/Rules'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import Until from '@/components/dates/Until'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramsModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Faq from '@/components/sections/Faq'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import RelevantContent from '@/components/sections/RelevantContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '../sections/Pros'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const PageBlendedProgram = ({ program }) => {
  // useEffect(() => {

  //   loadJs([
  //     '/assets/js/slick.min.js',
  //     '/assets/js/lazysizes.min.js',
  //     '/assets/js/circle-progress.min.js',
  //     '/assets/js/jquery.magnific-popup.min.js',
  //     '/assets/js/myjs.js'
  //   ], {
  //     async: false
  //   })
  // }, [])
  const data = program.data

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>

      <JumbotronProgram data={data} format={'blended'} />

      <div className='container'>
        <ProgramGoal data={data} />
        <WhatWillYouLearn data={data} />
        <ProgramDesc data={data} />

        {/* blended-info-section */}
        <section className='blended-info-section section-pl'>
          <div className='title-pl red'>3 очных модуля</div>
          <h2>MBA mini blended это очные встречи с экспертами в Москве</h2>
          <div className='blended-info-flex'>
            <div className='blended-info-content'>
              <h4>3 очных модуля в Москве длительностью 14 дней</h4>
              <ul className='simple-list'>
                <li>
                  Очные сессии помогут пообщаться с единомышленниками и решить
                  конкретные вопросы, которые встречаются в повседневной
                  деятельности компании
                </li>
                <li>
                  Во время обучения Вы вместе с преподавателями проанализируете
                  все бизнес-процессы и начнете реализацию долгосрочного плана
                  по повышению эффективности работы компании
                </li>
              </ul>
            </div>
            <div className='blended-info-images'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/top_path_pic_1.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>

        <Pros format={'blended'} />
        <HowProcessGoes />
        <ProgramsModules />

        {/* support-section */}
        <section className='support-section mb-130'>
          <h3>Получите консультацию по программе</h3>
          <div className='text'>
            Оставьте заявку и получите консультацию по программе MBA, узнайте
            точную стоимость, возможные варианты скидок и требования к
            поступлению
          </div>
          <form action='#' method='post' className='simple-form support-form'>
            <div className='inputs-flex'>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Введите имя</div>
              </div>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Номер телефона</div>
              </div>
              <div className='input-block width-33'>
                <button type='submit' className='button white-button'>
                  Оставить заявку
                </button>
              </div>
            </div>
            <div className='personal-datas'>
              Нажимая на кнопку, вы даете согласие на обработку своих
              <a href=''> персональных данных</a>
            </div>
          </form>
        </section>

        <Teachers />
        <RelevantContent />
        <CorporateClients />
        <Accreditation />
        <Rules prices={{ lowerPrice: '300 000', higherPrice: '1 500 000' }} />

        <Diploma />
        <Students />
        <Reviews />

        {/* program-price-section */}
        <section className='program-price-section'>
          <h2>Стоимость обучения</h2>
          <div className='program-price-block single-program-price'>
            <div className='inner-block'>
              <div className='name'>MBA Professional</div>
              <ul className='simple-list'>
                <li>От 3 до 6 месяцев обучения</li>
                <li>Дистанционно</li>
                <li>
                  Ближайший набор <Until preposition={false} />
                </li>
                <li>432 часа живого общения с экспертами</li>
                <li>40 дисциплин об управлении</li>
                <li>12 дисциплин специализации</li>
                <li>3 выезднных модуля в Москве</li>
              </ul>
              <div className='note'>*Возможна рассрочка</div>
            </div>
            <div className='inner-block'>
              <div className='text'>
                <p>
                  Успех в бизнесе напрямую связывают с получением
                  бизнес-образования.
                </p>
                <p>
                  Свяжите ближайшие полгода с Moscow Business Academy и кратно
                  увеличьте запас знаний
                </p>
                <p className='red'>Запишитесь на MBA сегодня:</p>
              </div>
              <div className='price'>130 000 Р.</div>
              <div className='button-block'>
                <a href='' className='button empty-button'>
                  Оставить заявку
                </a>
              </div>
              {/* <a href='' className='cheaper-link'>
                Хочу дешевле
              </a> */}
            </div>
          </div>
        </section>

        <Faq />

        <ContactUs
          title={
            'Не знаете что выбрать? Получите консультацию по программам MBA'
          }
        />
      </div>
    </>
  )
}

export default PageBlendedProgram
