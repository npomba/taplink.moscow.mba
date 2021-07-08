import stls from '@/styles/components/layout/AskQuestion.module.sass'
import SVGMessages from '@/components/svgs/SVGMessages'

const AskQuestion = ({ handleClickedAskQuestion }) => {
  return (
    <div className={stls.container}>
      <div className={stls.messages} onClick={handleClickedAskQuestion}>
        <SVGMessages />
      </div>
    </div>
  )
}

export default AskQuestion
