import stls from '@/styles/components/general/AskQuestion.module.sass'
import { IconMessages } from '@/components/icons/'

const AskQuestion = ({ handleClickedAskQuestion }) => {
  return (
    <div className={stls.container}>
      <div className={stls.messages} onClick={handleClickedAskQuestion}>
        <IconMessages />
      </div>
    </div>
  )
}

export default AskQuestion
