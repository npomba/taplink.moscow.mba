import setString from '@/components/hooks/setString'
import langMenu from '@/data/translation/menu'

const getStringDeclensionNumber = num => {
  const value = Math.abs(num) % 100
  const number = num % 10

  if (value > 10 && value < 20) return 2
  if (number > 1 && number < 5) return 1
  if (number === 1) return 0

  return 2
}

const ProgramsNumber = ({ programs, type = '', format = '' }) => {
  let programsNumber

  if (type && format)
    programsNumber = programs.filter(
      program =>
        program.mbaTypeOfProgram === type && program.mbaFormat === format
    ).length
  else programsNumber = programs.length

  return (
    <div className='directions-count'>
      <span>{programsNumber} </span>
      {setString(
        langMenu.qtPrograms,
        false,
        getStringDeclensionNumber(programsNumber)
      )}
    </div>
  )
}

export default ProgramsNumber
