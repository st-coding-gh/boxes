export default function outputClickHandler(e, setModalItem, setDataItem) {
  console.log(e.target)
  if (e.target.matches('.output-item')) {
    setModalItem(true)
    setDataItem({
      item: e.target.textContent,
      id: e.target.dataset.id,
    })
  }
}
