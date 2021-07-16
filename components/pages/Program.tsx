import stls from '@/styles/components/pages/Program.module.sass'
import { useRouter } from 'next/router'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import Heading from '@/components/general/Heading'
import Pros from '@/components/sections/Pros'
import Cta from '@/components/sections/Cta'

const Program = ({ program: { title, _id, goalsOfProgram } }) => {
  const router = useRouter()
  return (
    <>
      <NextSeo
        title={`${title} MBA - Moscow Business Academy`}
        description={truncate(goalsOfProgram, 120)}
        canonical={`https://promo.moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${title} MBA`}
        providerName='Moscow Business Academy'
        providerUrl={`https://promo.moscow.mba${router.asPath}`}
        description={truncate(goalsOfProgram, 120)}
      />
      <Heading title={title} />
      <Pros />
      <Cta data={{ title, id: _id }} />
    </>
  )
}

export default Program
