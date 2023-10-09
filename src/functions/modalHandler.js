import getAll from './getAll.js'
import getURL from '../consts/url.js'
const url = getURL()

export default function modalHandler(
  target,
  setShowModal,
  setStatus,
  setData,
  createItem
) {
  if (target.matches('.modal')) {
    setShowModal(false)
  }
  if (target.matches('.boxes-li')) {
    // create const values
    const box = target.innerHTML
    const inputElement = document.getElementById('input')
    const items = inputElement.textContent

    //create item
    createItem(url.createItem, box, items).then(res => {
      console.log(res)
      const itemsRes = res.map(e => e.item).join(', ')
      const boxRes = res[0].box
      inputElement.innerHTML = ''
      setShowModal(false)
      setStatus({
        show: true,
        type: 'success',
        message: `в коробку ${boxRes} добавлено: ${itemsRes}`,
      })
      getAll(url.getAll, setData)
    })
  }
}
