export default function itemDeleteHandler(
  dataItem,
  setStatus,
  deleteItem,
  setShowModalItem,
  setOutputList,
  setData,
  url,
  getAll
) {
  deleteItem(url.deleteItem, dataItem).then(res => {
    const inputElement = document.getElementById('input')
    inputElement.innerHTML = ''
    setShowModalItem(false)
    setStatus({
      show: true,
      type: 'success',
      message: `предмет удален: ${res.item}`,
    })
    setOutputList(null)
    getAll(url.getAll, setData)
  })
}
