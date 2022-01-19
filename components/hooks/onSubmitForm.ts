import hitContactRoute from '@/components/hooks/hitContactRoute'

const onSubmitForm = async ({
  values,
  programTitle,
  promoCourseLink = null,
  setOpenLoader,
  asPath,
  setOpen,
  reset
}) => {
  setOpenLoader(o => !o)
  values.programTitle = programTitle
  values.leadPage = promoCourseLink ? promoCourseLink : asPath
  const utms = JSON.parse(sessionStorage.getItem('utms'))
  utms.utm_term = decodeURIComponent(utms.utm_term)
  values.utms = utms
  sessionStorage.removeItem('utms')
  const referer = JSON.parse(sessionStorage.getItem('referer'))
  values.referer = referer
  sessionStorage.removeItem('referer')
  const req = await hitContactRoute(values)
  if (req === 200) {
    setOpenLoader(false)
    setOpen(o => !o)
    reset()
  } else {
    console.log('err')
  }
}

export default onSubmitForm
