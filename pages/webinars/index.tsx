import Webinars from '@/components/pages/Webinars'
import { server, apiProgramsReqUrl } from '@/config/index'

const webinars = ({ programs }) => {
  return <Webinars title={'Вебинары'} heading={'Вебинары'} />
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

export default webinars
