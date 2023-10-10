// export default function () {
//   return {
//     getAll: 'http://localhost:3333/database/get-all',
//     createItem: 'http://localhost:3333/database/create-items',
//     deleteItem: 'http://localhost:3333/database/delete-item',
//     updateItem: 'http://localhost:3333/database/update-item',
//   }
// }

export default function () {
  return {
    getAll: '/database/get-all',
    createItem: '/database/create-items',
    deleteItem: '/database/delete-item',
    updateItem: '/database/update-item',
  }
}
