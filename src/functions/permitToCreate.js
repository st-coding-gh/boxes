export default function permitToCreate(
  input,
  fullMatch,
  setStatus,
  setCanCreate,
  setShowModal
) {
  input = input.trim()
  if (input === '') {
    setStatus({
      show: true,
      type: 'error',
      message: 'пустоту нельзя положить в коробку',
    })
  } else if (fullMatch) {
    setStatus({
      show: true,
      type: 'error',
      message: 'уже есть в коробках',
    })
  } else {
    setCanCreate(true)
    setShowModal(true)
  }
}
