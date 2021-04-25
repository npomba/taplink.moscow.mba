import Link from 'next/link'
import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'
import langHeader from '@/data/translation/header'
import Until from '@/components/dates/Until'

const Programs = ({ programs }) => {
  const data = programs
  return (
    <section className='program-options-section'>
      <div className='program-options-flex'>
        <div className='program-options-left'>
          <h2>{setString(langHeader.programsBtn)}</h2>
          <ul className='program-options-tabs'>
            <li>
              <a href='' data-tab='#program-options-1' className='active-tab'>
                Mini MBA
              </a>
            </li>
            <li>
              <a href='' data-tab='#program-options-2'>
                Professional MBA
              </a>
            </li>
            <li>
              <a href='' data-tab='#program-options-3'>
                Industry MBA
              </a>
            </li>
          </ul>
        </div>
        <div className='program-options-right'>
          <div id='program-options-1' className='program-tabs-content visible'>
            <div className='top-info'>
              <div className='prog-time'>
                <i>
                  1 {setString(langMenu.categoryYear)} 6{' '}
                  {setString(langMenu.categoryMonth)}{' '}
                </i>
                <span>27 {setString(langMenu.qtSubjects)} </span>
              </div>
              <div className='prog-status'>
                {setString(langMenu.newestPrograms)} 2021{' '}
                {setString(langMenu.newestProgramsYear)}
              </div>
            </div>
            <div className='desc'>{setString(langMenu.categoryDiscMini)}</div>
            <ul className='program-options-block-tabs'>
              <li>
                <a href='#program-options-1-1' className='active'>
                  ONLINE
                </a>
              </li>
              <li>
                <a href='#program-options-1-2'>BLENDED</a>
              </li>
            </ul>
            <div className='program-options-detail'>
              <div id='program-options-1-1' className='program-options-block'>
                <div className='name'>
                  {setString(langMenu.onlineTitle)}
                  <div className='discount'>
                    <div className='size'>-30%</div>
                    <span>
                      <Until />
                    </span>
                  </div>
                </div>
                <div className='directions-count'>
                  18 {setString(langMenu.qtPrograms)}
                </div>
                <div className='price'>
                  {setString(langMenu.price)}:{' '}
                  <i className='new-price'> 490 000 Р.</i>
                  <i className='old-price'> 540 000 Р.</i>
                </div>
                <div className='info-list'>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_check_circle.svg' alt='' />
                    </div>
                    <span>{setString(langMenu.formatRemote)}</span>
                  </div>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_monitor.svg' alt='' />
                    </div>
                    <span>27 {setString(langMenu.qtSubjects)}</span>
                  </div>
                </div>
                <ul className='program-options-block-list'>
                  {data.map((item) => {
                    if (
                      item.mbaTypeOfProgram === 'mini' &&
                      item.mbaFormat === 'online'
                    ) {
                      return (
                        <li key={item._id}>
                          <Link
                            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                            locale='ru'
                          >
                            <a>{setString(item, true)}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
              <div id='program-options-1-2' className='program-options-block'>
                <div className='name'>{setString(langMenu.blendedTitle)}</div>
                <div className='directions-count'>
                  18 {setString(langMenu.qtPrograms)}
                </div>
                <div className='price'>
                  {setString(langMenu.price)}:{' '}
                  <i className='simple-price'> 540 000 Р.</i>
                </div>
                <div className='info-list'>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_check_circle.svg' alt='' />
                    </div>
                    <span>{setString(langMenu.formatBlended)}</span>
                  </div>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_monitor.svg' alt='' />
                    </div>
                    <span>27 {setString(langMenu.qtSubjects)}</span>
                  </div>
                </div>
                <ul className='program-options-block-list'>
                  {data.map((item) => {
                    if (
                      item.mbaTypeOfProgram === 'mini' &&
                      item.mbaFormat === 'blended'
                    ) {
                      return (
                        <li key={item._id}>
                          <Link
                            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                            locale='ru'
                          >
                            <a>{setString(item, true)}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div id='program-options-2' className='program-tabs-content'>
            <div className='top-info'>
              <div className='prog-time'>
                <i>
                  2 {setString(langMenu.categoryYear)} 3{' '}
                  {setString(langMenu.categoryMonth)}{' '}
                </i>
                <span>20 {setString(langMenu.qtSubjects)} </span>
              </div>
              <div className='prog-status'>
                {setString(langMenu.newestPrograms)} 2021{' '}
                {setString(langMenu.newestProgramsYear)}
              </div>
            </div>
            <div className='desc'>
              {setString(langMenu.categoryDiscProfessional)}
            </div>
            <ul className='program-options-block-tabs'>
              <li>
                <a href='#program-options-2-1' className='active'>
                  ONLINE
                </a>
              </li>
              <li>
                <a href='#program-options-2-2'>BLENDED</a>
              </li>
            </ul>
            <div className='program-options-detail'>
              <div id='program-options-2-1' className='program-options-block'>
                <div className='name'>
                  {setString(langMenu.onlineTitle)}
                  <div className='discount'>
                    <div className='size'>-25%</div>
                    <span>
                      <Until />
                    </span>
                  </div>
                </div>
                <div className='directions-count'>
                  18 {setString(langMenu.qtPrograms)}
                </div>
                <div className='price'>
                  {setString(langMenu.price)}:{' '}
                  <i className='new-price'> 490 000 Р.</i>
                  <i className='old-price'> 540 000 Р.</i>
                </div>
                <div className='info-list'>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_check_circle.svg' alt='' />
                    </div>
                    <span>{setString(langMenu.formatRemote)}</span>
                  </div>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_monitor.svg' alt='' />
                    </div>
                    <span>27 {setString(langMenu.qtSubjects)}</span>
                  </div>
                </div>
                <ul className='program-options-block-list'>
                  {data.map((item) => {
                    if (
                      item.mbaTypeOfProgram === 'professional' &&
                      item.mbaFormat === 'online'
                    ) {
                      return (
                        <li key={item._id}>
                          <Link
                            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                            locale='ru'
                          >
                            <a>{setString(item, true)}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
              <div id='program-options-2-2' className='program-options-block'>
                <div className='name'>{setString(langMenu.blendedTitle)}</div>
                <div className='directions-count'>
                  18 {setString(langMenu.qtPrograms)}
                </div>
                <div className='price'>
                  {setString(langMenu.price)}:{' '}
                  <i className='simple-price'> 540 000 Р.</i>
                </div>
                <div className='info-list'>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_check_circle.svg' alt='' />
                    </div>
                    <span>{setString(langMenu.formatBlended)}</span>
                  </div>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_monitor.svg' alt='' />
                    </div>
                    <span>27 {setString(langMenu.qtSubjects)}</span>
                  </div>
                </div>
                <ul className='program-options-block-list'>
                  {data.map((item) => {
                    if (
                      item.mbaTypeOfProgram === 'professional' &&
                      item.mbaFormat === 'blended'
                    ) {
                      return (
                        <li key={item._id}>
                          <Link
                            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                            locale='ru'
                          >
                            <a>{setString(item, true)}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div id='program-options-3' className='program-tabs-content'>
            <div className='top-info'>
              <div className='prog-time'>
                <i>
                  3 {setString(langMenu.categoryYear)} 4{' '}
                  {setString(langMenu.categoryMonth)}{' '}
                </i>
                <span>15 {setString(langMenu.qtSubjects)} </span>
              </div>
              <div className='prog-status'>
                {setString(langMenu.newestPrograms)} 2021{' '}
                {setString(langMenu.newestProgramsYear)}
              </div>
            </div>
            <div className='desc'>
              {setString(langMenu.categoryDiscIndustry)}
            </div>
            <ul className='program-options-block-tabs'>
              <li>
                <a href='#program-options-3-1' className='active'>
                  ONLINE
                </a>
              </li>
              <li>
                <a href='#program-options-3-2'>BLENDED</a>
              </li>
            </ul>
            <div className='program-options-detail'>
              <div id='program-options-3-1' className='program-options-block'>
                <div className='name'>
                  {setString(langMenu.onlineTitle)}
                  <div className='discount'>
                    <div className='size'>-15%</div>
                    <span>
                      <Until />
                    </span>
                  </div>
                </div>
                <div className='directions-count'>
                  18 {setString(langMenu.qtPrograms)}
                </div>
                <div className='price'>
                  {setString(langMenu.price)}:{' '}
                  <i className='new-price'> 490 000 Р.</i>
                  <i className='old-price'> 540 000 Р.</i>
                </div>
                <div className='info-list'>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_check_circle.svg' alt='' />
                    </div>
                    <span>{setString(langMenu.formatRemote)}</span>
                  </div>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_monitor.svg' alt='' />
                    </div>
                    <span>27 {setString(langMenu.qtSubjects)}</span>
                  </div>
                </div>
                <ul className='program-options-block-list'>
                  {data.map((item) => {
                    if (
                      item.mbaTypeOfProgram === 'industry' &&
                      item.mbaFormat === 'online'
                    ) {
                      return (
                        <li key={item._id}>
                          <Link
                            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                            locale='ru'
                          >
                            <a>{setString(item, true)}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
              <div id='program-options-3-2' className='program-options-block'>
                <div className='name'>{setString(langMenu.blendedTitle)}</div>
                <div className='directions-count'>
                  18 {setString(langMenu.qtPrograms)}
                </div>
                <div className='price'>
                  {setString(langMenu.price)}:{' '}
                  <i className='simple-price'> 540 000 Р.</i>
                </div>
                <div className='info-list'>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_check_circle.svg' alt='' />
                    </div>
                    <span>{setString(langMenu.formatBlended)}</span>
                  </div>
                  <div className='info-flex'>
                    <div className='pic'>
                      <img src='/assets/images/icon_monitor.svg' alt='' />
                    </div>
                    <span>27 {setString(langMenu.qtSubjects)}</span>
                  </div>
                </div>
                <ul className='program-options-block-list'>
                  {data.map((item) => {
                    if (
                      item.mbaTypeOfProgram === 'industry' &&
                      item.mbaFormat === 'blended'
                    ) {
                      return (
                        <li key={item._id}>
                          <Link
                            href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                            locale='ru'
                          >
                            <a>{setString(item, true)}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
