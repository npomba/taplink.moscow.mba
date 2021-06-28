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
