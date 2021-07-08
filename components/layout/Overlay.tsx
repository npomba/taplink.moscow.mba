import stls from '@/styles/components/layout/Overlay.module.sass'

const Overlay = ({ handleAskQuestionFormClose }) => (
  <div className={stls.overlay} onClick={handleAskQuestionFormClose}></div>
)

export default Overlay
