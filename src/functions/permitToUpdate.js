export default function permitToUpdate(
  fullMatchModalItem,
  dataItem,
  input,
  setStatusModalItem,
  setStatus,
  setShowModalItem,
  getAll,
  url,
  setData,
  updateItem,
  setOutputList
) {
  if (input.trim() === '') {
    setStatusModalItem({
      show: true,
      type: 'error',
      message: 'пустоту в коробку положить нельзя',
    })
  } else if (input.match(/;/)) {
    setStatusModalItem({
      show: true,
      type: 'error',
      message: 'нельзя обновить несколько предметов (;)',
    })
  } else if (fullMatchModalItem && dataItem.item != input) {
    setStatusModalItem({
      show: true,
      type: 'error',
      message: 'уже есть в коробках',
    })
  } else {
    updateItem(url.updateItem, dataItem.id, input).then(res => {
      const inputElement = document.getElementById('input')
      inputElement.innerHTML = ''
      setOutputList(null)
      setShowModalItem(false)
      setStatus({
        show: true,
        type: 'success',
        message: `${dataItem.item} обновлено на ${input}`,
      })
      getAll(url.getAll, setData)
    })
  }
}
