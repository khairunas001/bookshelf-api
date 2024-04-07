const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  // ----------------------------fitur menambahkan buku------------------------
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  // -------------------------------------------fitur menampilkan seluruh buku---------------------
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  // ----------------------------------------fitur menampilkan detail buku---------------------
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  // -----------------mengedit buku------------------------
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  // ---------------------fitur dhapus buku---------------
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
