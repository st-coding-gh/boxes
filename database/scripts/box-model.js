export default class {
  #_all
  #_current = 23

  constructor() {
    this.getBoxNumbers()
  }

  getBoxNumbers() {
    const boxesNumbers = '1234'.split('').reduce((a, shelf) => {
      '123456'.split('').forEach(box => a.push(`${shelf}.${box}`))
      return a
    }, [])
    this.#_all = boxesNumbers
    return boxesNumbers
  }

  get all() {
    return this.#_all
  }

  get current() {
    return this.#_all[this.#_current]
  }

  get next() {
    const next = this.#_current < 23 ? ++this.#_current : (this.#_current = 0)
    return this.#_all[next]
  }
}
