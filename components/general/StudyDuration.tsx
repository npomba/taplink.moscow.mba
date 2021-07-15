import stls from '@/styles/components/general/StudyDuration.module.sass'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import { IconClock } from '@/components/icons'

const StudyDuration = () => {
  return (
    <div className={stls.container}>
      <div>
        <IconClock />
      </div>
      <p className={stls.text}>
        <TrainingPeriod preposition />
      </p>
    </div>
  )
}

export default StudyDuration
