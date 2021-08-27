// Import module
const { nanoid } = require('nanoid');
const books = require('./books');

// 1. Handler untuk menambahkan buku (CREATE)
const addBook = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const id = nanoid(16);

  // Jika jumlah halaman yg dibaca sama dengan jumlah halaman, maka buku tsbt telah selesai dibaca
  let finished = false;
  if (pageCount === readPage) {
    finished = true;
  }

  const insertedAt = new Date();
  const updatedAt = insertedAt;
  console.log(insertedAt);
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // Client tidak mengisi nama buku
  if (name === undefined) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
    response.code(400);
    return response;
  }

  // Jumlah halaman yg dibaca lebih banyak dari jumlah halaman buku
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
    response.code(400);
    return response;
  }

  books.push(newBook);

  // Buku berhasil ditambahkan
  const isSuccess = books.filter((book) => book.id === id).length > 0;
  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  }

  // general error
  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// 2. Handler untuk menampilkan semua buku (READ)
const getBooks = () => ({
  status: 'success',
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
});

// 3. Handler untuk menampilkan detail suatu buku (READ)
const getBookDetail = (request, h) => {
  const { bookId } = request.params;
  const abook = books.filter((n) => n.id === bookId)[0];

  if (abook !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        book: abook,
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};
module.exports = { addBook, getBooks, getBookDetail };
