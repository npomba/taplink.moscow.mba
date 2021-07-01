import stls from '@/styles/components/general/Breadcrumbs.module.sass'
import { useEffect, useState } from 'react'
import BreadcrumbItem from '@/components/general/BreadcrumbItem'
import useAt from '@/components/hooks/useAt'
import { useRouter } from 'next/router'

const mainRoutes = [
  {
    label: {
      ru: 'Главная',
      'en-US': 'Home'
    },
    path: '/'
  },
  {
    label: {
      ru: 'Программы',
      'en-US': 'Programs'
    },
    path: '/programs'
  },
  {
    label: {
      ru: 'Об академии',
      'en-US': 'About'
    },
    path: '/about'
  },
  {
    label: {
      ru: 'Эксперты',
      'en-US': 'Experts'
    },
    path: '/teachers'
  },
  {
    label: {
      ru: 'Вебинары',
      'en-US': 'Webinars'
    },
    path: '/webinars'
  },
  {
    label: {
      ru: 'Ближайшие вебинары',
      'en-US': 'Upcoming webinars'
    },
    path: '/webinars/upcoming'
  },
  {
    label: {
      ru: 'Прошедшие вебинары',
      'en-US': 'Archived webinars'
    },
    path: '/webinars/archive'
  },
  {
    label: {
      ru: 'Контакты',
      'en-US': 'Contact'
    },
    path: '/contact'
  },
  {
    label: {
      ru: 'Нормативные документы',
      'en-US': 'Legal'
    },
    path: '/legal'
  },
  {
    label: {
      ru: 'Карточка организации',
      'en-US': 'Company Card'
    },
    path: '/legal/about'
  },
  {
    label: {
      ru: 'Оплата',
      'en-US': 'Payment'
    },
    path: '/payment'
  }
]

const homeRoute = mainRoutes.find(route => route.path === '/')

const addProgramsRoute = (splitedPath, additionalRoutes, router) => {
  const excludingMainProgramsRoute = splitedPath.filter(
    pathPart => pathPart !== 'programs'
  )

  const programsRoute = excludingMainProgramsRoute.reduce(
    (acc, curr, idx) => {
      idx === 0
        ? (acc.label[router.locale] +=
            curr[0].toUpperCase() + curr.slice(1) + ' MBA ')
        : (acc.label[router.locale] += curr.toUpperCase())
      return acc
    },
    {
      label: {
        ru: '',
        'en-US': ''
      },
      path: splitedPath.join('/')
    }
  )

  additionalRoutes.push(programsRoute)
}

const addProgramChunkRoute = (
  splitedPath,
  additionalRoutes,
  programChunkData
) => {
  const { title, titleEng, url: programChunkUrl } = programChunkData

  const programChunkRoute = {
    label: {
      ru: title,
      'en-US': titleEng
    },
    path: splitedPath.join('/') + '/' + programChunkUrl
  }

  additionalRoutes.push(programChunkRoute)
}

const Breadcrumbs = ({ programChunkData = {} }) => {
  const [breadcrumbsList, setBreadcrumbsList] = useState([homeRoute])
  const maxNumOfBreadcrumbs = 3
  const router = useRouter()
  const at = useAt()
  const userViewingPrograms = at.programs
  const userViewingProgramChunk = at.programChunk

  const matchingMainRoutes = mainRoutes.filter(
    route =>
      router.pathname === route.path ||
      at.getSplitedPath.includes(route.path.slice(1))
  )

  const additionalRoutes = []

  if (userViewingPrograms)
    addProgramsRoute(at.getSplitedPath, additionalRoutes, router)
  if (userViewingProgramChunk)
    addProgramChunkRoute(at.getSplitedPath, additionalRoutes, programChunkData)

  useEffect(() => {
    setBreadcrumbsList([
      ...breadcrumbsList,
      ...matchingMainRoutes,
      ...additionalRoutes
    ])
  }, [])

  if (!at.getSplitedPath.length) return null

  if (breadcrumbsList.length > maxNumOfBreadcrumbs)
    setBreadcrumbsList(breadcrumbsList.slice(-maxNumOfBreadcrumbs))

  return (
    <div
      className={[stls.breadcrumbsOuter, stls.jumbotronBreadcrumbs].join(' ')}>
      <ul className={stls.breadcrumbs}>
        {breadcrumbsList.map((route, idx) => {
          return (
            <BreadcrumbItem
              key={route.label['en-US'] + idx}
              linkText={route.label[router.locale]}
              linkPath={route.path}
              itemIndex={idx}
              listLength={breadcrumbsList.length}
              userViewingProgramChunk={userViewingProgramChunk}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumbs
