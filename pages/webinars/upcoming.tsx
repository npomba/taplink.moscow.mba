import Webinars from '@/components/pages/Webinars'
import { server, apiProgramsReqUrl } from '@/config/index'

const upcoming = ({ programs }) => {
  return (
    <Webinars
      title={'Ближайшие вебинары'}
      heading={'Ближайшие вебинары'}
      timeframe={'upcoming'}
    />
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default upcoming
