// Import module
const { nanoid } = require('nanoid');
const books = require('./books');

// Handler untuk menambahkan buku (CREATE)
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

// Handler untuk menampilkan buku (READ)
const getBookDetail = (request, h) => {
  const { bookId } = request.params;
  const { reading, finished, name } = request.query;

  // get detail suatu buku
  if (bookId !== undefined) {
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
  }

  // check the conditiom of query
  let tmp;
  if (reading !== undefined) {
    if (reading === '0') {
      tmp = books.filter((n) => n.reading === false);
    } else {
      tmp = books.filter((n) => n.reading === true);
    }
  } else if (finished !== undefined) {
    if (finished === '0') {
      tmp = books.filter((n) => n.finished === false);
    } else {
      tmp = books.filter((n) => n.finished === true);
    }
  } else if (name !== undefined) {
    tmp = books.filter((n) => n.name.toLowerCase().includes(name.toLowerCase()));
  } else {
    tmp = books;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: tmp.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

// Handler untuk mengubah data buku (UPDATE)
const updateBook = (request, h) => {
  const { bookId } = request.params;

  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const updated = new Date();

  const index = books.findIndex((book) => book.id === bookId);

  // if book exist
  if (index !== -1) {
    // if name undefined
    if (name === undefined) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }

    // if readPage > pageCount
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }

    // if success
    books[index].updatedAt = updated;
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    };
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
    response.code(200);
    return response;
  }

  // book doesn't exist
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

// 5. Handler untuk menghapus buku
const deleteBook = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);

    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addBook, getBookDetail, updateBook, deleteBook,
};
