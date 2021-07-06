import setString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'

const getStringDeclensionNumber = num => {
  const value = Math.abs(num) % 100
  const number = num % 10

  if (value > 10 && value < 20) return 2
  if (number > 1 && number < 5) return 1
  if (number === 1) return 0

  return 2
}

const ProgramsQty = ({ programs, type = '', format = '' }) => {
  let ProgramsQty

  if (type && format)
    ProgramsQty = programs.filter(
      program =>
        program.mbaTypeOfProgram === type && program.mbaFormat === format
    ).length
  else ProgramsQty = programs.length

  return (
    <div className='directions-count'>
      <span>{ProgramsQty} </span>
      {setString(
        langMenu.qtPrograms,
        false,
        getStringDeclensionNumber(ProgramsQty)
      )}
    </div>
  )
}

export default ProgramsQty
