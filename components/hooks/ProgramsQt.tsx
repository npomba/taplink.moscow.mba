const ProgramsQt = ({ programs, type = '', format = '' }) => {
  if (type && format) {
    const output = programs.filter(
      program =>
        program.mbaTypeOfProgram === type && program.mbaFormat === format
    )
    return <span>{output.length}</span>
  } else {
    return <span>{programs.length}</span>
  }
}

export default ProgramsQt
