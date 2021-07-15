import stls from '@/styles/components/general/StudyFormat.module.sass'
import { IconScreenPlay } from '@/components/icons'

const StudyFormat = () => {
  return (
    <div className={stls.container}>
      <div>
        <IconScreenPlay />
      </div>
      <p className={stls.text}>Дистанционное обучение</p>
    </div>
  )
}

export default StudyFormat
