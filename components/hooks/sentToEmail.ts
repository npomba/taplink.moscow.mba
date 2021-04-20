function sentToEmail(e) {
  e.preventDefault()

  const form = e.target
  const embeddedForm = form.classList.contains('embedded-form')
  let name = null, phone = null

  if(embeddedForm){
    name = e.target.childNodes[0].childNodes[0].childNodes[0].value
    phone = e.target.childNodes[0].childNodes[1].childNodes[0].value
  }
}

export default sentToEmail
