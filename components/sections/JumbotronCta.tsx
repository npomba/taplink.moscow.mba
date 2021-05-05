import 'reactjs-popup/dist/index.css'
import Image from 'next/image'
import Link from 'next/link'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import onSubmitForm from '@/components/hooks/onSubmitForm'

import TagManager from 'react-gtm-module'
import { gtmId } from '@/config/index'
import useAt from '@/components/hooks/useAt'

import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import loadJs from 'loadjs'

type FormValues = {
  name: string
  phone: string
}

const JumbotronCta = ({ programTitle = null }) => {
  const at = useAt()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  useEffect(() => {
    loadJs(['/assets/js/formPlaceholder.js'], {
      async: false,
    })

    const tagManagerArgs = {
      dataLayer: {
        programFormat: at.online ? 'online' : at.blended ? 'blended' : null,
        programType: at.mini
          ? 'mini'
          : at.professional
          ? 'professional'
          : at.industry
          ? 'industry'
          : null,
        programTitle,
      },
      dataLayerName: 'LeadDataLayer',
    }
    TagManager.dataLayer(tagManagerArgs)
  }, [])

  return (
    <section className='jumbotron-section jumbotron-section--cta'>
      <div className='image'>
        <Image src='/assets/images/jumbotron_1.jpg' layout='fill' />
      </div>
      <div className='container'>
        <div className='jumbotron-content jumbotron-content-cta'>
          <div className='jumbotron-flex'>
            <div className='jumbotron-text'>
              <ul className='jumCta-links desktop'>
                <li>
                  {/* <Link href='/programs/industry'>
                    <a>INDUSTRY MBA</a>
                  </Link> */}
                  INDUSTRY MBA
                </li>
                <li className='jumCta-links__border'></li>
                <li>
                  {/* <Link href='/programs/professional'>
                    <a>PROFESSIONAL MBA</a>
                  </Link> */}
                  PROFESSIONAL MBA
                </li>
                <li className='jumCta-links__border'></li>
                <li>
                  {/* <Link href='/programs/mini'>
                    <a>MINI MBA</a>
                  </Link> */}
                  MINI MBA
                </li>
                <li className='jumCta-links__border'></li>
                <li>{setString(lang.courses)}</li>
              </ul>

              <ul className='jumCta-links mobile'>
                <li>
                  <Link href='/programs'>
                    <a>{setString(lang.programsMbaMobileLink)}</a>
                  </Link>
                </li>
              </ul>
              <h1>
                {setString(lang.headerTitlePreHighlight)}{' '}
                <span className='red'>
                  {setString(lang.headerTitleHighlight)}
                </span>{' '}
                {setString(lang.headerTitlePostHighlight)}
              </h1>
              <div className='jumCta-desc-top'>
                <span className='red'>
                  {setString(lang.headerDescTopHightlight)}
                </span>{' '}
                {setString(lang.headerDescTop)}
              </div>
              <div className='jumCta-form-desc'>
                <p className='jumCta-desc-bottom'>
                  {setString(lang.headerDescription)}
                </p>
                <form
                  method='post'
                  className='simple-form support-form embedded-form'
                  onSubmit={handleSubmit(onSubmitForm)}
                >
                  <div className='inputs-flex inputs-flex--alt'>
                    <div className='input-block width-33'>
                      <input
                        type='text'
                        {...register('name', {
                          maxLength: {
                            value: 32,
                            message: `*${setString(lang.formErrLongName)}`,
                          },
                        })}
                      />
                      <div className='input-placeholder'>
                        {setString(lang.inputName)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.name && errors.name.message}
                      </p>
                    </div>
                    <div className='input-block width-33'>
                      <input
                        type='tel'
                        {...register('phone', {
                          required: `*${setString(lang.formErrEmptyPhone)}`,
                          minLength: {
                            value: 5,
                            message: `*${setString(lang.formErrShortPhone)}`,
                          },
                        })}
                      />
                      <div className='input-placeholder'>
                        {setString(lang.inputPhone)}
                      </div>
                      <p className='inpt-err-msg'>
                        {errors.phone && errors.phone.message}
                      </p>
                    </div>
                    <div className='input-block width-33'>
                      <button
                        type='submit'
                        className={`button red-button ${
                          errors.name || errors.phone ? 'btn-disabled' : ''
                        }`}
                        disabled={errors.name || errors.phone ? true : false}
                      >
                        {setString(lang.inputSubmitAlt)}
                        <div className='arrow'>
                          <img
                            src='/assets/images/arrow_diagonal.svg'
                            width='17px'
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ul className='jumbotron-list'>
              <li>
                <div className='number'>100+</div>
                <p>{setString(lang.benefitOneDisc)}</p>
              </li>
              <li>
                <div className='number'>2021+</div>
                <p>{setString(lang.benefitTwoDisc)}</p>
              </li>
              <li>
                <div className='number'>150+</div>
                <p>{setString(lang.benefitThreeDisc)}</p>
              </li>
              <li>
                <div className='number'>2000+</div>
                <p>{setString(lang.benefitFourDisc)}</p>
              </li>
            </ul>
          </div>
          <ul className='jumbotron-red-info'>
            <li>
              <div className='detail'>{setString(lang.jumInfoOne)}</div>
            </li>
            <li>
              <div className='detail'>{setString(lang.jumInfoTwo)}</div>
            </li>
            <li>
              <div className='detail'>{setString(lang.jumInfoThree)}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default JumbotronCta
