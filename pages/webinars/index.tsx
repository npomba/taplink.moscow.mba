import Webinars from '@/components/pages/Webinars'
import { backendUrl, apiProgramsReqUrl } from '@/config/index'

const webinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
}

export async function getStaticProps() {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default webinars
