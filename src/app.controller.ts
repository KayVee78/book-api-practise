import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(): Book[] {
    //within the controller we can do below stuff
    //we can get data from request (headers/params), do validation to the data getting from the client
    //we can authenticate the user
    return this.bookService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.bookService.findById(bookId);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;
    if (!bookData.title || !bookData.author || !bookData.publicationYear) {
      return undefined;
    }
    return this.bookService.createBook(bookData);
  }

  @Put(':id')
  updateBook(
    @Param('id') id: string,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    return this.bookService.updateBook(+id, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Book[] {
    return this.bookService.delete(+id);
  }
}
