import stls from '@/styles/components/pages/Program.module.sass'
import Heading from '@/components/general/Heading'
import Pros from '@/components/sections/Pros'
import Cta from '@/components/sections/Cta'

const Program = ({ program: { title, _id } }) => {
  return (
    <>
      <Heading title={title} />
      <Pros />
      <Cta data={{ title, id: _id }} />
    </>
  )
}

export default Program
