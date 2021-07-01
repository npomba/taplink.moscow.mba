import stls from '@/styles/components/general/Stickers.module.sass'

const Stickers = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default Stickers
