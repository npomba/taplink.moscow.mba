import stls from '@/styles/modules/layout/Wrapper.module.sass'
import StickyBottom from '@/components/layout/StickyBottom'

const Wrapper = ({ children }) => {
  return (
    <div className='page'>
      {children}
      <StickyBottom />
    </div>
  )
}

export default Wrapper
