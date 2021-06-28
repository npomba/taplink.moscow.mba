import Link from 'next/link'

import langMenu from '@/data/translation/menu'
import setString from '@/components/hooks/setString'

import Until from '@/components/dates/Until'
import Price from '@/components/prices/Price'

import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsNumber from '@/components/sections/ProgramsNumber'

import TrainingPeriod from '@/components/dates/TrainingPeriod'
import Discount from '../prices/Discount'
import SVGCheckCircle from '../svgs/SVGCheckCircle'
import SVGScreen from '../svgs/SVGScreen'
import SVGPaperCorner from '../svgs/SVGPaperCorner'
import SVGClock from '../svgs/SVGClock'

const ProgramsColumn = ({ data, id, type }) => {
  return (
    <ul
      id={id}
      className={`header-podmenu-content ${
        id === 'header-podmenu-1' ? 'visible' : ''
      }`}>
      <li>
        <div className='program-detail-list'>
          <div className='name'>
            {setString(langMenu.onlineTitle)}
            <div className='discount'>
              <div className='size'>
                <Discount />
              </div>
              <span>
                <Until />
              </span>
            </div>
          </div>
          <ProgramsNumber programs={data} type={type} format={'online'} />
          <div className='price'>
            {setString(langMenu.price)}:{' '}
            <i className='new-price'>
              {' '}
              <Price discount={true} type={type} format={'online'} /> &#8381;
            </i>{' '}
            <i className='old-price'>
              {' '}
              <Price discount={false} type={type} format={'online'} /> &#8381;
            </i>
          </div>
          <div className='info-list'>
            <div className='info-flex'>
              <div className='pic'>
                <SVGCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{setString(langMenu.formatRemote)}</span>
            </div>
            <div className='info-flex'>
              <div className='pic'>
                <SVGScreen fill={'#C7C7C7'} />
              </div>
              <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                {setString(langMenu.qtSubjects)}
              </span>
            </div>
          </div>
          <ul className='program-directions-list'>
            {data.map(item => {
              if (
                item.mbaTypeOfProgram === type &&
                item.mbaFormat === 'online'
              ) {
                return (
                  <li key={item._id}>
                    <Link
                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                      locale='ru'>
                      <a>{setString(item, true)}</a>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </li>
      <li>
        <div className='program-detail-list'>
          <div className='name'>{setString(langMenu.blendedTitle)}</div>
          <ProgramsNumber programs={data} type={type} format={'blended'} />
          <div className='price'>
            {setString(langMenu.price)}:{' '}
            <i className='simple-price'>
              {' '}
              <Price discount={false} type={type} format={'blended'} /> &#8381;
            </i>
          </div>
          <div className='info-list'>
            <div className='info-flex'>
              <div className='pic'>
                <SVGCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{setString(langMenu.formatBlended)}</span>
            </div>
            <div className='info-flex'>
              <div className='pic'>
                <SVGScreen fill={'#C7C7C7'} />
              </div>
              <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                {setString(langMenu.qtSubjects)}
              </span>
            </div>
          </div>
          <ul className='program-directions-list'>
            {data.map(item => {
              if (
                item.mbaTypeOfProgram === type &&
                item.mbaFormat === 'blended'
              ) {
                return (
                  <li key={item._id}>
                    <Link
                      href={`/programs/${item.mbaTypeOfProgram}/${item.mbaFormat}/${item.url}`}
                      locale='ru'>
                      <a>{setString(item, true)}</a>
                    </Link>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </li>
      <li>
        <div className='header-podmenu-info'>
          <div className='name'>
            {type === 'mini'
              ? 'Mini MBA'
              : type === 'professional'
              ? 'Professional MBA'
              : type === 'industry'
              ? 'Industry MBA'
              : null}
          </div>
          <div className='info-flex'>
            <div className='pic'>
              <SVGClock fill={'#C7C7C7'} />
            </div>
            <span>
              <TrainingPeriod type={type} />
            </span>
          </div>
          <p>
            {type === 'mini'
              ? setString(langMenu.categoryDiscMini)
              : type === 'professional'
              ? setString(langMenu.categoryDiscProfessional)
              : type === 'industry'
              ? setString(langMenu.categoryDiscIndustry)
              : null}
          </p>
          <div className='info-flex'>
            <div className='pic'>
              <SVGPaperCorner fill={'#C7C7C7'} />
            </div>
            <span>
              <ProgramSubjects type={type} subjects='base' />{' '}
              {setString(langMenu.categoryAboutManagement)}
            </span>
          </div>
          <div className='info-flex'>
            <div className='pic'>
              <SVGPaperCorner fill={'#C7C7C7'} />
            </div>
            <span>
              <ProgramSubjects type={type} subjects='specialty' />{' '}
              {setString(langMenu.categorySpecializedSubjects)}
            </span>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ProgramsColumn
