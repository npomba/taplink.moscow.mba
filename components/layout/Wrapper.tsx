import stls from '@/styles/components/layout/Wrapper.module.sass'
import StickyBottomContainer from '@/components/layout/StickyBottomContainer'

const Wrapper = ({ children }) => {
  return (
    <div className='page'>
      {children}
      <StickyBottomContainer />
    </div>
  )
}

export default Wrapper
