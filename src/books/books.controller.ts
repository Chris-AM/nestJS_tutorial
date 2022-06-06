import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { Book } from './book.class';
import { BookDto } from './book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get()
    findAll(@Req() req: Request):Book[] {
        return this.booksService.findAll(req.query);
    }
    @Post()
    createBook(@Body() newBook: BookDto): Book{
        return this.booksService.createBook(newBook);
    }
    @Delete(':bookID')
    deleteBook(@Param('bookID') bookId: string): Book{
        return this.booksService.deleteBook(bookId)
    }
    @Put(':bookId')
    updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto): Book{
        return this.booksService.updateBook(bookId, newBook);
    }
}
