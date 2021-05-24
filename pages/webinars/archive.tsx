import Webinars from '@/components/pages/Webinars'
import { server, apiProgramsReqUrl } from '@/config/index'

const archive = ({ programs }) => {
  return (
    <Webinars
      title={'Прошедшие вебинары'}
      heading={'Прошедшие вебинары'}
      timeframe={'archive'}
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

export default archive
