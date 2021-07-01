import stls from '@/styles/components/general/ProgramsColumn.module.sass'
import Link from 'next/link'
import langMenu from '@/data/translation/menu'
import SetString from '@/components/hooks/SetString'
import Until from '@/components/costs/Until'
import Price from '@/components/costs/Price'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'
import ProgramsQt from '@/components/hooks/ProgramsQt'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import Discount from '../costs/Discount'
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
            {SetString(langMenu.onlineTitle)}
            <div className='discount'>
              <div className='size'>
                <Discount />
              </div>
              <span>
                <Until />
              </span>
            </div>
          </div>
          <div className='directions-count'>
            <ProgramsQt programs={data} type={type} format={'online'} />{' '}
            {SetString(langMenu.qtPrograms)}
          </div>
          <div className='price'>
            {SetString(langMenu.price)}:{' '}
            <i className='new-price'>
              {' '}
              <Price discount={true} type={type} format={'online'} /> Р.
            </i>{' '}
            <i className='old-price'>
              {' '}
              <Price discount={false} type={type} format={'online'} /> Р.
            </i>
          </div>
          <div className='info-list'>
            <div className='info-flex'>
              <div className='pic'>
                <SVGCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{SetString(langMenu.formatRemote)}</span>
            </div>
            <div className='info-flex'>
              <div className='pic'>
                <SVGScreen fill={'#C7C7C7'} />
              </div>
              <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                {SetString(langMenu.qtSubjects)}
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
                      <a>{SetString(item, true)}</a>
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
          <div className='name'>{SetString(langMenu.blendedTitle)}</div>
          <div className='directions-count'>
            <ProgramsQt programs={data} type={type} format={'blended'} />{' '}
            {SetString(langMenu.qtPrograms)}
          </div>
          <div className='price'>
            {SetString(langMenu.price)}:{' '}
            <i className='simple-price'>
              {' '}
              <Price discount={false} type={type} format={'blended'} /> Р.
            </i>
          </div>
          <div className='info-list'>
            <div className='info-flex'>
              <div className='pic'>
                <SVGCheckCircle fill={'#C7C7C7'} />
              </div>
              <span>{SetString(langMenu.formatBlended)}</span>
            </div>
            <div className='info-flex'>
              <div className='pic'>
                <SVGScreen fill={'#C7C7C7'} />
              </div>
              <span>
                <ProgramSubjects type={type} sum={true} />{' '}
                {SetString(langMenu.qtSubjects)}
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
                      <a>{SetString(item, true)}</a>
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
              ? SetString(langMenu.categoryDiscMini)
              : type === 'professional'
              ? SetString(langMenu.categoryDiscProfessional)
              : type === 'industry'
              ? SetString(langMenu.categoryDiscIndustry)
              : null}
          </p>
          <div className='info-flex'>
            <div className='pic'>
              <SVGPaperCorner fill={'#C7C7C7'} />
            </div>
            <span>
              <ProgramSubjects type={type} subjects='base' />{' '}
              {SetString(langMenu.categoryAboutManagement)}
            </span>
          </div>
          <div className='info-flex'>
            <div className='pic'>
              <SVGPaperCorner fill={'#C7C7C7'} />
            </div>
            <span>
              <ProgramSubjects type={type} subjects='specialty' />{' '}
              {SetString(langMenu.categorySpecializedSubjects)}
            </span>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ProgramsColumn
