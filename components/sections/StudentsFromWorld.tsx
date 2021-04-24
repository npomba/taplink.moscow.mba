import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'
import imageData from '@/components/images/data/studentsFromWorld'

const StudentsFromWorld = () => {
  return (
    <section className='world-mba-section'>
      <div className='world-mba-flex'>
        <div className='world-mba-text'>
          <h2>{setString(lang.mbaWorldTitle)}</h2>
          <p className='title-desc'>{setString(lang.mbaWorldDics)}</p>
        </div>
        <div className='world-mba-image'>
          <div className='image'>
            <Image
              src={imageData.image.src}
              alt={setString(imageData.image.alt)}
              width={540}
              height={500}
            />
          </div>
          <div className='info'>
            <span>{setString(lang.mbaWorldMoreThan)}</span>
            <strong>20</strong>
            <span>{setString(lang.mbaWorldCountries)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentsFromWorld
