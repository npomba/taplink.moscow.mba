import StickyBottom from '@/components/sections/StickyBottom'

const PageWrapper = ({ children }) => {
  return (
    <div className='page'>
      {children}
      <StickyBottom />
    </div>
  )
}

export default PageWrapper
