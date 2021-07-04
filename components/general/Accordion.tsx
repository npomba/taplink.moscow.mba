import stls from '@/styles/modules/Accordion.module.sass'

const Accordion = ({ title, accordionContent, isList = false }) => {
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

  return (
    <div className='accordion-block'>
      <div className='plus'>
        <i></i>
        <i></i>
      </div>
      <div className='accordion-title'>{title}</div>
      <div className='accordion-content'>{content}</div>
    </div>
  )
}

export default Accordion
