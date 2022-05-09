import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
