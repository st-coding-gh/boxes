const location_origin_url = new URL(window.location.origin)
const port = location_origin_url.port
const isDev = port === '4444' ? true : false
const base = isDev ? 'http://localhost:3333' : window.location.origin

export const URL_DB = {
  getAll: new URL('/database/get-all', base),
  createItem: new URL('/database/create-items', base),
  deleteItem: new URL('/database/delete-item', base),
  updateItem: new URL('/database/update-item', base),
}

export const BOX_NUMBERS = [
  '1.1',
  '1.2',
  '1.3',
  '1.4',
  '1.5',
  '1.6',
  '2.1',
  '2.2',
  '2.3',
  '2.4',
  '2.5',
  '2.6',
  '3.1',
  '3.2',
  '3.3',
  '3.4',
  '3.5',
  '3.6',
  '4.1',
  '4.2',
  '4.3',
  '4.4',
  '4.5',
  '4.6',
]
