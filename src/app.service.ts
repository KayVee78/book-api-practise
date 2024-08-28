import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BookService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  createBook(book: Partial<Book>): Book {
    if (book.author && book.publicationYear && book.title) {
    }
    const newId = books[books.length - 1].id + 1;

    const newBook: Book = {
      id: newId,
      author: book.author ?? '',
      title: book.title ?? '',
      publicationYear: book.publicationYear ?? 0,
    };
    books.push(newBook);

    return newBook;
  }

  updateBook(
    bookId: number,
    updatedBookFields: Partial<Book>,
  ): Book | undefined {
    const currentBook = books.find((book) => book.id === bookId);
    const updatedBook = {
      id: bookId,
      title: updatedBookFields.title ?? currentBook?.title,
      author: updatedBookFields.author ?? currentBook?.author,
      publicationYear:
        updatedBookFields.publicationYear ?? currentBook?.publicationYear,
    };
    books[bookId - 1] = updatedBook;
    return updatedBook;
  }

  delete(bookId: number): Book[] {
    // books = books.filter((book) => book.id !== bookId);
    books.splice(bookId - 1, 1);
    return books;
  }
}
