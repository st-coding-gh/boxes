export default function outputClickHandler(
  e,
  setShowModalItem,
  setDataItem,
  setShowModalItemBox,
  setDataItemBox
) {
  if (e.target.matches('.output-item')) {
    setShowModalItem(true)
    setDataItem({
      item: e.target.textContent,
      id: e.target.dataset.id,
    })
  }
  if (e.target.matches('.output-box')) {
    setShowModalItemBox(true)
    setDataItemBox({
      box: e.target.textContent,
      id: e.target.dataset.id,
    })
  }
}
