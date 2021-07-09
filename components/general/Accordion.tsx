import stls from '@/styles/components/general/Accordion.module.sass'
import ImageContainer from '@/components/general/ImageContainer'

const Accordion = ({
  title,
  accordionContent,
  isList = false,
  isImage = false,
  idx = null
}) => {
  const accordionBlockClasses = ['accordion-block']
  const accordionContentClasses = ['accordion-content']

  if (isImage) {
    accordionBlockClasses.push('accordion-block--equal-padding')
    accordionContentClasses.push('accordion-image-content')
  }

  if (idx === 0) {
    accordionBlockClasses.push('opened')
    accordionContentClasses.push('grid')
  }

  let content

  if (typeof accordionContent === 'string') {
    content = <p className={stls.mb}>{accordionContent}</p>
  }

  if (!isList && Array.isArray(accordionContent)) {
    content = accordionContent.map((item, idx) => (
      <p key={idx} className={stls.mb}>
        {item}
      </p>
    ))
  }

  if (isList && Array.isArray(accordionContent)) {
    content = (
      <ol>
        {accordionContent.map((item, idx) => (
          <li key={idx} className={stls.olItem}>
            {item}
          </li>
        ))}
      </ol>
    )
  }

  if (isImage && Array.isArray(accordionContent)) {
    content = accordionContent.map((image, idx) => (
      <ImageContainer
        key={idx}
        image={image}
        imageWidth={image.width}
        imageHeight={image.height}
      />
    ))
  }

  return (
    <div className={accordionBlockClasses.join(' ')}>
      <div className='plus'>
        <i></i>
        <i></i>
      </div>
      <div className='accordion-title'>{title}</div>
      <div className={accordionContentClasses.join(' ')}>{content}</div>
    </div>
  )
}

export default Accordion
