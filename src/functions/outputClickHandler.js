export default function outputClickHandler(e, setShowModalItem, setDataItem) {
  console.log(e.target)
  if (e.target.matches('.output-item')) {
    setShowModalItem(true)
    setDataItem({
      item: e.target.textContent,
      id: e.target.dataset.id,
    })
  }
}
